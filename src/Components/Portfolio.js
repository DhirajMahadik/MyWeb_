import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import mymessIMG from './imges/Homepage.png'
import digitalDiary from './imges/digitalDiary.png'
import ReduxImg from './imges/apiswithredux.jpg'

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Navbar />
      <div className="container py-5">
        <div className="row  g-3 py-5">
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
              <img src={digitalDiary} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task Management Web App </h5>
                <p className="card-text">
                 <strong>Implemented a task manegement web app to keep notes and tasks</strong> 
                </p>
                <br/>
                <a href="https://digitaldiary-bydhiraj.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card m-auto" >
              <img src={ReduxImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">API calling through Redux Toolkit</h5>
                <p className="card-text">
                  Complete CRUD APIs integration with Redux Toolkit, Handling globle state. 
                </p>
                <a href="/https://github.com/DhirajMahadik/apis-with-redux" target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
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

 

  @media screen and (max-width: 765px) {
  height: 100%;
}

  .card{
    background-color: #000;
    width: 20rem;
    img{
        width: 20rem;
        height: 250px;
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
            
            /* :hover{
               transform: scale(1.1);
               font-weight: 900;
               background-color: #00000096;
               padding: 5px;
            } */
        }
        a{
            border-radius: 20px;
        }
    }
  }
`;
