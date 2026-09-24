import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryDetail from "./pages/CategoryDetail";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Industries from "./pages/Industries";

import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Certificate from "./pages/Certificate";
import MaterialDetail from "./pages/MaterialDetail";
import Materials from "./pages/Materials";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:slug" element={<CategoryDetail />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:slug" element={<MaterialDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingContact />
      <Footer />
    </BrowserRouter>
  );
}
