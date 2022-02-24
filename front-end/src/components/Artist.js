import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useNavigate } from "react-router-dom";

export default function Artist({ post }) {

    const navigate = useNavigate()
    
    const clickHandler = () => {
        navigate(`/artists/${post.id}`)
    }
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{
          mt: 5,
          maxWidth: 600,
          minHeight: 650,
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          <Link to={`/artists/${post.id}`}>
            {post.service_images ? (
              <CardMedia
                component="img"
                height="350"
                image={post.service_images[1]}
                alt={post.name}
                sx={{
                  "&:hover": {
                    backgroundColor: "info.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            ) : (
              <CardMedia
                component="img"
                height="350"
                // post={NotFoundImage}
                alt={post.name}
              />
            )}
          </Link>
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              fontSize={16}
              component="div"
              sx={{ height: 20 }}
            >
              Artist: {post.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              fontSize={16}
              component="div"
              sx={{ height: 20 }}
            >
              Specialty: {post.art_type}
            </Typography>
            <Typography gutterBottom variant="h7" fontSize={16} component="div">
              Price: ${post.price} per hour
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 200, overflow: "scroll" }}
            >
              Services: {post.services}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 200, mt: 1, mb: 1, overflow: "scroll" }}
            >
              {post.description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex" }}
            >
              Can travel:{" "}
              {post.can_travel ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      <Button size="small" color="primary" onClick={clickHandler}>
        More
      </Button>
      </Card>
    </Grid>
  );
}
