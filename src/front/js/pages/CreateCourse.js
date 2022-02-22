import React from "react";
import "../../styles/CreateCourse.css";
import ClaseRemote from "../../img/claseRemote.jpg";
export const CreateCourse = () => {
  return (
    <div className="BackGround">
      <img src={ClaseRemote} className="HeaderCreate"></img>
      <div className="wrapper">
        <div className="Tittle">
          <h3>Educator Center</h3>
        </div>
        <div className="Slogan">
          <h4>
            Better than a thousand days of diligent study, is one day with a
            great teacher.
          </h4>
          <div className="Recomend">
            On this page we will got through the basics that we required in
            order to post your course in our platform. Don’t worry is not
            complicated:
            <ul>
              <li className="List">
                Create CV, this is the first step and perhaps the most
                important, here you will describe yourself the best way you can,
                to sell yourself as a professional just like ion a job
                interview, here we will create a CV in our format that you will
                be able to download for your own purpuses. If profile already
                created you will start in the next step.
              </li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </div>

        <div className="Recomendations"></div>
      </div>
    </div>
  );
};
