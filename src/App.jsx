import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import favicon from "../src/assets/logo/favicon.ico";
function App({ navBackground }) {
  return (
    <div className="App">
      <NavBar background={navBackground} />
      <Outlet />
      <FloatingWhatsApp
        phoneNumber="+919372593981"
        accountName="Rise Alloys"
        messageDelay={2}
        darkMode={true}
        avatar={favicon}
        statusMessage="Online"
        chatMessage="Hello there! How can I assist you?"
      />
      <Footer />
    </div>
  );
}

export default App;
