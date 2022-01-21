import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import LegalServices from "./Components/LegalServices/LegalServices";
import Header from "./Components/Header.js/Header";
import HowItWorks from "./Components/HowItWorks.js/HowItWorks";
import SearchAttorneys from "./Components/SearchAttorneys/SearchAttorneys";
import BrowseCategories from "./Components/BrowseCategories/BrowseCategories";
import TopAttorneys from "./Components/TopAttorneys/TopAttorneys";
import Articles from "./Components/Articles/Articles";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <LegalServices />
      <HowItWorks />
      <SearchAttorneys/>
      <BrowseCategories/>
      <TopAttorneys/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
