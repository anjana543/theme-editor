import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../layout/Footer";

/**
 * @description - Home Component.
 * @returns {Node} - Home View Component
 */
function Home() {
  const themeData = useSelector((state) => state.themeData);

  return (
    <>
      <Header
        Tag="h1"
        text={`Welcome to the ${
          themeData?.theme?.org_name || "Qatalog"
        } homepage!`}
        className="w-2/4 text-5xl text-black"
      />
      <Footer text="Back to Settings" path="/" />
    </>
  );
}

export default Home;
