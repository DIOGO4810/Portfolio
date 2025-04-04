import { useState } from "react";
import "../CSS/pages.css";
import { Icon } from "@iconify/react";
function Projetos() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="body">
      <h1 className="title">Projects</h1>
      <div className="grid-parent">
        <div className="row">
          <div className="container size-2">
            <h2 className="title">Expense Manager</h2>
            <p className="text">
              Developed in Python, this application offers an intuitive
              graphical interface for managing monthly expenses. It supports
              real-time updates, dynamically adjusting the pie chart to reflect
              spending changes. Users can save multiple graphs and reload them,
              making it easier to analyze financial trends over time.
            </p>
            <br />
            <a
              href="https://github.com/DIOGO4810/Expense-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>
          <div className="container size-2">
            <h2 className="title">RecipeNest</h2>
            <p className="text">
              RecipeNest is a recipe app developed with React Native and Expo,
              designed to help users easily find and organize what recipes to
              cook based on the ingredients available at home, in a simple and
              intuitive way. The app uses expo-sqlite to store data locally.
            </p>
            <a
              href="https://github.com/DIOGO4810/RecipeNest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>


          <div className="container size-2">
            <h2 className="title">Spotify Backend</h2>
            <p className="text">
              A C project that involved reading CSV files and storing
              information in efficient data structures. The focus was on
              creating queries that allowed quick and efficient data access,
              such as searching for songs, artists, or user information. This
              project provided valuable learning about algorithm efficiency and
              the use of data structures to handle large volumes of data.
            </p>
            <a
              href="https://github.com/DIOGO4810/LI3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Resource Manager</h2>
            <p className="text">
              A C project that centralizes PC information in a single tool.
              Instead of opening multiple applications to check data such as
              battery consumption, RAM usage, available memory, CPU utilization,
              and uptime, this project provides access to all these resources in
              a simple interface. The tool aims to facilitate system performance
              and consumption monitoring without the need for multiple
              applications.
            </p>
            <a
              href="https://github.com/DIOGO4810/Gerenciador-de-Recursos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Portfolio</h2>
            <p className="text">
              A website built with React, JavaScript, HTML, and CSS, intended to
              be an extension of my CV. The goal was to provide a more
              comprehensive view of who I am, highlighting my skills and
              projects in an interactive way. Additionally, this project allowed
              me to learn and apply the deployment process of a web application,
              ensuring that the site was accessible online to any visitor.
            </p>
            <a
              href="https://github.com/DIOGO4810/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">CriptoPredictor</h2>
            <p className="text">
              This project is part of the 3rd edition of BugsByte (2025), a
              Hackathon organized by CeSium. Our team chose the theme of a price
              predictor for crypto assets and baskets. To achieve this, we
              decided to develop a mobile application built with React Native.
              Using TensorFlow and Gemini API to predict the assets future
              prices.
            </p>
            <a
              href="https://github.com/DIOGO4810/BugsByte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Donkey Kong in haskell</h2>
            <p className="text">
              This project recreated the game Donkey Kong using Haskell and the
              Gloss library for graphics. The goal was to learn functional
              programming by applying concepts such as pure functions and
              immutable state management. Gloss was used to render 2D graphics
              while animating the game, allowing for the exploration of
              challenges in implementing games without imperative loops, which
              are typical in imperative languages.
            </p>
            <br />
            <a
              href="https://github.com/DIOGO4810/LI1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projetos;
