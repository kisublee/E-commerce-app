import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function DetailImageList({artist}) {
  console.log(artist)
  const images = [artist.service_images]
  console.log(images)
  return (
    images.length > 0 &&  <ImageList sx={{ width: 1000, height: 400}}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">Sample Works</ListSubheader>
      </ImageListItem>
      {images.length > 0 && images[0].map((item, i) => {
        return (
         <ImageListItem key={i}>
          <img
            src={`${item}?w=248&fit=crop&auto=format`}
            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
            style={{width:300, height:250}}
          />
          <ImageListItemBar
            title={artist.name}
            subtitle={artist.art_type}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        )
})}
    </ImageList>
);
}

