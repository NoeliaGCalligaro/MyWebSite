import React from 'react';

const MyWork = () => {
  const projects = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      previewImage: '/path/to/project1-preview.jpg',
    },
    {
      name: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      previewImage: '/path/to/project2-preview.jpg',
    },
    // Agrega más objetos de proyectos según sea necesario
  ];

  return (
    <section>
      <h2>Mi trabajo</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.previewImage} alt={project.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
