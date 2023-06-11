import React from 'react';
import './AboutMe.css';
import mifoto from "../images/mifoto.jpg";
import CV from "../images/CurriculumVitae2023.pdf";
import Button from './Button';
const AboutMe = () => {
  return (
    <section>
     
      <div className='container-about'>
      <div className="container-img">
        <img src={mifoto} alt="Mi foto" />
      </div>
      <div  className='container-text'>
      <h2>About Me</h2>
      <p>I consider myself a dedicated professional committed to the IT industry,
         with an analytical and critical approach. I have strong skills for teamwork and 
         adapting to different situations. My enthusiasm for learning and growing in this
          field is a driving force behind my professional development. I am excited to apply my
           skills and knowledge in a dynamic environment.
      </p>
        <a href={CV} download> Download Resume 
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16"padding= "5">
        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
        </svg>
        </a>

       
      </div>
     

      </div>
      <div className="button-next">
      <Button route="/mywork" /> 

      </div>
      

    </section>
  );
};

export default AboutMe;
