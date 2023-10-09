import React from "react";
import styled from "styled-components";
import * as icon from 'react-bootstrap-icons' 

export default function Skliss() {
 
  const SkilsSection = styled.section`
    .skilss {
      width: 100%;
      display: flex;
      height: 100%;
      flex-direction: column;
      background-color: #191919;
    }

    #Skil-Heading {
      text-align: center;
      text-transform: uppercase;
      margin-top: 50px;
      font-size: 40px;
      font-weight: 900;
      
      color: gold;
      text-shadow: 0 0 50px rgb(255, 255, 255);
    }

    .skils h3 {
      text-align: center;
      padding-top: 10px;
      margin: -3px auto;
      color: gold;
      font-size: 18px;
      font-weight: 900;
      /* font-family: cursive; */
    }

    .cardBox {
      width: 90vw;
      height: 100%;
      margin: 100px auto;
      display: flex;
      //         padding-top: 200px;
    }

    .skils {
      background-color: #191919;
      width: 150px;
      height: 150px;
      display: flex;
      flex-direction: column;
      margin: 5px auto;
      box-shadow: 0 0 30px rgb(230 221 221 / 30%);
      border-radius: 50%;
      position: relative;
    }

    .skils:hover {
      background-color: #000;
      box-shadow: 0 0 50px rgb(255 255 255 /100%);
      h3 {
        color: #f20f0f;
      }
    }

    .Skil_icon {
      min-width: 17px;
      /* margin: auto; */
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      border-radius: 50%;
      font-size: 49px;
    }

  `;

  return (
    <>
   
      <SkilsSection>
        <div className="skilss" id="skils">
          <h3 id="Skil-Heading">MY SKILL SET</h3>
          <div className="row g-3 justify-content-center cardBox">
            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "yellow" }}>
                  <i className="fa-brands fa-js"></i>
                </div>
                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#61dbfb" }}>
                  <i className="fa-brands fa-react"></i>
                </div>
                <h3>ReactJs</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#3C873A" }}>
                  <i class="fa-brands fa-node"></i>
                </div>
                <h3>NodeJs</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#68A063" }}>
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <h3>ExpressJs</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#3FA037" }}>
                  <i class="fa-solid fab fa-envira"></i>
                </div>
                <h3>MongoDB</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#3FA037" }}>
                  <i > <icon.FiletypeSql/></i>

                </div>
                <h3>MySQL</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#ffff" }}>
                  <i class="fa-brands fa-github"></i>
                </div>
                <h3>Git/GitHub</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#e34c26" }}>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <h3>HTML</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#264de4" }}>
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
                <h3>CSS</h3>
              </div>
            </div>

            <div className="col-md-2 mx-2">
              <div className="skils  ">
                <div className="Skil_icon" style={{ color: "#563d7c" }}>
                  <i className="fa-brands fa-bootstrap"></i>
                </div>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </SkilsSection>
    </>
  );
}
