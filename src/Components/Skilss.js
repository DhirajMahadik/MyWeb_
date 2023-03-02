import React from "react";
import styled from "styled-components";

export default function Skliss() {
  //     const Wrapper = styled.section`
  //     width: 100%;
  // 	padding: 100px 0px;
  // 	background-color: #151515;

  //   .main  img{
  //         height: auto;
  //         width: 430px;
  //     }

  //     .about-text{
  //         width: 550px;
  //     }

  //     .main{
  //         width: 1130px;
  //         max-width: 95%;
  //         margin: 0 auto;
  //         display: flex;
  //         align-items: center;
  //         justify-content: space-around;
  //     }

  //     .about-text h2{
  //         color: white;
  //         font-size: 75px;
  //         text-transform: capitalize;
  //         margin-bottom: 20px;
  //     }
  //     .about-text h5{
  //         color: white;
  //         letter-spacing: 2px;
  //         font-size: 22px;
  //         margin-bottom: 25px;
  //         text-transform: capitalize;
  //     }
  //     .about-text p{
  //         color: #fcfc;
  //         letter-spacing: 1px;
  //         line-height: 28px;
  //         font-size: 18px;
  //         margin-bottom: 45px;
  //     }
  //     button{
  //         background-color:#f20f0f;
  //         color: white;
  //         text-decoration: none;
  //         border: 2px solid transparent;
  //         font-weight: bold;
  //         padding: 13px 30px;
  //         border-radius: 30px;
  //         transition: .4s;
  //     }

  //     span{
  //         color: #f20f0f;
  //       }

  //     button:hover{
  //         background-color: transparent;
  //         border: 2px solid #f20f0f;
  //         cursor: pointer;
  //     }

  //     @media (max-width: 580px){
  //         .main{
  //             flex-direction: column;
  //         }

  //         .main .about-text {
  //             width: 340px;
  //             margin-top: 37px;
  //         }
  //         .main .about-text h2{
  //             font-size: 65px;
  //         }
  //         .main img{
  //             width: 342px;
  //         }
  //         .about-text p{
  //             text-align: center;
  //             padding: 0 25px;
  //         }

  //         .about-text a{
  //             text-decoration:none;
  //         }

  //         .about-text button{
  //             display: flex;
  //             margin: auto;
  //         }

  //         .about-text h2{
  //             text-align:center;
  //         }

  //         .about-text h2{
  //             text-align:center;
  //         }

  //         .about-text h5{
  //             text-align:center;
  //         }
  //     }

  //     @media (max-width: 950px){
  //         .main{
  //             flex-direction: column;
  //         }

  //         .main .about-text {
  //             margin-top: 37px;
  //         }
  //         .main .about-text h2{
  //             font-size: 65px;
  //         }
  //         .main img{
  //             width: 342px;
  //         }
  //         .about-text p{
  //             text-align: center;
  //             padding: 0 25px;
  //         }

  //         .about-text a{
  //             text-decoration:none;
  //         }

  //         .about-text button{
  //             display: flex;
  //             margin: auto;
  //         }

  //         .about-text h2{
  //             text-align:center;
  //         }

  //         .about-text h2{
  //             text-align:center;
  //         }

  //         .about-text h5{
  //             text-align:center;
  //         }
  //     }

  //     `;

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

    /* @media (max-width: 580px) {
      .cardBox {
        flex-direction: column;
        margin: 0 auto;
        padding-top: 0px;
      }
      .cardBox .skils {
        width: 150px;
        height: 150px;
        margin: 45px auto;
      }

      .Skil_icon {
        margin-top: 30px;
      }

      .skils h3 {
        margin: -13px auto;
        font-size: 18px;
      }
      #Skil-Heading {
        font-size: 20px;
      }
    } */

    /* @media (max-width: 950px) {
      .cardBox {
        flex-direction: column;
        margin: 0 auto;
        padding-top: 0px;
      }
      .cardBox .skils {
        width: 150px;
        height: 150px;
        margin: 45px auto;
      }
      .skils h3 {
        margin: -13px auto;
        font-size: 18px;
      }
      #Skil-Heading {
        font-size: 30px;
      }

      .Skil_icon {
        margin-top: 30px;
      }
    } */
  `;

  return (
    <>
      {/* <Navbar /> */}

      {/* <Wrapper className="about" id='about'>
                <div className="main">
                    <img src={mainImg} alt='' />
                    <div className="about-text">
                        <h2>About <samp>Me</samp></h2>
                        <h5>Developer <span>& Designer</span></h5>
                        <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the
                            website more & more interactive with web animations.I can provide clean code and pixel perfect
                            design. I also make the website more & more interactive with web animations.A responsive design
                            makes your website accessible to all users, regardless of their device.</p>
                        
                            <a href="https://api.whatsapp.com/send/?phone=919284593357&text&app_absent=0" target="_blank" rel="noreferrer">
                            <button type="button" id='lets' >
                            Let's Talk
                            </button>
                            </a>
                            
                    </div>
                </div>
            </Wrapper> */}

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
