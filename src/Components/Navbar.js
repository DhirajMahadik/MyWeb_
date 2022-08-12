import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Navbar(props) {

  const Nav = styled.nav`
  height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: top 30px;
	padding-left: 8%;
	padding-right: 8%;
	background-color:black;
	border: none;
  
  .logo{
    color: white;
    font-size: 35px;
    letter-spacing: 1px;
    cursor: pointer;
    font-weight:900;
  }
  span{
    color: #f20f0f;
  }

  ul li{
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    
  }
  ul li a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-transform: capitalize;
  }
  ul li a:hover{
    color:#f20f0f ;
    transition: .4s;
  }

  @media (max-width: 580px){

    flex-direction: row; 
		flex-wrap: nowrap;
    height: 50px;
    margin-right:0px;
    padding-left: 0; 
    padding-right: 0;

    .logo{
      font-size: 25px;
      margin-left:15px;
    }
      
    ul{
      display: flex;
      width: 390px;
      margin-left:26px;
      padding-left:0px;
      

    }

    ul li{
      padding: 5px 8px;
      font-size: 15px;
    }

    ul li a{
      font-size: 10px;
    }
  }

  @media (max-width: 850px), (min-width: 450px){

  }
 
  `;

  return (
    <Nav className='navbar'>
      <h2 className="logo">D<span>M</span></h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#service">{props.service}</a></li>
        <li><Link to="/skills">About & Skilss</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </Nav>
  )
}
