import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";

function App() {
  const name = "Trong";
  
  return (
    <div className="App">
      <Header></Header>
      <NavigationMenu></NavigationMenu>
      <h1>Hello {name}</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
