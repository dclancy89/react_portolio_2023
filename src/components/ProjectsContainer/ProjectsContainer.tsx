import { Container } from "@mui/material";
import SingleProject from "../Project/SingleProject";
import { Project } from "../../types/Project";

import { createClient, EntryCollection } from "contentful";
import { useEffect, useState } from "react";

import { buildEntriesData } from "../../utils/buildEntriesData";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const client = createClient({
    space: "kcvl89buhv7w",
    accessToken: "eoqSTvbMrsZb5S6sSjVpeIFyAtmfOV2mWBpma3kVbJQ",
  });

  useEffect(() => {
    client.getEntries().then((entries) => {
      console.log(buildEntriesData(entries.items));
      setProjects(buildEntriesData(entries.items));
    });
  }, []);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 0 2rem 0",
          margin: 0,
          width: "100%",
          backgroundImage:
            "linear-gradient(black 0%, rgba(0, 0, 0, 0) 70px), url(./connectwork.png);",
          minHeight: "100%",
        }}
      >
        {projects?.length > 0 &&
          projects?.map((project) => {
            return <SingleProject project={project} />;
          })}
      </Container>
    </>
  );
};

export default ProjectsContainer;
