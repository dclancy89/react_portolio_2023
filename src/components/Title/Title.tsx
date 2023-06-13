import { Box, Container, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../fonts/font.css";

function Title() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "yellow",
          minHeight: "600px",
          backgroundImage: "url(./quake2_2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "600px",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#ffc400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "4rem 0",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "ShadowsIntoLight",
                fontSize: "10rem",
                fontWeight: "bold",
              }}
            >
              Daniel T Clancy
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontFamily: "ShadowsIntoLight", fontSize: "4rem" }}
            >
              Father, Husband, Problem Solver
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontFamily: "ShadowsIntoLight", fontSize: "4rem" }}
            >
              Software Engineer, too
            </Typography>
            <Box sx={{ margin: "2rem 0" }}>
              <Link
                href="https://www.github.com/dclancy89"
                target="_blank"
                variant="button"
                underline="none"
              >
                <GitHubIcon
                  sx={{ fontSize: "5rem", margin: "0 1rem", color: "#ffc400" }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dclancy89"
                target="_blank"
                variant="button"
                underline="none"
              >
                <LinkedInIcon
                  sx={{ fontSize: "5rem", margin: "0 1rem", color: "#ffc400" }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Title;
