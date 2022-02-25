import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { Container, TextField } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function EditForm({setOpen}) {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [artist, setArtist] = useState({
    name: "",
    art_type: "",
    price: 0,
    current_location: "",
    can_travel: false,
    services: "",
    service_images: [],
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("Hitting detail page");
      const res = await axios.get(`${API}/artists/${id}`);
      setArtist(res.data.payload);
    };
    fetchData();
  }, []);




  const handleCheckBox = (event) => {
      setArtist({...artist, can_travel: !artist.can_travel})
  }

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value);

    event.target.id === "price" || event.target.id === "rating"
      ? setArtist({
          ...artist,
          [event.target.id]: Number(event.target.value),
        })
      : setArtist({
          ...artist,
          [event.target.id]: event.target.value,
        });
  };

  console.log(artist);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
    setOpen(true);
    axios
      .put(`${API}/artists/${id}`, artist)
      .then(() => navigate(`/artists/${id}`));

  };

  const clickHandler = () => {
    navigate(`/artists/${id}`);
  };

  return (
    <Container>
      <Box sx={{ fontWeight: "bold" }}>
        <Typography variant="h5" sx={{ mt: 2, textAlign: "center" }}>
          What is your magic?
        </Typography>
      </Box>
        <Grid item xs={12} lg={12}sx={{display:"flex", justifyContent:"center"}} >
          <FormControl required>
            <Card sx={{ width: "100%", height: "auto" }}>
              <CardContent>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {textFormatter(artist)} */}
                    Artist Name:
                  </Typography>

                  <TextField
                    id="name"
                    variant="standard"
                    onChange={handleChange}
                    value={artist.name}
                    sx={{ ml: 2.8 }}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Type of Art:
                  </Typography>
                  <TextField
                    id="art_type"
                    variant="standard"
                    onChange={handleChange}
                    value={artist.art_type}
                    sx={{ ml: 3.8 }}
                  />
                </Grid>

                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Price:
                  </Typography>

                  <TextField
                    id="price"
                    variant="standard"
                    onChange={handleChange}
                    value={artist.price}
                    sx={{ ml: 2.2 }}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Current Location:
                  </Typography>
                  <TextField
                    id="current_location"
                    variant="standard"
                    onChange={handleChange}
                    value={artist.current_location}
                    sx={{ ml: 4.1 }}
                  />
                </Grid>
                <Grid container>
                  <Typography variant="h5" sx={{ overflow: "auto" }}>
                    Can Travel?
                  </Typography>
                  <Checkbox
                    id="can_travel"
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    onClick={ handleCheckBox }
                    checked={artist.can_travel}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Service(s):
                  </Typography>
                  <TextField
                    multiline
                    maxRows={4}
                    id="services"
                    onChange={handleChange}
                    value={artist.services}
                    sx={{ ml: 4.1 }}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Description:
                  </Typography>
                  <TextField
                    multiline
                    maxRows={6}
                    id="description"
                    onChange={handleChange}
                    value={artist.description}
                    sx={{ ml: 4.1 }}
                  />
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button size="small" onClick={clickHandler}>
                  Back to the post
                </Button>
              </CardActions>
            </Card>
          </FormControl>
        </Grid>
        {/* </Grid> */}
    </Container>
  );
}
