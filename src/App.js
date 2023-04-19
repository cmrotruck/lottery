import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Powerball from "./Components/Powerball";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
