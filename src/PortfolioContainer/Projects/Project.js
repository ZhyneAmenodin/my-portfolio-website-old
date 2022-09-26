import * as React from "react";

import { Button, Box, Container, Stack, Grid, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import IMG1 from "../../assets/system pics/crop/Log-in page.png";
import IMG2 from "../../assets/system pics/crop/Dashboard.png";
import Carousel from "react-material-ui-carousel";
const RootStyle = styled("div")(({ theme }) => ({
  borderRadius: 50,
  margin: theme.spacing(5),
  padding: theme.spacing(2, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
}));

export default function Projects() {
  return (
    <RootStyle id="projects">
      <Grid
        container
        direction="row"
        align="center"
        borderRadius={5}
        sx={{
          flexGrow: 1,
          backgroundColor: "rgba(0,0,0,.5)",
          color: "#fff",
          boxShadow: 8,
          pb: 3,
        }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={0} sx={{ mt: 3 }}>
            <Grid item md={4}>
              <img src={IMG1} width="450" height="600" />
            </Grid>
            <Grid item md={4}>
              <img src={IMG2} width="450" height="600" />
            </Grid>
            <Grid item md={4}>
              <Box
                alignContent="center"
                alignItems="center"
                sx={{ backgroundColor: "transparent", mt: 20 }}
              >
                <Grid item>
                  <Typography variant="h3">
                    {" "}
                    Point of Sale and Inventory System
                  </Typography>
                </Grid>
                <Grid item align="justify" sx={{ mt: 3, mx: 2 }}>
                  <Typography variant="p" sx={{ mx: 2 }}>
                    This project entitled “BesTea Point of Sales and Inventory
                    Management System” is intended to improve the old sales and
                    inventory system to computerize the sales and inventory
                    activities of BesTea.{" "}
                  </Typography>
                </Grid>
                <Grid item sx={{ mt: 5 }}>
                  <Button> View More</Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
