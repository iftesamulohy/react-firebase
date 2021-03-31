import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import firebase from './firebase/firebase.config';
import {storage} from './firebase/firebase.config';
function App() {
  const [imageURL,setImageURL] = useState('');
  const [name,setName] = useState({
    firstname: '',
    lastname:'',
    photo:''
  });
  
  const handleSubmit= (e) =>{
    e.preventDefault();
    const newUserInfo = {...name};
          newUserInfo.photo=imageURL;
          console.log(imageURL);  
          setName(newUserInfo);
    const nameRef = firebase.database().ref('Info');
   nameRef.push(name);
  }
  const handleChange = e =>{
    
    if(e.target.name==='photo'){
      //console.log(e.target.files[0].name);
     
    }
      const newUserInfo = {...name};
      newUserInfo[e.target.name]=e.target.value;  
      setName(newUserInfo);
  }
  const handleUpload = e =>{
    const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
    uploadTask.on(
      "state_changed",
      snapshot =>{},
      error=>{
        console.log(error)
      },
      () =>{
        storage
        .ref("images")
        .child(e.target.files[0].name)
        .getDownloadURL()
        .then(url =>{
          //console.log(url);
          setImageURL(url);
        })
      }
    )
  }
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" onChange={handleChange}/>
      <input type="text" name="lastname" onChange={handleChange}/>
      <input type="file" onChange={handleUpload} name="photo"/>
      <input type="submit"/>
    </form>
    <h1>{name.firstname} {name.lastname}</h1>
    <img src={name.photo} alt=""/>
    </div>
  );
}

export default App;
