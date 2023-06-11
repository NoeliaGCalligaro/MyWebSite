import React from 'react';
import Timeline from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      date: '2020 - Presente',
      title: 'Puesto actual',
      description: 'Descripción del puesto actual',
    },
    {
      date: '2018 - 2020',
      title: 'Puesto anterior',
      description: 'Descripción del puesto anterior',
    },
    // Agrega más objetos de experiencias según sea necesario
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      <Timeline>
        {experiences.map((experience, index) => (
          <Timeline.Item key={index} date={experience.date}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
