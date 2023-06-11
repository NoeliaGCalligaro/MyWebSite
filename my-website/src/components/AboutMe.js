import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h2>Sobre mí</h2>
      <div>
        <img src="/path/to/profile-picture.jpg" alt="Mi foto" />
        <p>Descripción sobre ti.</p>
      </div>
      <a href="/path/to/resume.pdf" download>Descargar currículum</a>
    </section>
  );
};

export default AboutMe;
