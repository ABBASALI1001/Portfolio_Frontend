import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

const Projects = () => {
  const projects = [
    {
      title: "📹 VideoCall Project (MERN + WebRTC + Socket.IO)",
      description:
        " A real-world video calling application built with the MERN stack (React + Vite, Node.js, Express, MongoDB . This app demonstrates real-time video calling functionality with authentication using JWT, powered by Socket.IO and WebRTC (Simple-Peer).The UI is modern and responsive, serving as a mini-clone of Zoom.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "TailwindCSS",
        "Simple-Peer",
        "Howler",
      ],
      githubUrl: "https://github.com/ABBASALI1001/videocall.git",
      liveUrl: "https://frontendvideocall.onrender.com",
    },
    {
      title: "AI Component Generator",
      description:
        "README🚀 AI Component Generator A React + Vite web application built with TailwindCSS that allows you to generate mini or intermediate web apps from user prompts. Users can preview the generated app live and copy the code for use in other projects. 💻✨, which mainly focus on creating an webApp based on prompts.Google Gemini Api key makes it possible and This magic happens and Ai based component Generation is fixed  ",
      technologies: ["React", "Vite", "Gemini Api ", "TailwindCSS"],
      githubUrl: "https://github.com/ABBASALI1001/genuiWebApp.git",
      liveUrl: "https://genuiwebapp.onrender.com",
    },
    {
      title: "Personal Portfolio",
      description:
        "This is my personal portfolio project deployed on Render. I keep this as one of my special projects because it motivates me whenever I look at it. This is my first ever creation with AI, where I included details such as my skills, the tech stack I am familiar with, and the tools I am confident in. This project also allows me to connect with clients who are interested in working with me, making it not just a showcase but also a bridge to opportunities. I consider this a great and loved project, as it represents both my learning journey and my passion. The portfolio has been redesigned with the help of AI tools to add professionalism and polish. ",
      technologies: ["React", "Nodejs ", "Mongodb", "Express"],
      githubUrl: "https://github.com/ABBASALI1001/Portfolio_Frontend.git",
      liveUrl: "https://portfolio-frontend-xxjt.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          className="text-center font-bold text-gray-800 pb-5 h-full w-full"
        >
          Projects
        </Typography>

        <Box className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              elevation={3}
              className="hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardContent className="flex-grow">
                <Typography
                  variant="h6"
                  className="font-semibold mb-2 text-gray-800"
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  {project.description}
                </Typography>
                <Box className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      className="bg-blue-100 text-blue-800 text-xs"
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHub />}
                  className="text-blue-600"
                  href={project.githubUrl}
                  target="_blank"
                >
                  Code
                </Button>
                <Button
                  size="small"
                  startIcon={<OpenInNew />}
                  className="text-blue-600"
                  href={project.liveUrl}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        <Box className="text-center mt-8">
          <Typography variant="body1" className="text-gray-600 mb-4">
            Check out more of my projects on GitHub
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
            href="https://github.com/ABBASALI1001"
            target="_blank"
          >
            View GitHub Profile
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
