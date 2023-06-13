import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Project } from "../../types/Project";
import GenericList from "../GenericList/GenericList";

const SingleProject = (props: { project: Project }) => {
  console.log(props.project);
  const project = props.project;
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: "5rem 0 0 0",
          padding: "2rem",
          color: "white",
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Typography variant="h3">{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>Technologies I worked with:</Typography>
        <GenericList listItems={project.technologies} />
        <Typography>Notable Features/Tasks:</Typography>
        <GenericList listItems={project.features} />
        {project.notes && <Typography>Notes:</Typography>}
        {project.notes && <GenericList listItems={project.notes} />}
      </Paper>
    </>
  );
};

export default SingleProject;
