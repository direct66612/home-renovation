import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
