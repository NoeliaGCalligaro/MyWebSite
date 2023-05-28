import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2>Contacto</h2>
      <div>
        <p>Número de teléfono: +123456789</p>
        <p>Email: example@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/">linkedin.com</a></p>
        <p>GitHub: <a href="https://github.com/">github.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/">instagram.com</a></p>
      </div>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
