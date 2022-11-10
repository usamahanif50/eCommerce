import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "./carousel/Carousel";
import img1 from "../../Assets/home-sect3.jpg";
import comp1 from "../../Assets/comp-1.png";
import comp2 from "../../Assets/comp-2.jpg";
import comp3 from "../../Assets/comp-3.png";
import comp4 from "../../Assets/comp-4.png";
import comp5 from "../../Assets/comp-5.png";
import comp6 from "../../Assets/comp-6.jpg";
import comp7 from "../../Assets/comp-7.jpg";
import comp8 from "../../Assets/comp-8.jpg";
import comp9 from "../../Assets/comp-9.png";
import comp10 from "../../Assets/comp-10.jpg";
import comp11 from "../../Assets/comp-11.png";
import comp12 from "../../Assets/comp-12.jpg";

import categoryImg1 from "../../Assets/lighting.jpg";
import categoryImg2 from "../../Assets/DINING&KITCHEN.jpg";
import categoryImg3 from "../../Assets/wallArt.jpg";
import categoryImg4 from "../../Assets/deocr&miror.jpg";
import { convertLegacyProps } from "antd/lib/button/button";

export const Home = () => {
  const [currenceyIcon, setcurrenceyIcon] = useState("$");
  const [Data, setData] = useState("");
  const [livingRoom, setlivingRoom] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        console.log(data);
        setlivingRoom(
          data.filter((category) => category.category == "Living Room")
        );
      });
  }, []);

  return (
    <>
      <Carousel />
      <Link to="/wishlist">
        {" "}
        <h1 style={{ textAlign: "center" }}>
          Wiishlist <i className="fa fa-heart-o"></i>
        </h1>
      </Link>
      {/* <input type="text" onChange={(e) => hanlde(e)}></input> */}
      <div className="container home-Section1 ">
        <div className="row ">
          <div className="col-md-5 left">
            <h5>SUSPENSION NANO BLACK</h5>
            <h3>BEST WORLD</h3>
            <Link>More</Link>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 right">
            <h5>NEW LAMP BEDROOM</h5>
            <h3>CREATIVE</h3>
            <Link>More</Link>
          </div>
        </div>
      </div>

      <div className="container-fluid home-productSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Name">
              <h2>Living Room Furniture</h2>
              <Link>View All</Link>
            </div>
            <div className="col-md-12">
              <OwlCarousel
                className="owl-theme"
                loop
                autoPlay={true}
                margin={10}
                items={4}
                nav
                autoplayTimeout={2000}
                autoplayHoverPause={true}
                slideSpeed={true}
                autoplay={true}
              >
                {livingRoom &&
                  livingRoom.map((item, index) => (
                    <Link to={`/product/${item.id}`}>
                      <div className="col-md-12 item card">
                        <div className="img-bg">
                          <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className="card-text">
                          <p>{item.title}</p>
                          <h4>
                            {currenceyIcon}
                            {item.price}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid home-Section2 funLoveDim">
        <div className="container funLove ">
          <div className="caption">
            <div className="caption-content">
              <h2>
                {" "}
                SALE <span className="span-color">OFF</span>
              </h2>
              <h3>
                DISCOUNT NOW{" "}
                <span className="span-color">
                  70% <small>upto</small>
                </span>
              </h3>
              <Link>More</Link>
            </div>

            <br />
          </div>
        </div>
      </div>
      <div className="container empty">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>

      <div className="container home-Section3">
        <div className="row">
          <div className="col-md-12">
            <h2>Decor</h2>
          </div>
          <div className="col-md-6 left"></div>
          <div className="col-md-6 right">
            <OwlCarousel
              className="owl-theme"
              loop
              autoPlay={true}
              margin={10}
              items={2}
              nav
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              slideSpeed={true}
              autoplay={true}
            >
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="col-md-12 item card">
                  <div className="img-bg">
                    <img
                      src="https://vollemobel.7uptheme.net/wp-content/uploads/2018/09/clocks7-600x686.jpg"
                      alt="product"
                    ></img>
                  </div>
                  <div className="card-text">
                    <h5>Product Clock</h5>
                    <h4>{currenceyIcon}97.00</h4>
                  </div>
                </div>
              </Link>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="home-Section4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2> Categories</h2>
            </div>
            <div className="col-md-12 category">
              <div className="col-md-3">
                <Link>
                  <img src={categoryImg1} alt="Lighting"></img>
                  <h4>Lighting</h4>
                </Link>
              </div>
              <div className="col-md-3">
                <Link>
                  <img src={categoryImg2} alt="KITCHEN & DINING"></img>
                  <h4>KITCHEN & DINING</h4>
                </Link>
              </div>{" "}
              <div className="col-md-3">
                <Link>
                  <img src={categoryImg3} alt="wallart"></img>
                  <h4>wallart</h4>
                </Link>
              </div>
              <div className="col-md-3">
                <Link>
                  <img src={categoryImg4} alt="wallart"></img>
                  <h4>Decor & Mirror</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container home-Section5">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <h2>
              Our <span className="span-color"> Partners</span>
            </h2>
          </div>
          <div className="col-md-12">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={30}
              items={5}
              autoplay={true}
              autoplayTimeout={1000}
              autoplayHoverPause={true}
              slideSpeed={true}
              slideTransition={"linear"}
              nav
            >
              <div class="item">
                <img src={comp1} alt="logo" />
              </div>
              <div class="item">
                <img src={comp2} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp3} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp4} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp5} alt="logo" />
              </div>
              <div class="item">
                <img src={comp6} alt="logo" />
              </div>
              <div class="item">
                <img src={comp7} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp8} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp9} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp11} alt="logo" />
              </div>
              <div class="item">
                <img src={comp10} alt="logo" />
              </div>{" "}
              <div class="item">
                <img src={comp12} alt="logo" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="container-fluid home-Section6">
        <div className="row">
          <div className="col-md-12">
            <h2>GET DISCOUNT INFO</h2>
            <p>
              Subscribe to the Homess mailing list to receive updates on new
              arrivals, <br />
              special offers and other discount information.
            </p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
            <br />
            <button> Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};
