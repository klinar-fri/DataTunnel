import React from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/AuthContext";


function App() {
  return (
    <>
      <AuthProvider>
        <NavBar></NavBar>
        <MainPage></MainPage>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
