import {
  Box,
  Container,
  Link,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../fonts/font.css";
import { colors } from "../../constants";

function Title() {
  const theme = useTheme();

  const styles = (theme: any) => ({
    title: {
      fontSize: "10rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "6rem",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
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
              color: colors.yellow,
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
                sx={(theme) => ({
                  fontFamily: "ShadowsIntoLight",
                  fontSize: "10rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "3rem",
                  },
                  fontWeight: "bold",
                })}
              >
                Daniel T Clancy
              </Typography>
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontFamily: "ShadowsIntoLight",
                  fontSize: "4rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.5rem",
                  },
                })}
              >
                Father, Husband, Problem Solver
              </Typography>
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontFamily: "ShadowsIntoLight",
                  fontSize: "4rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.5rem",
                  },
                })}
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
                    sx={(theme) => ({
                      fontSize: "5rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "3rem",
                      },
                      margin: "0 1rem",
                      color: colors.yellow,
                    })}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dclancy89"
                  target="_blank"
                  variant="button"
                  underline="none"
                >
                  <LinkedInIcon
                    sx={(theme) => ({
                      fontSize: "5rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "3rem",
                      },
                      margin: "0 1rem",
                      color: colors.yellow,
                    })}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Title;
