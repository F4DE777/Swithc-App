import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/SwitchAppblack@2x.png'
import Footer from "../footer/Footer";
import "./home.scss";
import Fade, { Rotate } from 'react-reveal';


export default function Home() {

 
useEffect(() => {
  let rad1 = document.getElementById("personal").value;
  console.log(rad1);
}, [])
  return (
      <div className="cover page" >
          <Fade bottom cascade>
            <div className="card-cover" >
              <Rotate top left>
                    <img src={Logo} alt="logo" />
              </Rotate>
              <Fade bottom cascade>
                  <form className="card-content">
                      <h4>Get started with Switch App</h4>
                      <ul>
                        <li>
                          <input type="radio" name="" id="personal" />
                          <span>
                              <label>Personal Account</label>
                              <p>Shop online or send money. All without sharing your payment info.</p>
                          </span>
                        </li>
                        <li>
                          <input type="radio" name="" id="merchant" value="2" />
                          <span >
                              <label>Merchant Account</label>
                              <p>Let your customers Shop online and receive instant settlement. All without sharing your payment info.</p>
                          </span>
                        </li>
                      </ul>
                      <Link to='/sign-up' className="sub">
                          <input className="submit disable" type="button" id="submit" value="Continue" />
                      </Link>
                  </form>
              </Fade>
            </div>
          </Fade>

        <Footer/>
      </div>

  )
}
