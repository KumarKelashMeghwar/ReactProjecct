import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data.json"
const App = () => {
  
  return (
    <>
      <Breadcrumb />
      <Navbar />
      <ProductDetail data={data}/>
      <Footer />
    </>
  );
}

export default App;
