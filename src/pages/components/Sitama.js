import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

const image = require("../../assets/images/sitama.jpg");

function Sitama() {
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
            PT. Solusi Integrasi Pratama (2023)
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontWeight: 'bold', mb: 1}}>
            Role : Junior Software Development, IT Support
          </Typography>
          <Typography variant="body2" color="white" sx={{mt: 1, fontWeight: 'bold'}}>
            Project : Human Capital Management Web Application
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link
            color="inherit"
            href="https://github.com/Imtiazaki/data-mining-apriori-php-mysql.git"
            target="_blank"
          >
        <Button size="small" color="primary">
          GitHub
        </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Sitama
