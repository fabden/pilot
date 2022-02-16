/* eslint-disable no-underscore-dangle */
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Combat from './Compoment/Combat';
import ListeJoueur from './Compoment/ListesJoueur';

function App() {
  const [datas, setDatas] = useState([]);

  const updateUser = (event, user, indexc) => {
    const newData = [...datas];
    newData[indexc] = {
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
      sauv: false,
    };
    setDatas(newData);
  };

  const upadteslider = (event, newValue, name, user, indesx) => {
    const newData = [...datas];
    newData[indesx] = { ...user, [name]: newValue, sauv: false };
    setDatas(newData);
  };

  const sauvegardeData = (user) => {
    axios.patch(`http://localhost:8080/users/update/${user._id}`, user)
      .then((doc) => {
        const newdatas = datas.map((docd) => {
          if (docd._id === doc.data._id) {
            return { ...docd, sauv: undefined };
          }
          return docd;
        });

        setDatas(newdatas);
      });
  };

  const getAllUser = () => {
    axios.get('http://localhost:8080/users/get/all')
      .then((resp) => {
        setDatas(resp.data);
      });
  };
  useEffect(getAllUser, []);

  return (
    <div className="App">
      <Combat datas={datas} />
      <ListeJoueur
        datas={datas}
        updateUser={updateUser}
        upadteslider={upadteslider}
        sauvegardeData={sauvegardeData}
      />
    </div>
  );
}

export default App;
