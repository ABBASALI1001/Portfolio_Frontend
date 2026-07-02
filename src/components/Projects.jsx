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
    title: "Employee Role Management Dashboard",
    description:
      "Built a full-stack employee scheduling dashboard with role-based authentication, intelligent 8-day cooldown scheduling, interactive calendar visualization, and complete CRUD operations for admins. Designed to ensure fair work distribution and prevent scheduling conflicts.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Material UI",
    ],
    githubUrl:
      "https://github.com/ABBASALI1001/Admin-Superadmin",
    liveUrl:
      "https://admin-superadmin-1.onrender.com",
  },

  {
    title: "Real-Time Messaging Application",
    description:
      "Developed a secure real-time chat application using Socket.io with JWT authentication. Features include instant messaging, typing indicators, online/offline presence, and a fully responsive modern user interface.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
    githubUrl:
      "https://github.com/ABBASALI1001/ChatApp_2",
    liveUrl:
      "https://chatapp-2-t09u.onrender.com",
  },

  {
    title: "Gen AI Component Generator",
    description:
      "Created an AI-powered web application that generates reusable UI components from natural language prompts using the Gemini API. Supports live preview, instant code generation, syntax highlighting, and rapid component development.",
    technologies: [
      "React",
      "Gemini API",
      "Tailwind CSS",
      "JavaScript",
    ],
    githubUrl:
      "https://github.com/ABBASALI1001/genuiWebApp",
    liveUrl:
      "https://genuiwebapp.onrender.com",
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
