// Components
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Header";


const App = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;