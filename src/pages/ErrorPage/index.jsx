import Header from "../../components/Header";
import Footer from "../../layout/Footer";

/**
 * @description - ErrorPage Component.
 * @returns {Node} - ErrorPage View Component
 */
function ErrorPage() {
  return (
    <>
      <Header
        Tag="h2"
        text="Error Page!"
        className="w-auto text-2xl text-rose"
      />
      <Footer text="Back to Settings" path="/" />
    </>
  );
}

export default ErrorPage;
