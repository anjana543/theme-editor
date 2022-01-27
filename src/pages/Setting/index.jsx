import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import SelectField from "../../components/SelectField";
import TextBlock from "../../components/TextBlock";
import Footer from "../../layout/Footer";
import { addTheme } from "../../store/actions";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import InputField from "../../components/InputField";

/**
 * @description - Setting Component.
 * @returns {Node} - Setting View Component
 */
function Setting() {
  const dispatch = useDispatch();
  const { data, loading } = useFetch();
  const [organizationList, setOrganizationList] = useState([]);
  const [themeId, setThemeId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
  }

  // Effect for Search Term
  useEffect(() => {
    if (debouncedSearchTerm) {
      const filterTheme = data.filter((item) =>
        item.org_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setResults(filterTheme);
      setIsSearching(false);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  function applyThemeOnSearch(theme) {
    dispatch(
      addTheme({
        theme: theme || {},
      })
    );
    setThemeId(theme.org_name);
  }

  function handleChange(e, type) {
    if (type === "select") {
      setThemeId(e?.target?.value || "");
    } else {
      setSearchTerm(e.target.value);
      setIsSearching(true);
      setResults([]);
    }
  }

  useEffect(() => {
    if (data) {
      setOrganizationList(data);
    }
  }, [setOrganizationList, data]);

  /**
   * @description Function to add theme to the page.
   * @returns {void}
   */
  function applyTheme() {
    const selectedTheme = data.find((item) => item.org_name === themeId);
    dispatch(
      addTheme({
        theme: selectedTheme || {},
      })
    );
  }

  /**
   * @description Function to reset to the default theme.
   * @returns {void}
   */
  function resetTheme() {
    setThemeId("");
    setSearchTerm("");
    dispatch(
      addTheme({
        theme: {},
      })
    );
  }

  return (
    <>
      <div
        className="flex flex-col w-96 h-[23rem] px-7 py-6 text-left bg-light-gray shadow-lg rounded-3xl"
        data-testid="setting"
      >
        <ul
          className="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          role="tablist"
        >
          <li
            className={`grow nav-item cursor-pointer py-2 px-4 ${
              toggleState === 1 ? "border-b-4 border-blue-600" : ""
            }`}
            onClick={() => toggleTab(1)}
            role="presentation"
          >
            Search Theme
          </li>
          <li
            className={`grow nav-item cursor-pointer py-2 px-4 ${
              toggleState === 2 ? "border-b-4 border-indigo-600" : ""
            }`}
            onClick={() => toggleTab(2)}
            role="presentation"
          >
            Choose Theme
          </li>
        </ul>

        <div className="tab-content h-full">
          <div className={toggleState === 1 ? "block" : "hidden"}>
            <InputField
              placeholder="Search For Theme"
              handleChange={(e) => handleChange(e, "search")}
              value={searchTerm}
            />
            <div className="h-32 overflow-auto scrollbar">
              <TextBlock text="Searching..." isDisplay={isSearching} />
              <TextBlock
                text="No Results Found!"
                isDisplay={
                  searchTerm.length > 0 && results.length === 0 && !isSearching
                }
              />
              {results.map((option, index) => (
                <button
                  className="w-full text-gray-700 text-left block hover:bg-gray-300 px-2 py-2 outline-0 block"
                  key={option.org_name + index}
                  onClick={() => applyThemeOnSearch(option)}
                >
                  <span>{option.org_name}</span>
                  <span
                    className={`w-2 h-2 bg-pink-400 rounded-full ml-2 ${
                      themeId === option.org_name ? "inline-block" : "hidden"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
            <div className="grow-none flex justify-center">
              <Button
                text="Reset Theme"
                className="text-primary bg-white hover:bg-gray-100 focus:ring-4 focus:bg-gray-100 mr-4"
                onClickHandler={resetTheme}
                isDisabled={!themeId.length}
              />
            </div>
          </div>
          <div
            className={`flex flex-col h-full ${
              toggleState === 2 ? "block" : "hidden"
            }`}
          >
            <div className="grow">
              <SelectField
                handleChange={(e) => handleChange(e, "select")}
                val={themeId}
                options={organizationList}
              />
              <TextBlock text="Loading..." isDisplay={loading} />
            </div>
            <div className="grow-none flex justify-center">
              <Button
                text="Reset"
                className="text-primary bg-white hover:bg-gray-100 focus:ring-4 focus:bg-gray-100 mr-4"
                onClickHandler={resetTheme}
                isDisabled={!themeId.length}
              />
              <Button
                text="Apply Theme"
                className="text-white bg-primary hover:bg-blue-500"
                onClickHandler={applyTheme}
                isDisabled={!themeId.length}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer text="Your Homepage" path="/home" />
    </>
  );
}

export default Setting;
