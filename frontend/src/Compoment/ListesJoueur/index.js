import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

import axios from 'axios'
import { Container } from '@mui/material';

function ListeJoueur() {

const [datas, setDatas] = useState([]);

const getAllUser = ()=>{axios.get('http://localhost:8080/users/get/all')
.then((resp)=>{
  setDatas(resp.data)
})}

useEffect(getAllUser,[]);

  return (
    <>
    <Container >
    <Grid container justifyContent="space-around" >
    {datas.map((a)=><Card sx={{ maxWidth: 260, border:'solid 1px red',margin:'5px'}}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Slider size="small" defaultValue={100} aria-label="Default" valueLabelDisplay="auto" />
          <Slider size="small" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          <Slider size="small" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> 
    </Card>)}
    </Grid>
    </Container>
    </>
  )
}

export default ListeJoueur