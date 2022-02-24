import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';


export default function ArtistDetail() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ artist, setArtist ] = useState([]);
    const { id } = useParams();

    const { name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured } = artist;

    useEffect(() => {
        axios
            .get(`${API}/artists/${id}`)
            .then((response) => {
                console.log("Hitting detail page")
                setArtist(response.data.payload);
            })
            .catch((error) => console.warn(error));
    }, []);

    const handleDelete = () => {
        axios
            .delete(`${API}/artists/${id}`)
            .then(() => navigate('/artists'))
            .catch((error) => console.warn(error));
    };

    return (
       <ImageSlider artists={artist}/>
    );
};