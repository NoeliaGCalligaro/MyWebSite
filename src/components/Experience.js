import React from 'react';
import Button from './Button';
import './Experience.css'
import flecha from '../images/flecha.png'

const Experience = () => {
  const experiences = [
    {
      date: '2022 - Presente',
      title: 'Librarian',
      description: 'Development and implementation of library automation and reading promotion programs',
    },
    {
      date: '2021',
      title: 'Librarian',
      description: 'Data registration, updating, archiving, and backup in the library management system',
    },
    // Agrega más objetos de experiencias según sea necesario
  ];

  const studies = [
    {
      title: 'Librarian-2020',
      description: 'Technical Degree in Library Science.',
    },
    {
      title: 'Software Developer-2023',
      description: 'Higher Technical Degree in Software Development.',
    },
    {
      title: 'Manager Coach-2023',
      description: 'Personal leadership',
    },
    {
      title: 'Language and framework courses',
      description: 'Advanced React Course at OpenBootcamp / JavaScript Course at OpenBootcamp / Java Program at Argentina Program / Pixi.js Workshop at Capital Activa.',
    },
    
  ];

  return (
<section>
  <div className='Subtitle'>
      <h2>Experience</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
      <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
     </svg>
      </div>
      
      < div className='experience'>
      {experiences.map((experience, index) => (
        <div key={index} className='experience-item'>
          <h3>{experience.date}</h3>
          <h4>{experience.title}</h4>
          <p>{experience.description}</p>
        </div>
      ))}
      </div>
      
 <div className='Subtitle'>
      
          <h2>Studies</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
</div>
      
      <div className='studies'> 
      {studies.map((studies, index) => (
        <div key={index} className='studies-item'>
          <h4>{studies.title}</h4>
          <p>{studies.description}</p>
        </div>
      ))}
      </div>
      
      


      <div className="button-next">
      <Button route="/Contact" /> 
      </div>
     
    </section>
  );
};

export default Experience;
