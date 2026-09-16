import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import FloatingContact from "./components/FloatingContact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Custom cursor — visible on ALL pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/infra" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingContact />
      <Footer />
    </BrowserRouter>
  );
}
