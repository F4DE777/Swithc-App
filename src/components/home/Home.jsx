import React,{useEffect} from "react";
import Logo from '../../assets/SwitchAppblack@2x.png'
import Footer from "../footer/Footer";
import "./home.scss";

export default function Home() {

 
useEffect(() => {
  let rad1 = document.getElementById("personal").value;
  console.log(rad1);
}, [])
  return (
    <div className="cover">
        <div className="card-cover">
              <img src={Logo} alt="logo" />
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
                      <span>
                          <label>Merchant Account</label>
                          <p>Let your customers Shop online and receive instant settlement. All without sharing your payment info.</p>
                      </span>
                    </li>
                  </ul>
                  <div className="sub">
                      <input className="submit disable" type="button" id="submit" value="Continue" />
                  </div>
              </form>
        </div>
        
      <Footer/>
    </div>
  )
}
