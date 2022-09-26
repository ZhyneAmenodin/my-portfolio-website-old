import * as React from "react";
import { Container, Stack, Grid, Typography, Avatar, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import SportsVolleyballOutlinedIcon from "@mui/icons-material/SportsVolleyballOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import IMG1 from "../../assets/MyPic.png";

import { width } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

const RootStyle = styled("div")(({ theme }) => ({
  borderRadius: 50,

  margin: theme.spacing(0, 10),
  padding: theme.spacing(0, 0),
  //paddingBottom: 800,
}));

const commonStyles = {
  bgcolor: "rgba(0,0,0,.5)",
  width: 190,
  height: 190,
};
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
    <RootStyle id="AboutMe">
      <Container>
        <Grid>
          <Grid item>
            <Typography align="left" variant="h3" sx={{ color: "white" }}>
              About Me
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            sx={{ zIndex: 2, position: "absolute" }}
          >
            <Grid item md={12}>
              <Typography
                align="justify"
                variant="h5"
                sx={{ mx: 3, mt: 5, color: "white", width: 700 }}
              >
                Experienced in Front end development and Back end Development, I
                have had the chance to work as an Intern Front end Developer in
                the company Asia Pacific Global IT Solutions inc.
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: 70, zIndex: 1, position: "absolute" }}>
            <img src={IMG1} width="600" height="400" />
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="row"
            sx={{ position: "relative", zIndex: 3, mt: 28 }}
            spacing={4}
          >
            <Grid item md={4}>
              <Card sx={{ ...commonStyles, borderRadius: "50%" }}>
                <FingerprintOutlinedIcon
                  sx={{ ml: 3, mt: 2, width: 150, height: 150, color: "white" }}
                />
              </Card>

              <Typography sx={{ mt: 3, color: "whitesmoke" }} variant="h4">
                Personal
              </Typography>
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                22 Years old (22 Apr 1999), from Lomiding MSU, Marawi City.
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ ...commonStyles, borderRadius: "50%" }}>
                <SchoolOutlinedIcon
                  sx={{ ml: 3, mt: 2, width: 150, height: 150, color: "white" }}
                />
              </Card>

              <Typography sx={{ mt: 3, color: "whitesmoke" }} variant="h4">
                Education
              </Typography>
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                BS - Information Technology Major in Database
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Card sx={{ ...commonStyles, borderRadius: "50%" }}>
                <SportsVolleyballOutlinedIcon
                  sx={{ ml: 3, mt: 2, width: 150, height: 150, color: "white" }}
                />
              </Card>

              <Typography sx={{ mt: 3, color: "whitesmoke" }} variant="h4">
                Hobbies
              </Typography>
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                I Like to play volleyball and badminton, and I Love watching
                Anime and Hollywood Movies.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
