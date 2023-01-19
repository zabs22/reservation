import React from 'react';

//import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import SectionCard from '../../components/sectionCard/SectionCard';
import MailList from '../../components/mailList/MailList';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>

        <h1 className="homeTitle">Our Cities</h1>
        <SectionCard />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
