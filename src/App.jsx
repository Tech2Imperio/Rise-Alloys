// import { Footer } from "./components/Footer/Footer";
// import { NavBar } from "./components/NavBar/NavBar";
// import { Outlet } from "react-router-dom";
// import { FloatingWhatsApp } from "react-floating-whatsapp";
// import favicon from "../src/assets/logo/favicon.ico";
// import { Toaster } from "react-hot-toast";
// import { ToastContainer } from "react-toastify";
// import React, { useEffect } from "react";
// import "../src/pages/App.css";
// function App({ navBackground }) {
//   // Right-click disable code start
//   useEffect(() => {
//     const handleContextMenu = (e: MouseEvent) => {
//       e.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);
//   // Right-click disable code end

//   // Copy disable code start and add also app.css
//   useEffect(() => {
//     const handleCopy = (event: ClipboardEvent) => {
//       event.preventDefault();
//       // toast.error("Copying text is disabled");
//     };

//     document.addEventListener("copy", handleCopy);

//     return () => {
//       document.removeEventListener("copy", handleCopy);
//     };
//   }, []);
//   // Copy disable code end and add also app.css

//   return (
//     <div className="App">
//       <Toaster />
//       <ToastContainer />
//       <NavBar background={navBackground} />
//       <Outlet />
//       <FloatingWhatsApp
//         phoneNumber="+919372593981"
//         accountName="Rise Alloys"
//         messageDelay={2}
//         darkMode={true}
//         avatar={favicon}
//         statusMessage="Online"
//         chatMessage="Hello there! How can I assist you?"
//       />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
// import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import favicon from "../src/assets/logo/favicon.ico";
import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import "../src/pages/App.css"; // Ensure the CSS file is imported

function App({ navBackground }) {
  // Right-click disable code start
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  // Right-click disable code end

  // Copy disable code start
  useEffect(() => {
    const handleCopy = (event) => {
      event.preventDefault();
      // toast.error("Copying text is disabled");
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  // Copy disable code end

  return (
    <div className="App">
      <Toaster />
      <ToastContainer />
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
