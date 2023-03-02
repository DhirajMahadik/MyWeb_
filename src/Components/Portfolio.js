import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import mymessIMG from './imges/Homepage.png'
import RestaurantIMG from './imges/Restaurant.jpg'

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Navbar />
      <div className="container py-5">
        <div className="row g-3 py-5">
          <div className="">
            <h3 className="text-warning text-center">PROJECTS</h3>
          </div>
          <div className="col-md-4">
            <div className="card m-auto" >
              <img src={mymessIMG} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">MESS PORTAL</h5>
                <p className="card-text">
                  Developed a portal for mess owners using ReactJs, NodeJs, ExpressJs, Bootstrap and MongoDB.
                </p>
                <a href="https://mymesss.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card m-auto" >
              <img src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">portfolio website</h5>
                <p className="card-text">
                  Developed personal portfolio website using ReactJs and Bootstrap .
                </p>
                <br/>
                <a href="https://dhirajmahadik.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card m-auto" >
              <img src={RestaurantIMG} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Resturant landing page</h5>
                <p className="card-text">
                  A simple landing page of resturant.
                </p>
                <br/>
                <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card m-auto" >
              <img src={mymessIMG} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mess Portal</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                View Project
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PortfolioStyled>
  );
};

export default Portfolio;

const PortfolioStyled = styled.div`
  /* height: 90vh; */
  background-color: #242323;

  .card{
    background-color: #000;
    width: 20rem;
    img{
        width: 20rem;
        height: 200px;
        opacity: 0.5;
    }
    .card-body{
        position: absolute;
        .card-title{
            color: #fff;
            font-weight: 900;
            font-size: 1.4rem;
            text-transform: uppercase;
            /* font-family: cursive; */
            
        }
        .card-text{
            color: #e1e1e1;
            font-weight: 800;
            
            :hover{
               /* transform: scale(1.1); */
               font-weight: 900;
               background-color: #00000096;
               padding: 5px;
            }
        }
        a{
            border-radius: 20px;
        }
    }
  }
`;
