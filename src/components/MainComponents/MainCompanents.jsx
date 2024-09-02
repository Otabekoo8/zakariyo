import React from "react";
// import "./App.css";
import Navbar from '../Navbar/Navbar';
import Header from "../Header/Header";
import Bookcards from "../../components/Bookscards/BookCard";
import Footer from "../Footer/Footer";
   


const MainComponents = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Bookcards />         
            <Footer />         
       
        </>
    )
}
export default MainComponents;



