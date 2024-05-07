import "./App.css";

// IMPORT VÀO
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";

function App() {
  const name = "Trong";

  return (
    <>
    {/* KHI MUỐN SỬ DỤNG THÌ XUẤT RA */}
      <Header />
      <div>
        <Content text="Content1" active={true}/>
        <Content text="Content2" active={false}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
