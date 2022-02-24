import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


import DetailImageList from "./DetailImageList";
import { Grid, Typography, CardActions, Button } from "@mui/material";

export default function ArtistDetail() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [artist, setArtist] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try{
      console.log("Hitting detail page");
      const res = await axios.get(`${API}/artists/${id}`);
      setArtist(res.data.payload);
      setImage(res.data.payload.service_images)
      } catch(err) {return err}
    };
    fetchData();
  },[]);

  const handleDelete = () => {
    axios
      .delete(`${API}/artists/${id}`)
      .then(() => navigate("/artists"))
      .catch((error) => console.warn(error));
  };


  console.log(image)
  console.log(artist)
  // const display = image.map((each) => <img src={each} />)
  // console.log(service_images);
  return (
    <div>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
       <DetailImageList image={image} artist={artist}/>
      {/* {display} */}

      </Grid>
      <Typography variant="h5">Artist: {artist.name}</Typography>
       <Typography variant="h5">{artist.description}</Typography>
       <Typography variant="h5">My price is {artist.price}</Typography>
       <Typography variant="h5">My services: {artist.services}</Typography>
       <Typography variant="h5">Current Location: {artist.current_location}</Typography>


      <Typography variant="h5">Rating: {artist.rating}</Typography>
      <Typography variant="h5">Featured: {artist.featured? "Featured here before" : "New here"}</Typography>
      <CardActions>
        <Button variant="contained" size="small" onClick={handleDelete}>
          Delete
        </Button>

        <Button variant="contained" size="small">
         <Link to="/artists" style={{color:"white", textDecoration:"none"}}> Back to List </Link>
        </Button>

        <Button variant="contained"  size="small" >
        <Link to={`/artists/${id}/edit`} style={{color:"white", textDecoration:"none"}}> Edit </Link>
        </Button>
        <Button variant="contained"  size="small" >
        <Link to={`/artists/${id}/book`} style={{color:"white", textDecoration:"none"}}> Book </Link>
        </Button>
      </CardActions>
    </div>
  );
}
