import { useSelector } from "react-redux";

/**
 * @description - Layout Component.
 * @returns {Node} - Layout View Component
 */
function Layout({ children }) {
  const themeData = useSelector((state) => state.themeData);

  return (
    <main
      className={`flex flex-col items-center justify-center h-screen ${
        themeData?.theme?.background_image ? "" : "bg-accent-neutral-200"
      }`}
      {...(themeData?.theme?.background_image && {
        style: {
          backgroundImage: `url(${themeData.theme.background_image})`,
        },
      })}
    >
      {children}
    </main>
  );
}

export default Layout;
