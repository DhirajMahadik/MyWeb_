import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

export default function ComercialPlan() {

  const Comercial = styled.section`
  background-color: #242323;

  .msg h1{
    color: #f20f0f;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 900;
    margin:70px auto ;
    // text-shadow:0 0 40px rgb(255, 255, 255);
  }

  .msg{
    display: flex;
    margin: auto;
    padding: 50px 0;
  }

  .planInfo{
    height: 100%;
    display: flex;
    color:#ffff;
    margin: auto;
    flex-direction: column;
  
  }

  .planInfo h3{
    margin:20px auto;
    
  }
  
  .planInfo ul{
    margin: auto;
    font-size: 20px;
  }
  
  .planInfo ul li{
    padding: 10px;
  }

  @media (max-width: 580px){
    .msg h1{
       text-align: center;
       font-size: 25px;
       margin: 25px auto;
     }
 
 
     .planInfo h3{
       text-align: center;
       font-size: 19px;
       
     }
 
     .planInfo ul li {
       font-size: 17px;
   }
   }

   @media (max-width: 850px), (min-width: 450px){
    .planInfo{
      padding-bottom: 150px;
    }

    .planInfo h3 {
      margin: 37px auto;
      text-align:center;
      padding : 0 10px
  }

  .msg h1{
    text-align: center;
  }
}

  `;


  return (
    <>
  <Comercial className='Comercial'>
  <Navbar/>
      <div className="msg">
      <h1>Comercial Web Application</h1>
      </div>
      <div className="planInfo">
        {/* <h3 style={{textTransform : "uppercase", fontWeight :"bold"}}>A multi page web application with all functionalities like CRUD operations, payment gateway, contact page etc.</h3> */}
        <hr />
        <h3>---You will get following---</h3>
        <ul>
          <li>Design + Development.</li>
          <li>Fully responsive.</li>
          <li>Unlimited Images.</li>
          <li>Unlimited webpages.</li>
          <li>Other features as per requirements.</li>
          <li>Domain name </li>
          <li>Hosting  </li>
          <li>Maintenance </li>
        </ul>
        {/* <h3 style={{background:"white", color:"black"}}>Basic Plan : <b>Rs.19999/-</b> ( Maintenance - Rs.4999/- per year [Optional]   )</h3>
        <h3 style={{background:"white", color:"black"}}>Standerd Plan :<b>Rs.24999/-</b>  + Domain and Hosting ( Maintenance - Rs.4999/- per year [Optional]   )</h3> */}

      </div>
      
      </Comercial>
  </>
  )
}
