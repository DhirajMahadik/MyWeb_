import React from 'react'
import styled from "styled-components";

export default function Footer() {

  const Wrapper = styled.footer`
  position: relative;
	width: 100%;
	height: 250px;
	background: #101010;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	bottom: 0;

  .social{
    display: flex;
  }
  .social a {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  #f20f0f;
    border-radius: 50%;
    margin: 10px 10px;
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
    #P1{
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
    #P2{
      color: white;
      font-size: 14px;
      text-align: center;
      
    }

    .social a:hover{
      transform: scale(1.3);
      transition: .3s;
    }

    .end{
      color:#f20f0f;
      font-size: 14px; 
    }

    @media (max-width: 580px){
      #P2{
        font-size: 12px;
      }
    }

    `;
  return (
    
    <div>
        <Wrapper>
                    <p id='P1'>Dhiraj Mahadik</p>
                    <p id='P2'>For any queries - please click on the icon  below to connect me</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/dhiraj-mahadik-a010771b6/" target="blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/dhiraj_dm.js/" target="blank" rel="noreferrer"><i className="fab fa-instagram" ></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=919284593357&text&app_absent=0" target="blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <p className="end">Copy Right By Dhiraj Mahadik</p>
                </Wrapper>

    </div>
  )
}
