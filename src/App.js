import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Template from "./routes/Template";

const App = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState("");

  const handlePageTitle = (title) => {
    setCurrentPageTitle(title);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Template pageTitle={currentPageTitle} />}>
          <Route
            index
            element={
              <Home
                pageTitle="We Say So Homepage"
                handlePageTitle={handlePageTitle}
              />
            }
          />
          <Route
            path="expenses"
            element={
              <Expenses
                pageTitle="We Say So Expenses"
                handlePageTitle={handlePageTitle}
              />
            }
          />
          <Route
            path="invoices"
            element={
              <Invoices
                pageTitle="We Say So Invoices"
                handlePageTitle={handlePageTitle}
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
