import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function Combat({datas}) {

  const [resultat, setResultat] = useState("")
  const [groupes1, setGroupes1] = useState([])
  const [groupes2, setGroupes2] = useState([])

  const combat = ()=>{

    let groupe1 =[];
    let groupe2 =[];
    
  
    do {
    var rand = datas[Math.floor(Math.random() * datas.length)];   
     if(!groupe1.includes(rand)){
       groupe1.push(rand) 
     }
    } 
    while (groupe1.length < 4)

    do {
      var rand2 = datas[Math.floor(Math.random() * datas.length)];   
       if(!groupe2.includes(rand2) && !groupe1.includes(rand2)){
         groupe2.push(rand2) 
       }
      } 
      while (groupe2.length < 4 )

      setGroupes1(groupe1)
      setGroupes2(groupe2)


  const totaleVieGroupe1 = groupe1.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.vie)
  }, 0)
  
  const totaleforceGroupe2 = groupe2.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.force)
  }, 0)
  console.log(totaleVieGroupe1-totaleforceGroupe2)
  if(totaleVieGroupe1-totaleforceGroupe2 < 0){
    setResultat(`Groupe 2 Gagnant avec ${Math.abs(totaleVieGroupe1-totaleforceGroupe2)} points`)
  } else{
    setResultat(`Groupe 1 Gagnant avec ${totaleVieGroupe1-totaleforceGroupe2} points`)
  }


 
  }

  return (
    <>
    <Container>
      <Grid container sx={{ height:'400px'}}>
       
          <Grid item xs container >
              <Grid container justifyContent="center" item xs sx={{ border:'solid 1px blue',margin:'2px',padding:'10px',borderRadius:'5px'}}>            
                <Grid xs={12} item>
                <Typography variant='h4'>Groupe 1</Typography> 
                </Grid>

               { groupes1.map((data1)=> (               
                <Grid xs={11} key ={data1._id} container item direction="column"  justifyContent="center" sx={{ border:'solid 1px blue',margin:'2px',borderRadius:'5px',height:'70px'}}>
                <Typography>{data1.pseudo}</Typography>
                </Grid>))}

              </Grid>  

            <Grid container justifyContent="center" item xs sx={{ border:'solid 1px blue',margin:'2px',padding:'10px',borderRadius:'5px'}}>
            <Grid xs={12} item>
                <Typography variant='h4'>Groupe 2</Typography> 
                </Grid>

                { groupes2.map((data2)=> (               
                <Grid  key ={data2._id}  xs={11} container item direction="column"  justifyContent="center" sx={{ border:'solid 1px blue',margin:'2px',borderRadius:'5px',height:'70px'}}>
                <Typography>{data2.pseudo}</Typography>
                </Grid>))}


            </Grid>
        
        
        </Grid>
        <Grid item xs={5} container direction="column" justifyContent="space-between">          
          <Grid item container direction="column" justifyContent="space-around" alignItems="center" sx={{height:'45%'}}>
            <Button onClick={()=>combat()} variant="contained" sx={{width:'45%'}}>Affront</Button>
          </Grid>
          <Grid container direction="column" alignItems="center" justifyContent="center" item sx={{ border:'solid 1px blue',height:'45%',borderRadius:'5px',margin:'5px'}}>
           <Typography variant='h5'>{resultat}</Typography> 
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Combat