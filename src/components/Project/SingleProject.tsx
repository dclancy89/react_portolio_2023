import { Paper, useTheme, Typography } from "@mui/material";

import { Project } from "../../types/Project";
import GenericList from "../GenericList/GenericList";

const SingleProject = (props: { project: Project }) => {
  const theme = useTheme();

  const project = props.project;
  return (
    <>
      <Paper
        elevation={3}
        sx={(theme) => ({
          margin: "5rem 0 0 0",
          padding: "2rem",
          [theme.breakpoints.down("sm")]: {
            padding: "1rem",
          },
          color: "white",
          width: "90%",
          maxWidth: "1200px",
          backgroundColor: "rgba(0,0,0,0.5)",
        })}
      >
        <Typography
          variant="h3"
          sx={(theme) => ({
            padding: "0 0 0 8px",
            margin: "0 0 2rem 0",
            borderLeft: "2px solid white",
            borderBottom: "2px solid white",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
            },
          })}
        >
          {project.title}
        </Typography>
        <Typography>{project.description}</Typography>
        <Typography variant="h5" sx={{ padding: "1rem 0 0 0" }}>
          Technologies I worked with:
        </Typography>
        <GenericList listItems={project.technologies} />
        <Typography variant="h5">Notable Features/Tasks:</Typography>
        <GenericList listItems={project.features} />
        {project.notes && <Typography>Notes:</Typography>}
        {project.notes && <GenericList listItems={project.notes} />}
      </Paper>
    </>
  );
};

export default SingleProject;
