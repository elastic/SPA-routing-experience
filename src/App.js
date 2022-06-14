import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Template from "./routes/Template";

const App = () => {
  const [ skipLinkVisible, setSkipLinkVisible ] = useState(false);

  const handleSkipLink = () => {
    setSkipLinkVisible(!skipLinkVisible);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template skipLinkVisible={skipLinkVisible} />}>
          <Route index element={
            <Home
              pageTitle="We Say So Homepage"
              handleSkipLink={handleSkipLink}
              skipLinkVisible={skipLinkVisible}
            />} />
          <Route path="expenses" element={
            <Expenses
              pageTitle="We Say So Expenses"
              handleSkipLink={handleSkipLink}
              skipLinkVisible={skipLinkVisible}
            />} />
          <Route path="invoices" element={
            <Invoices
              pageTitle="We Say So Invoices"
              handleSkipLink={handleSkipLink}
              skipLinkVisible={skipLinkVisible}
            />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
