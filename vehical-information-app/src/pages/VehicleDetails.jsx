import React from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SellCar = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Vehicle Details</h2>
        <div className="sell__car-top">
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Buses/Cars Details</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">Maruti Suzuki</option>
                <option value="audi">Mahindra</option>
                <option value="toyota">Kia</option>
                <option value="bmw">Ford</option>
                <option value="audi">Hyundai</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Ridheshwar</h3>
                <h6 className="avg__price">
                ₹ 7,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 6,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 15</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Non-AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">5</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Vipul</h3>
                <h6 className="avg__price">
                ₹ 8,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 7,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 15</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Non-AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">5</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Shubham</h3>
                <h6 className="avg__price">
                ₹ 10,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 9,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 20</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">7</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Suresh</h3>
                <h6 className="avg__price">
                ₹ 11,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 10,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 25</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">5</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Rakesh</h3>
                <h6 className="avg__price">
                ₹ 12,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 11,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 10</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Non-AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">5</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Ravi</h3>
                <h6 className="avg__price">
                ₹ 7,00,000 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is ₹ 6,50,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Vehicle Rating</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">₹ 15</h6>
                <p className="spend__title">Rate per km</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">Non-AC</h6>
                <p className="spend__title">AC/Non-AC</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">5</h6>
                <p className="spend__title">Capacity</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SellCar;
