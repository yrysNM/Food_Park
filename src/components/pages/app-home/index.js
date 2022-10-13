import React from "react";
import AppContact from "../../app-contact/AppContact";
import AppAbout from "../../app-about/App-About";
import AppFoods from "../../app-foods/AppFoods";
import data from "../../app-foods/data/data";

const Home = () => {
  return (
    <>
      <AppFoods foodsData={data} titleHeadText={"ХОЛОДНЫЕ ЗАКУСКИ"} />
      <AppFoods foodsData={data} titleHeadText={"ГОРЯЧИЕ ЗАКУСКИ"} />
      <AppFoods foodsData={data} titleHeadText={"Мясные блюда"} />
      <AppAbout />
      <AppContact />
    </>
  );
};

export default Home;
