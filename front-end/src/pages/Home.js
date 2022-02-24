import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import backgroundImg from "../assets/bg_image.jpg";
import mobileBackgroundImg from "../assets/mobile_img.jpeg";
import SearchBar from "../components/SearchBar";

export default function Home({artists, search, isSearched, setSearch}) {
  const theme = useTheme();
  //Media Query for mobile view
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            zIndex: "tooltip",
            position: "absolute",
            width: "40%",
            left: "30%",
            right: "auto",
            mt: 13,
          }}
        >
          <SearchBar isSearched={isSearched} setSearch={setSearch} />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ zIndex: "modal", position: "absolute" }}
        >
          {!isMobile ? (
            <img
              src={backgroundImg}
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "auto",
                filter: "brightness(0.5)",
              }}
            />
          ) : (
            <img
              src={mobileBackgroundImg}
              style={{
                backgroundSize: "cover",
                height: "120%",
                width: "100%",
                filter: "brightness(0.5)",
              }}
            />
          )}
        </Grid>

      </Grid>
    </Box>
  );
}