import React from "react";
import {Image} from 'react-bootstrap'
import qualwork from "./images/qualwork.gif";
import rupee from "./images/rupee.png";
import payment from "./images/payment.png";
const MainComponent3 = () => {
  return (
    <div style={{height:'20rem'}}>
      <h2 style={{textAlign:'center'}}>Our Value Proposition</h2>
      <p style={{textAlign:'center'}}>
        Building your business to match the modern world competition and to
        deliver high quality work to our clients.
      </p>
      <Image src={qualwork} alt="pic" fluid />
      <Image src={rupee} alt="pic" fluid />
      <Image src={payment} alt="pic" fluid />
    </div>
  );
};

export default MainComponent3;
