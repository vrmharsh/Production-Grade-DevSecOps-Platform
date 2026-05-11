import React from "react";
import "./About.css";
import MyImage from "./Images/Image.jpg";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <figure>
            <img src={MyImage} className="he" alt="MyImage"></img>
          </figure>
        </div>

        <div className="col">
          <section>
            <article>
              Hello! My name is Harsh. I have completed my graduation
              specialized in Electronics and communication engineering. I love
              to explore new things. While exploring I got myself landed on
              website development so I started learning it. Presently I am a
              full stack web developer. I love working on websites.
            </article>

            <article>
              Bonjour! Je m’appelle Harsh. J’ai obtenu mon diplôme spécialisé en
              électronique et en génie de la communication. J’aime explorer de
              nouvelles choses. Tout en explorant, je me suis lancé dans le
              développement de sites Web, alors j’ai commencé à l’apprendre.
              Actuellement, je suis un développeur web full stack. J’adore
              travailler sur des sites web.
            </article>
          </section>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h2 className="skills">My Skills</h2>
        </div>
      </div>

      <div className="ht mt-4">
        <p>Html</p>
        <div className="htm">
          <div className="av-1">80%</div>
        </div>

        <p>CSS</p>
        <div className="htm">
          <div className="av-2">80%</div>
        </div>
      </div>

      <div className="ht mt-4">
        <p>Html5</p>
        <div className="htm">
          <div className="av-3">70%</div>
        </div>

        <p>CSS3</p>
        <div className="htm">
          <div className="av-4">70%</div>
        </div>
      </div>

      <div className="ht mt-4">
        <p>JavaScript</p>
        <div className="htm">
          <div className="av-5">60%</div>
        </div>

        <p>Node js</p>
        <div className="htm">
          <div className="av-6">60%</div>
        </div>
      </div>
      <div className="ht mt-4">
        <p>MongoDB</p>
        <div className="htm">
          <div className="av-7">50%</div>
        </div>

        <p>React js</p>
        <div className="htm">
          <div className="av-8">40%</div>
        </div>
      </div>

      <div className="icons">
        <ul>
          <li>
            <a
              className="facebook"
              href="https://www.facebook.com/harsh.verma.7140/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>

          <li>
            <a
              className="instagram"
              href="https://www.instagram.com/harsh__vrm/"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
          </li>

          <li>
            <a className="github" href="https://github.com/" target="_blank">
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/harsh-verma-8aa66a1b3/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
