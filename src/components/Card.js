import React from "react";
import "./Card.css";
import sun from "../img/sun.png";
import humidity from "../img/humidity.png";
import co2 from "../img/co2.png";
import pressure from "../img/pressure.png";
import thermometer from "../img/thermometer.png";
const Card = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="overviewInfo">
          <div className="actions"></div>

          <div className="productinfo">
            <div className="grouptext">
              <h3>TÜRKİYE</h3>
              <p></p>
            </div>
            <div className="grouptext">
              <h3>DATE</h3>
              <p>11.03.2020</p>
            </div>
            <div className="grouptext">
              <h3>WEATHER</h3>
              <h1>25°C</h1>
            </div>

            <div className="productImage">
              <img src={sun} alt="product: ps5 controller image" />
            </div>
          </div>
        </div>

        <div className="productSpecifications">
          <h1> Weather Forecast </h1>
          <p>
            {" "}
            The weather is warm enough to go out with our loved ones today....{" "}
          </p>

          <div className="productFeatures">
            <div className="feature">
              <div className="featureIcon">
                <img src={humidity} alt="product: ps5 controller image" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>HUMIDITY</strong>
                </p>
                <p>67%</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <img src={pressure} alt="product: ps5 controller image" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>PRESSURE</strong>
                </p>
                <p>
                  100 <sub>hPa</sub>
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <img src={co2} alt="product: ps5 controller image" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>CO2</strong>
                </p>
                <p>
                  100 <sub>ppm</sub>
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="featureIcon">
                <img src={thermometer} alt="product: ps5 controller image" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>Temperature</strong>
                </p>
                <p>25°C</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Card;
