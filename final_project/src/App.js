import React, { useState } from "react";
import MealList from "./MealList.js";
import './App.css';
import logo from '../src/images/logo.png'
import headshot from '../src/images/rogerluz.jpeg'
import menu from '../src/images/collage.JPG'
import chefathome from '../src/images/cuttingtuna.jpg'
import solidarity from '../src/images/1dia1checf1hospital.jpg'

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=4c88da87f3fb4ad3ad3c50731912747e&timeFrame=day&targetCalories=${calories}`
    )
    .then((response ) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  }

  return (

    <>
    <div className="App"></div>
      <section className="hero">
        <nav>
            <img className="logo" src={logo} alt="Chef Roger logo" height="200" width="200"/>
            <ul id="nav-list">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="personalizedmenu.html">Projects</a></li>
                <li><a href="contactme.html">Contact Me</a></li>
            </ul>
            <button className="hamburger" id="hamburger">
                <i className="fas fa-bars"></i>
            </button>
        </nav>
        <div className="hero-area">
        <div className="hero-text">
            <h1>Chef Roger</h1>
            <p>☠️ CookIsNotDead ☠️</p>
            <div><a href="#about-me" className="button">About Me</a></div>
        </div>
        <div className="socials">
            <div><a href="https://www.linkedin.com/in/roger-bages-querol-riera-587925127/" className="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#dd8528" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
            </a></div>
            <div><a href="https://www.instagram.com/rogerbages_querol/" className="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#dd8528" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a></div>
            <div><a className="social">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#dd8528" width="40" height="40" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a></div>
        </div>
    </div>
    </section>
    <section className="sub-section" id="about-me">
        <div className="information">
            <h2>About Me</h2>
            <p>Born and raised in Barcelona, I've since my early age always being passionate about cooking. My intensive hard work took me to renowned restaurants like <a href="https://www.latavernadelclinic.com/">la Taverna del Clínic</a>, <a href="http://www.sensepressarestaurant.com/">the Sense Pressa</a>, Muffins, or <a href="https://www.xertarestaurant.com/barcelona-estrena-ohla-eixample-un-nuevo-hotel-cinco-estrellas/">the Ohla Eixample</a>, in addition to other places where I've passed during the 20 years of  my dedication to cooking. Three very different cooking styles that have helped me enrich myself and find my own identity.</p>
            <p> I'm a passionate of Japanese and French cuisine, but
            I cook all kinds of food, Italian, Moroccan, Oriental, Asian, Japanese, vegan, I enjoy all of them ... <strong>but my specialties are always with a touch of Asian!</strong></p>
            <p>I'm currently Chef in the restaurant <a href="http://orvayborn.com/en/home-3/">Orvay</a> located in teh heart of teh Born district of Santa Maria del Mar. Orvay born of the passion for gastronomy and good food, a place to share and enjoy and feel at home.</p>
        </div>
        <div className="headshot-container">
            <img className="headshot" src={headshot} alt="chefroger headshot" />
        </div>
    </section>
    <section className="sub-section-project">
        <h2>Project</h2>
        <div className="project-container">
            <div className="App">
              <section className="controls">
                <input
                type="number"
                placeholder="Calories (e.g. 2000)" 
                onChange={handleChange} />
              </section>
              <button onClick={getMealData}>get Daily Meal Plan</button>
              {mealData && <MealList mealData = {mealData} />}
                <img className="project-image" src={menu} atl="Personalized Menu" />
                <h3>Personalized Menu</h3>
                <p className="subtext"><a className="project-link" href="personalizedmenu.html">View Here</a></p>
            </div>
            <div className="project-card">
                <img className="project-image" src={chefathome} alt="Chef at Home" />
                <h4>Chef at Home</h4>
                <p className="subtext"><a className="project-link" href="chefathome.htlm">View Here</a></p>
            </div>
            <div className="project-card">
                <img className="project-image" src="src/images/duck.jpeg" alt="Cooking Course" />
                <h5>Cooking Course</h5>
                <p className="subtext"><a className="project-link" href="cookingcourse.html">View Here</a></p>
            </div>
            <div className="project-card">
                <img className="project-image" src={solidarity} alt="Solidarity Project" />
                <h6>Solidarity</h6>
                <p className="subtext"><a className="project-link" href="solidarity.html">View Here</a></p>
            </div>
        </div>
    </section>
    <footer>
       
<div className="container">

    
    <div className="mySlides">
      <div className="photo1">1 / 6</div>
        <img src="src/images/asparagus.jpeg"/>
    </div>
  
    <div className="mySlides">
      <div className="photo2">2 / 6</div>
        <img src="src/images/duck.jpeg"/>
    </div>
  
    <div className="mySlides">
      <div className="photo3">3 / 6</div>
        <img src="src/images/micuitfoiefras.jpeg"/>
    </div>
  
    <div className="mySlides">
      <div className="photo4">4 / 6</div>
        <img src="src/images/tomotoessalad.jpeg"/>
    </div>
  
    <div className="mySlides">
      <div className="photo5">5 / 6</div>
        <img src="src/images/vietnameseroll.jpeg"/>
    </div>
  
    <div className="mySlides">
      <div className="photo6">6 / 6</div>
        <img src="src/images/tunatataki.jpg"/>
    </div>
  
    
    <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a className="next" onclick="plusSlides(1)">&#10095;</a>
  
    
    <div className="caption-container">
      <p id="caption"></p>
    </div>
  
    
    <div className="row">
      <div className="column">
        <img className="demo cursor" src="img_woods.jpg" onclick="currentSlide(1)" alt="asparagus"/>
      </div>
      <div className="column">
        <img className="demo cursor" src="img_5terre.jpg" onclick="currentSlide(2)" alt="duck"/>
      </div>
      <div className="column">
        <img className="demo cursor" src="img_mountains.jpg" onclick="currentSlide(3)" alt="micuitfoiefras"/>
      </div>
      <div className="column">
        <img className="demo cursor" src="img_lights.jpg" onclick="currentSlide(4)" alt="tomotoessalad"/>
      </div>
      <div className="column">
        <img className="demo cursor" src="img_nature.jpg" onclick="currentSlide(5)" alt="tunatataki"/>
      </div>
      <div className="column">
        <img className="demo cursor" src="img_snow.jpg" onclick="currentSlide(6)" alt="vietnameseroll"/>
      </div>
    </div>
  </div>
        
    </footer>
    </>
  );
}

export default App;
