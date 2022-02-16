import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

import axios from 'axios'
import { Button, Container } from '@mui/material';

function ListeJoueur() {

const [datas, setDatas] = useState([]);

const updateUser = (event,user,indexc)=>{ 
    const newData = [...datas]
    newData[indexc] = {...user,[event.currentTarget.name]:event.currentTarget.value,sauv:false}
    setDatas(newData)   
}

const upadteslider = (event, newValue, name, user,indesx) => {
    const newData = [...datas]
    newData[indesx] = {...user,[name]:newValue,sauv:false}
    setDatas(newData) 
}

const sauvegardeData = (user)=>{
  axios.patch(`http://localhost:8080/users/update/${user._id}`,user)
  .then((doc)=>{console.log(doc.data._id)  
  const newdatas =  datas.map(docd=>{
      if(docd._id === doc.data._id){
      return {...docd,sauv:undefined}
      }
      return docd
    })
    console.log(newdatas);
    setDatas(newdatas)
  
  })
}

const getAllUser = ()=>{axios.get('http://localhost:8080/users/get/all')
.then((resp)=>{
  setDatas(resp.data)
})}

useEffect(getAllUser,[]);


  return (
    <>
    <Container >
    <Grid container justifyContent="space-around" >
    {datas.map((a,index)=><Card sx={{ maxWidth: 260, border:'solid 1px blue',margin:'5px'}}>
        <CardMedia
          component="img"
          height="100"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography >Joueur {index+1}</Typography>
        <TextField
          name='pseudo'
          aria-label="pseudo"        
          variant="standard"
          value={a.pseudo}
          sx={{ margin:'25px'}}
          onChange={(event)=>updateUser(event,a,index)}
        />

          <Grid container spacing={2} alignItems="center" justifyContent="center"  >
            <Grid item xs > 
            Force
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'force',a,index)} name='force' size="small" value={Number(a.force)} aria-label="force"/>
            </Grid>
            <Grid item >
            {a.force}
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs > 
            Vie
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'vie',a,index)} name='vie' size="small" value={Number(a.vie)} aria-label="vie"/>
            </Grid>
            <Grid item >
           {a.vie}
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs > 
            Agilité
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'agilite',a,index)} name='agilite' size="small" value={Number(a.agilite)}  aria-label="agilité"/>
            </Grid>
            <Grid item >
            {a.agilite} 
            </Grid>
          </Grid>
          { (typeof a.sauv !== "undefined" || a.sauv === false)?(<Button onClick={()=>{sauvegardeData(a)}}> Sauvegarde </Button>):(null)}
        </CardContent> 
    </Card>)}
    </Grid>
    </Container>
    </>
  )
}

export default ListeJoueur