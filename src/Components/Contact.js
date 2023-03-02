
import emailjs from 'emailjs-com'
import styled from 'styled-components';

export default function Contact() {
  const ContactFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
            'service_dhkj8hl',
            'template_nb40a2k',
            e.target,
            'oycCgHMu5Ym_14Jou'
    ).then(res => {
//       console.log(res);
      emailjs.sendForm(
        
            'service_dhkj8hl',
            'template_t603z1r',
            e.target,
            'oycCgHMu5Ym_14Jou'
      ).then(res => {
        
            document.getElementById('Name').value = "";
            document.getElementById('Email').value = "";
            document.getElementById('Text').value = "";
        
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));

  }


  const  Contact = styled.section`
  position: relative;
  /* min-height: 100vh; */
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #242323;

.contentt{
    max-width: 800px;
    text-align: center;
    position: relative;
    margin-bottom: 50px;
  }
.contentt h3{
    font-size: 50px;
    font-weight: 900;
    color:#f20f0f ;
  }
.contentt p{
    font-weight: 400;
    color:#fff;
    font-size: 28px;
  }
  .text p{
    font-size: 22px;
  }
  .text h3{
    font-size: 25px;
  }
  
  .container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  .container .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  
  .container .contactInfo .Contactbox{
    position: relative;
    padding: 20px 0 ;
    display: flex;
  
  }
  
  .container .contactInfo .Contactbox .icon{
    min-width: 60px;
    height: 60px;
    background-color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
  }
  
  .container .contactInfo .Contactbox .text{
    display: flex;
    margin-left: 20px;
    color: white;
    font-size: 16px;
    flex-direction: column;
    font-weight: 300;
  }
  
  .container .contactInfo .Contactbox .text h3{
    font-weight: 900;
    color: #f20f0f;
    
  }
  
  .contactForm{
    width: 40%;
    padding: 40px;
    background: #ffff;
    border-radius: 30px;
    margin-left: 15px;
  }
  
  .contactForm h2{
    font-size: 30px;
    color: #000;
    font-weight: 600;
  }
  
  .contactForm .inputBox{
    position: relative;
    width: 100%;
    margin-top: 10px;
  }
  
  .contactForm .inputBox input,
  .contactForm .inputBox textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #000;
    outline: none;
    resize: none;
  }
  
  .contactForm .inputBox samp{
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
  }
  
  .contactForm .inputBox input:focus ~ samp,
  .contactForm .inputBox input:valid ~ samp,
  .contactForm .inputBox textarea:focus ~ samp,
  .contactForm .inputBox textarea:valid ~ samp{
    color: #f20f0f;
    font-size: 12px;
    transform: translateY(-20px);
  }
  
  .contactForm .inputBox input[type="submit"]{
    width: 100px;
    background:#f20f0f;
    color: #ffff;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
  }
  .contactForm .inputBox input[type="submit"]:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  
  .Skil_icon{
    min-width: 17px;
      margin: auto;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gold;
      border-radius: 50%;
      font-size: 59px;
  }

  @media(max-width:580px){
    padding: 50px 1px;

    .text p {
      font-size: 17px;
  }

  .contentt h3{
    font-size: 40px;
  }

  .contentt p{
    font-size: 17px;
    padding: 0 13px;
  }

    .container{
      flex-direction: column;
    }
    .container .contactInfo{
      margin-bottom: 40px;
      width: 100%;
    }
    .container .contactForm{
      width: 100%;
      margin-top: 22px;
      margin-left: 0px;
    }
   
  }

  @media (max-width: 950px){
    .container{
      flex-direction: column;
    }

    .container .contactForm{
      width: 100%;
      margin-top: 22px;
      margin-left: 0px;
    }

    .container .contactInfo{
      margin-bottom: 40px;
      width: 100%;
    }
  }
  
  `;




  return (
    <>
      {/* <Navbar /> */}
      <Contact className="contact">
        <div className="contentt">
          {/* <h3>Contact Me</h3> */}
          <p>Feel free to contact me i will get back to you as soon as possible.... </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="Contactbox">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Pune - Maharashtra</p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>dhirajmahadik9221@gmail.com</p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> +91 9284593357 </p>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="contactForm">
            <form action="" onSubmit={ContactFormSubmit}>
              <h3>Send Message</h3>
              <div className="inputBox">
                <input type="text" name='name' required="required" id="Name" />
                <samp>Full Name</samp>
              </div>
              <div className="inputBox">
                <input type="email" name='email' required="required" id="Email" />
                <samp>Your Email</samp>
              </div>
              <div className="inputBox">
                <textarea name="message" required="required" id="Text"></textarea>
                <samp>Type Your Message</samp>
              </div>
              <div className="inputBox">
                <input type="submit" name='' value="Send" />

              </div>
            </form>
          </div>
        </div>
      </Contact>
    </>
  )
}
