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
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform built with MERN stack featuring user authentication, product catalog, and shopping cart.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data using a weather API.",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          className="text-center font-bold text-gray-800 mb-12"
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
