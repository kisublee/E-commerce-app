import Artist from "./Artist";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import SortSelector from "../utilities/SortSelector";
import { useState } from "react";

export default function Artists({ artists }) {


  const [sort, setSort] = useState({
    option:"",
  })

  const displayArtists = (sort) => {
    console.log(sort)
    const copyArray = artists.slice()
    if (sort === "high") {
     return copyArray.sort((a,b) => b.price - a.price).map((post, i) =>(
        <Artist post={post} key={post.id} />
      ))
    }
    else if (sort === "low") {
      return copyArray.sort((a,b) => a.price - b.price).map((post, i) =>(
        <Artist post={post} key={post.id} />
      ))
    }
    else {
      return artists.map((post, i) =>(
        <Artist post={post} key={post.id} />
      ))
    }
  }


  return (
    <Container maxWidth="lg">
      <Box sx={{display:"flex", justifyContent:"center", textAlign:"center", mt:2}}>
        <Typography variant="h5">List of Artists</Typography>
      </Box>
        <SortSelector sort={sort} setSort={setSort}/>
      <Grid container spacing={3} sx={{ marginTop: 1 }}>
        {displayArtists(sort)}
      </Grid>
    </Container>
  );
}
