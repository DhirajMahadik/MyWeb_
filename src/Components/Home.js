import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import background from './bg1.jpg';

export default function Home() {

    const ContainerFuild = styled.div`
    /* position: absolute; */
    background-image: url(${background});
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

    .content{
        position: absolute;
        top: 65%;
        left:8%;
        transform: translateY(-50%);
        width: 50vw;
        height: 50vh;
    }
    
    span{
        color: #f20f0f;
    }
    
    #HeadingH1{
        color: white;
        margin: 20px 0px 20px;
        font-size: 75px;
    }
    #HomeH3{
        color: white;
        font-size: 25px;
        margin-bottom: 50px;
    }
    h4{
        color: #fcfc;
        letter-spacing: 2px;
        font-size: 20px;
    }
    `;

    const Service = styled.div`
        background: #101010;
	    width: 100%;
	    padding: 100px 0px;
        
        .title h2{
            color: white;
            font-size: 60px;
            margin: 30px auto;
            text-align: center;
        }
        .box{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
        }
        .card{
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
        .card i{
            font-size: 50px;
            display: block;
            text-align: center;
            margin: 25px 0px;
            color: #f20f0f;
        
        }
        h5{
            color: white;
            font-size: 21px;
            margin-bottom: 15px;
        }
        .pra p{
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
        
        .card .button{
            background-color:#f20f0f;
            color: white;
            text-decoration: none;
            border: 2px solid transparent;
            font-weight: bold;
            padding: 9px 22px;
            border-radius: 30px;
            transition: .4s; 
        }
        .card .button:hover{
            background-color: transparent;
            border: 2px solid #f20f0f;
            cursor: pointer;
        }

        @media (max-width: 580px){
            .title h2{
                font-size: 47px;
            }
            .box {
                flex-direction: column;
            }
        }

        @media (max-width: 850px){
            .box {
                flex-direction: column;
            } 
        }
        `;

        const Contact = styled.div`
        width: 100%;
        height: 290px;
        background: #191919;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
        p{
            color: white;
            font-size: 25px;
            font-weight: bold;
            margin-bottom: 25px;
        }

        .button-two{
            background-color:#f20f0f;
            color: white;
            text-decoration: none;
            border: 2px solid transparent;
            font-weight: bold;
            padding: 5px 22px;
            border-radius: 30px;
            transition: .4s; 
        }

        .button-two:hover{
            background-color: transparent;
            border: 2px solid #f20f0f;
            cursor: pointer;
        }

        @media (max-width: 580px){
            text-align:center;
        }

        `;

    return (

        <>
            <Navbar about="About Me" service="Services" />

            <ContainerFuild className="container-fuild">
                <div className="content">
                    <h4>Hello, my name is</h4>
                    <h1 id='HeadingH1'>Dhiraj <span>Mahadik</span></h1>
                    <h3 id='HomeH3'>I'am a Web Developer.</h3>
                    {/* <div className="newslatter">
                        <form name='form'>
                            <input type="email" name="email" id="mail" placeholder="Enter Your Email" required="required" />
                            <input type="submit" name="submit" value="Lets Start" onClick={mailform}/>
                        </form>
                    </div> */}
                </div>
            </ContainerFuild>



            {/* <!-----service section start-----------> */}
            <Service className="service" id='service'>
                <div className="title">
                    <h2>Our Services</h2>
                </div>

                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars"></i>
                        <h5>Landing Page</h5>
                        <div className="pra">
                            <p id='p1'>One page website that cantains logo, navigation, main content and footer section.</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/landingPage_plane">Read More</Link>
                        </p>
                    </div>

                    <div className="card">
                        <i className="far fa-user"></i>
                        <h5>Personal Website</h5>
                        <div className="pra">
                            <p id='p2'>A dymnamic multiple pages website for example personal blog, Portfolio.............</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/personal_plane">Read More</Link>
                        </p>
                    </div>

                    <div className="card">
                        <i className="fa-solid fa-building"></i>
                        <h5>Comercial Web Application</h5>
                        <div className="pra">
                            <p id='p3'>A multi page web application with all functionalities like CRUD operations, payment...</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/comercial_plane">Read More</Link>
                        </p>
                    </div>
                </div>
            </Service>

            {/* <!------Contact Me------> */}
            <Contact className="contact-me">
                <p>Let Me Get You A Beautiful Website.</p>
                <div className='d-flex'>
                <a className="button-two mx-2" href="https://drive.google.com/file/d/1j6tK1BBdBLfYlxu2K4nyeSfUCsx3hmw4/view?usp=sharing" target="blank">Hire Me</a>
                <a className="button-two" href="https://github.com/DhirajMahadik" target="blank">Portfolio</a>
                </div>
            </Contact>
        </>
    )

}
