import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StarIcon from '@mui/icons-material/Star';
import DetailImageList from "./DetailImageList";
import * as React from "react";

import {
  Grid,
  Typography,
  CardActions,
  Button,
  Box,
  Container,
  Divider
} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ArtistDetail({open, setOpen}) {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [artist, setArtist] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Hitting detail page");
        const res = await axios.get(`${API}/artists/${id}`);
        setArtist(res.data.payload);
        setImage(res.data.payload.service_images);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/artists/${id}`)
      .then(() => navigate("/artists"))
      .catch((error) => console.warn(error));
  };

  const ratingStars = (artist) => {
    const arr=[]
    for (let i=0; i < artist.rating; i++) {
      arr.push(<StarIcon key={i}/>)
    }
    return arr
  }


  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography variant="h5">Hello, my name is {artist.name}</Typography>
      </Box>
      <Container maxWidth="md">
        <Grid item lg={12}>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">{artist.description}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">
              My services: {artist.services}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">
              My price is ${artist.price} per hour
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">
              Current Location: {artist.current_location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">Rating: {ratingStars(artist)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 1 }}>
            <Typography variant="subtitle1">
              Featured: {artist.featured ? "Featured here before" : "New here"}
            </Typography>
          </Box>
        </Grid>
      </Container>
      <Divider variant="middle"  sx={{ display:"flex", justifyContent:"center"}}>Check Our My Works Below</Divider>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <DetailImageList image={image} artist={artist}/>
      </Grid>
      <CardActions>
        <Button variant="contained" size="small" onClick={handleDelete}>
          Delete
        </Button>

        <Button variant="contained" size="small">
          <Link
            to="/artists"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Back to List
          </Link>
        </Button>

        <Button variant="contained" size="small">
          <Link
            to={`/artists/${id}/edit`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Edit{" "}
          </Link>
        </Button>
        <Button variant="contained" size="small">
          <Link
            to={`/artists/${id}/book`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Book{" "}
          </Link>
        </Button>
      </CardActions>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This post has been successfully updated!
        </Alert>
      </Snackbar>
    </div>
  );
}
