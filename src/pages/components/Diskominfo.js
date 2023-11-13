import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from "@mui/material/Link";

const image = require("../../assets/images/diskominfo.jpg");

export default function Diskominfo() {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', bgcolor: '#23232e', color: 'white'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Diskominfo Kota Tangerang (2022)
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontWeight: 'bold', mb: 1}}>
            Role : Data Administrator
          </Typography>
{/*           <Typography variant="body2" color="white">
            Helping with administering vaccination certificates.
          </Typography> */}
          <Typography variant="body2" color="white" sx={{mt: 1, fontWeight: 'bold'}}>
            Project : Augmented Reality based mobile application to help navigate through the government building.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link
            color="inherit"
            href="https://github.com/Imtiazaki/augmented-reality-mobile-app-unity-vuforia.git"
            target="_blank"
          >
        <Button size="small" color="primary">
          GitHub
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}