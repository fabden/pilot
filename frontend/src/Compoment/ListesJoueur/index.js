import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

import axios from 'axios'
import { Container } from '@mui/material';

function ListeJoueur() {

const [datas, setDatas] = useState([{
  pseudo: "",
  vie: 0,
  force: 0,
  agilite: 0,
  }]);

const getAllUser = ()=>{axios.get('http://localhost:8080/users/get/all')
.then((resp)=>{
  setDatas(resp.data)
})}

const updateUser = (event,user)=>{ 
const newDatas =  datas.map((data)=>{
    if(data._id === user._id) { 
      axios.patch(`http://localhost:8080/users/update/${user._id}`, user)
      .then((resp)=>{
        console.log("user modifier",user)
      })
      .catch((err)=>console.log(err))
      return {...user,[event.currentTarget.name]:event.currentTarget.value}
      }
      return data
    })
    setDatas(newDatas) 
}

const upadteslider = (event, newValue, name,user) => {

 const newDatas =  datas.map((data)=>{    

    if(data._id === user._id) { 
      axios.patch(`http://localhost:8080/users/update/${user._id}`, user)
      .then((resp)=>{
        console.log("user modifier",user)
      })
      .catch((err)=>console.log(err))
      return {...user,[name]:newValue}
      }
      return data
    }) 

    setDatas(newDatas) 
}



useEffect(getAllUser,[]);



  return (
    <>
    <Container >
    <Grid container justifyContent="space-around" >
    {datas.map((a,index)=><Card sx={{ maxWidth: 260, border:'solid 1px black',margin:'5px'}}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography >Joueur {index+1}</Typography>
        <TextField
          name='pseudo'
          aria-label="pseudo"
          defaultValue="Default Value"          
          variant="standard"
          value={a.pseudo}
          sx={{ margin:'25px'}}
          onChange={(e)=>updateUser(e,a)}
        />

          <Grid container spacing={2} alignItems="center" justifyContent="center"  >
            <Grid item xs > 
            Force
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'force',a)} name='force' size="small" value={Number(a.force)} aria-label="force"/>
            </Grid>
            <Grid item >
            {a.force}
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs > 
            Vie
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'vie',a)} name='vie' size="small" value={Number(a.vie)} aria-label="vie"/>
            </Grid>
            <Grid item >
           {a.vie}
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs > 
            Agilité
                <Slider onChange={(event,newValeur)=>upadteslider(event,newValeur,'agilite',a)} name='agilite' size="small" value={Number(a.agilite)}  aria-label="agilité"/>
            </Grid>
            <Grid item >
            {a.agilite} 
            </Grid>
          </Grid>
        </CardContent> 
    </Card>)}
    </Grid>
    </Container>
    </>
  )
}

export default ListeJoueur