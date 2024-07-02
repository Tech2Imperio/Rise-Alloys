import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App({ navBackground }) {
  return (
    <div className="App">
      <NavBar background={navBackground} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
