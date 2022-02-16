import './App.css';
import React, {useState, useEffect} from 'react';
import Combat from './Compoment/Combat';
import ListeJoueur from './Compoment/ListesJoueur';
import axios from 'axios'


function App() {


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
    <div className="App">
      <Combat datas={datas} ></Combat>
      <ListeJoueur datas={datas} updateUser={updateUser} upadteslider={upadteslider} sauvegardeData={sauvegardeData}></ListeJoueur>      
    </div>
  );
}

export default App;
