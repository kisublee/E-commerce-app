import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DetailImageList from './DetailImageList';
import { Grid, Typography } from '@mui/material';


export default function ArtistDetail() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ artist, setArtist ] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            console.log("Hitting detail page")
            const res = await axios.get(
            `${API}/artists/${id}`
            );
            setArtist(res.data.payload)
        }
       fetchData();
    }, []);

    const handleDelete = () => {
        axios
            .delete(`${API}/artists/${id}`)
            .then(() => navigate('/artists'))
            .catch((error) => console.warn(error));
    };

    console.log(artist)
    return (
    
        <Grid sx={{display:"flex", justifyContent:"center"}}>
            <DetailImageList artist={artist} />
        </Grid>

    );
};