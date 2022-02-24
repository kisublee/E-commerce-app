import Artist from "./Artist";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

export default function Artists({ artists }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{ marginTop: 1 }}>
        {artists.map((post, i) => (
          <Artist post={post} key={post.id} />
        ))}
      </Grid>
    </Container>
  );
}
