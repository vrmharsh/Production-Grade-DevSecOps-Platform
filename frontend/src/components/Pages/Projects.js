import React from "react";
import "./Projects.css";
import healthpedia from "./Images/HealthPeddia.jpeg";
import Campsites from "./Images/Campsites.jpeg";
import Canva from "./Images/Canva.jpeg";
import Analytics from "./Images/Analytics.jpeg";
import Overview from "./Images/Overview.jpeg";
import YogaStudio from "./Images/Yoga Studio.jpeg";
import YogaStudioMarket from "./Images/Yoga Studio Market.jpeg";
import IbmWatsonAssistant from "./Images/IBM Watson Assistant.jpeg";


const Projects = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <a href={"https://h-app-harshverma.herokuapp.com/"} target="_blank">
            {" "}
            {/* target is set to _blank so that this link opens in new page */}
             <img src={healthpedia} className="he" alt="Healthpedia"></img>
          </a>
        </div>

        <div className="col">
          <a
            href={"https://fathomless-citadel-64363.herokuapp.com/"}
            target="_blank"
          >
            <img src={Campsites} className="he" alt="Campsites"></img>
          </a>
        </div>

        <div className="col">
          <a href={"https://www.canva.com/your-projects"} target="_blank">
            <img src={Canva} className="he" alt="healthpedia"></img>
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
        <a
            href={"https://analytics.google.com/analytics/web/?utm_source=demoaccount&utm_medium=demoaccount&utm_campaign=demoaccount#/report-home/a54516992w87479473p92320289"}
            target="_blank">
            <img src={Analytics} className="he" alt="Analytics"></img>
          </a>
        </div>

        <div className="col">
        <a
            href={"https://ads.google.com/aw/overview?ocid=547418332&euid=432811164&__u=7029698236&uscid=547418332&__c=2933423868&authuser=0&subid=in-en-et-g-aw-c-home-awhp_xin1_signin%21o2"}
            target="_blank">
            <img src={Overview} className="he" alt="Overview"></img>
          </a>
        </div>

        <div className="col">
        <a
            href={"https://app.creately.com/d/GBL23VDa1t3/edit"}
            target="_blank">
            <img src={YogaStudio} className="he" alt="YogaStudio"></img>
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
        <a
            href={"https://app.creately.com/d/QYAl8ssmmvB/edit"}
            target="_blank">
            <img src={ YogaStudioMarket} className="he" alt="YogaStudioMarket"></img>
          </a>
        </div>

        <div className="col-4">
        <a
            href={"https://eu-gb.assistant.watson.cloud.ibm.com/crn%3Av1%3Abluemix%3Apublic%3Aconversation%3Aeu-gb%3Aa%2Fd07c279611774214a4f9948e91eb39a2%3A5e8434f6-c237-4b81-9975-92a3ba16073e%3A%3A/skills/7ca67a96-8ef2-4d78-a21c-1c3a68fa115d/build/intents"}
            target="_blank">
            <img src={IbmWatsonAssistant} className="he" alt="IbmWatsonAssistant"></img>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
