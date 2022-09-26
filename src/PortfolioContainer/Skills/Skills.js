import * as React from "react";
import "./Skills.css";
import { Container, Stack, Grid, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import IMG1 from "../../assets/codeIcons/java.png";
import IMG2 from "../../assets/codeIcons/c++.png";
import IMG3 from "../../assets/codeIcons/html.png";
import IMG4 from "../../assets/codeIcons/Quasar.png";
import IMG5 from "../../assets/codeIcons/SQL.png";
import IMG6 from "../../assets/codeIcons/TS.png";
import IMG7 from "../../assets/codeIcons/Vue.png";
import IMG8 from "../../assets/codeIcons/JS.png";

const RootStyle = styled("div")(({ theme }) => ({
  borderRadius: 50,

  margin: theme.spacing(4, 10),
  padding: theme.spacing(3, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function Skills() {
  return (
    <RootStyle id="skills">
      <Container>
        <Grid>
          <Grid item>
            <Typography align="center" variant="h3" sx={{ color: "white" }}>
              SKILLS
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="row"
            sx={{ mt: 5 }}
            spacing={4}
          >
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG1} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Intermediate</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG2} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5"> Advanced Beginner</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG3} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Intermediate</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG4} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Advanced</Typography>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          {/* 2nd row */}
          <Grid
            container
            justifyContent="center"
            direction="row"
            sx={{ mt: 5 }}
            spacing={4}
          >
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG5} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Advanced</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG6} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Intermediate</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG7} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Intermediate</Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card align="center" sx={{ maxHeight: 320, maxWidth: 220 }}>
                <Grid item>
                  <img align="center" src={IMG8} width="200" height="180" />
                </Grid>
                <Grid item direction="column">
                  <Typography variant="h6">Skill level:</Typography>
                  <Typography variant="h5">Intermediate</Typography>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
