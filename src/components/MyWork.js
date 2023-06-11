import React, { useRef, useEffect } from 'react';
import Button from './Button';
import WeatherVideo from '../Videos/Weather.mp4';
import BookStoreVideo from '../Videos/BookStore.mp4';
import CalculatorVideo from '../Videos/Calculator.mp4';
import ToDoListVideo from '../Videos/ToDoList.mp4';
import './MyWork.css';

const MyWork = () => {
  const videos = useRef([]);

  const projects = [
    {
      name: 'Weather',
      description: "An application that displays the current weather of a specific location. The interface of the app changes colors based on the weather conditions at the moment.",
      previewVideo: WeatherVideo,
      githubLink: 'https://github.com/NoeliaGCalligaro/ReactApps/tree/main/Weather',
    },
    {
      name: 'Calculator',
      description: 'A fully-featured calculator with basic arithmetic operations (addition, subtraction, multiplication, and division) and advanced capabilities (exponentiation, square root, etc.). ',
      previewVideo: CalculatorVideo,
      githubLink: 'https://github.com/NoeliaGCalligaro/ReactApps/tree/main/Calculator',
    },
    {
      name: 'To do List',
      description: 'An application that allows you to create, edit, mark as completed, and delete pending tasks.',
      previewVideo: ToDoListVideo,
      githubLink: 'https://github.com/NoeliaGCalligaro/ReactApps/tree/main/ToDoList',
    },
    {
      name: 'Book Store',
      description: 'An application to manage a personal collection of books. You can add the books you have and record their information, such as title, author, genre, and current status.',
      previewVideo: BookStoreVideo,
      githubLink: 'https://github.com/NoeliaGCalligaro/ReactApps/tree/main/Bookstore',
    },
  ];

  useEffect(() => {
    videos.current.forEach((video) => {
      video.play().catch((error) => console.log(error));
    });
  }, []);

  return (
    <section>
      <h2>My Work</h2>
      <div className="video-grid">
        {projects.map((project, index) => (
          <div key={index} className="video-item">
            <div className='video-text'>
            <h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <video
                ref={(video) => (videos.current[index] = video)}
                src={project.previewVideo}
                autoPlay
                loop
              />
            </a>
          </div>
        ))}
       
      </div>
      <div  className="button-next">
      <Button route="/Experience" />
      </div>
      
    </section>
  );
};

export default MyWork;
