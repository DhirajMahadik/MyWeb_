import  { Header } from "./Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "./bg1.jpg";
import Skliss from "./Skilss";
import Contact from "./Contact";

export default function Home() {
  const ContainerFuild = styled.div`
    /* position: absolute; */
    background-image: url(${background});
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .content {
      position: absolute;
      top: 65%;
      left: 8%;
      transform: translateY(-50%);
      width: 50vw;
      height: 50vh;
    }

    span {
      color: #f20f0f;
    }

    #HeadingH1 {
      color: white;
      margin: 20px 0px 20px;
      font-size: 75px;
    }
    #HomeH3 {
      color: white;
      font-size: 25px;
      margin-bottom: 50px;
    }
    h4 {
      color: #fcfc;
      letter-spacing: 2px;
      font-size: 20px;
    }
  `;

  const Service = styled.div`
    background: #101010;
    width: 100%;
    padding: 20px 0px;

    .title h2 {
      color: #f20f0f;
      font-size: 50px;
      font-weight: 900;
      font-family: cursive;
      margin: 20px auto;
      text-align: center;
    }
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }
    .card {
      height: 335px;
      width: 335px;
      padding: 20px 35px;
      background: #191919;
      border-radius: 20px;
      margin: 15px;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .card i {
      font-size: 50px;
      display: block;
      text-align: center;
      margin: 25px 0px;
      color: #f20f0f;
    }
    h5 {
      color: white;
      font-size: 21px;
      margin-bottom: 15px;
    }
    .pra p {
      color: #fcfc;
      font-size: 16px;
      line-height: 27px;
      margin-bottom: 25px;
    }
    // #p1{
    //     margin-bottom: 56px;
    // }

    // #p2{
    //     margin-bottom: 54px;
    // }

    .card .button {
      background-color: #f20f0f;
      color: white;
      text-decoration: none;
      border: 2px solid transparent;
      font-weight: bold;
      padding: 9px 22px;
      border-radius: 30px;
      transition: 0.4s;
    }
    .card .button:hover {
      background-color: transparent;
      border: 2px solid #f20f0f;
      cursor: pointer;
    }

    @media (max-width: 580px) {
      .title h2 {
        font-size: 47px;
      }
      .box {
        flex-direction: column;
      }
    }

    @media (max-width: 850px) {
      .box {
        flex-direction: column;
      }
    }
  `;

  const ContactStyled = styled.div`
    width: 100%;
    height: 160px;
    background: #191919;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
      color: white;
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .button-two {
      background-color: #f20f0f;
      color: white;
      text-decoration: none;
      border: 2px solid transparent;
      font-weight: bold;
      padding: 5px 22px;
      border-radius: 30px;
      transition: 0.4s;
    }

    .button-two:hover {
      background-color: transparent;
      border: 2px solid #f20f0f;
      cursor: pointer;
    }

    @media (max-width: 580px) {
      text-align: center;
    }
  `;

  return (
    <>
    
      <Header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            D <span>M</span>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Header>

      <ContainerFuild className="container-fuild" >
        <div className="content" id="home">
          <h4>Hello, my name is</h4>
          <h1 id="HeadingH1">
            Dhiraj <span>Mahadik</span>
          </h1>
          <h3 id="HomeH3">I'am a Web Developer.</h3>
          {/* <div className="newslatter">
                        <form name='form'>
                            <input type="email" name="email" id="mail" placeholder="Enter Your Email" required="required" />
                            <input type="submit" name="submit" value="Lets Start" onClick={mailform}/>
                        </form>
                    </div> */}
        </div>
      </ContainerFuild>

      {/* <!-----service section start-----------> */}
      <Service className="service" id="service" >
        <div className="title" >
          <h2>Services</h2>
        </div>

        <div className="box">
          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Landing Page</h5>
            <div className="pra">
              <p id="p1">
                One page website that cantains logo, navigation, main content
                and footer section.
              </p>
            </div>
            <p className="p">
              <Link className="button" to="/landingPage_plane">
                Read More
              </Link>
            </p>
          </div>

          <div className="card">
            <i className="far fa-user"></i>
            <h5>Personal Website</h5>
            <div className="pra">
              <p id="p2">
                A dymnamic multiple pages website for example personal blog,
                Portfolio.............
              </p>
            </div>
            <p className="p">
              <Link className="button" to="/personal_plane">
                Read More
              </Link>
            </p>
          </div>

          <div className="card">
            <i className="fa-solid fa-building"></i>
            <h5>Comercial Web Application</h5>
            <div className="pra">
              <p id="p3">
                A multi page web application with all required functionalities
                like CRUD operations etc...
              </p>
            </div>
            <p className="p">
              <Link className="button" to="/comercial_plane">
                Read More
              </Link>
            </p>
          </div>
        </div>
      </Service>
      {/* <!------Skills------> */}
                <div id="skills">
                <Skliss  />

                </div>
    
      {/* <!------Contact Me------> */}
      <ContactStyled className="contact-me"  >
        <p>Let Me Get You A Beautiful Website.</p>
        <div className="d-flex ">
          <a
            className="button-two mx-4"
            href="https://drive.google.com/file/d/1j6tK1BBdBLfYlxu2K4nyeSfUCsx3hmw4/view?usp=sharing"
            target="blank"
          >
            Hire Me
          </a>
          <Link
            className="button-two mx-4"
            to="/portfolio"
          
          >
            Portfolio
          </Link>
        </div>
      </ContactStyled>
      {/* <!------Contact------> */}
                <div id="contact">
                <Contact  />
                </div>
     
    </>
  );
}
