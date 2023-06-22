// Components
import Cards from "./components/Cards";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Header";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;