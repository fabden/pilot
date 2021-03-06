/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box, Button, Container, Divider,
} from '@mui/material';

function ListeJoueur({
  datas, updateUser, upadteslider, sauvegardeData,
}) {
  return (
    <Container>
      <Divider variant="middle" sx={{ margin: '5px' }} />
      <Typography variant="h4">Listes Joueurs</Typography>
      <Grid container justifyContent="space-around">
        {datas.map((a, index) => (
          <Card sx={{ maxWidth: 200, border: 'solid 1px blue', margin: '5px' }} key={a._id}>
            <CardContent>
              <Typography>
                Joueur
                {index + 1}
              </Typography>
              <TextField
                name="pseudo"
                aria-label="pseudo"
                variant="standard"
                value={a.pseudo}
                sx={{ margin: '25px' }}
                onChange={(event) => updateUser(event, a, index)}
              />
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs>
                  Force
                  <Slider onChange={(event, newValeur) => upadteslider(event, newValeur, 'force', a, index)} name="force" size="small" value={Number(a.force)} aria-label="force" />
                </Grid>
                <Grid item>
                  {a.force}
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs>
                  Vie
                  <Slider onChange={(event, newValeur) => upadteslider(event, newValeur, 'vie', a, index)} name="vie" size="small" value={Number(a.vie)} aria-label="vie" />
                </Grid>
                <Grid item>
                  {a.vie}
                </Grid>
              </Grid>
              { (typeof a.sauv !== 'undefined' || a.sauv === false) ? (<Button onClick={() => { sauvegardeData(a); }}> Sauvegarde </Button>) : (<Box sx={{ height: '40px' }} />)}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default ListeJoueur;

ListeJoueur.propTypes = {
  datas: PropTypes.arrayOf.isRequired,
  updateUser: PropTypes.func,
  upadteslider: PropTypes.func,
  sauvegardeData: PropTypes.func,
};
