import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "./Components/Breadcrumb";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default App;
