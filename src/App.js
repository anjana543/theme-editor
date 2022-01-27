import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout";

/**
 * @description - App Root.
 * @returns {Node} - App Root.
 */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Setting />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
