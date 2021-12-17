import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  // const nayoks = [{name:'Salman Khan', age:'52'}, {name:'Shaharuk Khan', age:'53'}, {name:'Amir Khan', age:'53'}, {name:'Erturul', age:145}, {name:'Osman', age:'120'}];
  const[user, setUser] = useState([0]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(item=>setUser(item))
     
  },[])
  
   return (
    <div className="App">
      <header className="App-header">
       {
         user.map(users=><Card nak= {users} key={users.id} ></Card>)
       }
        
       
      </header>
    </div>
  );
};

function Card(props){
 
  const cardColor = {
    background:'green',
    height:'250px',
    width:'400px',
    border:'2px solid green',
    margin:'5px',
    borderRadius:'5px',
    display:'inline'
     
  }

  return(
    <div style={cardColor}>
      <h5>Name: {props.nak.name}</h5>     
      <h5>Phone: {props.nak.phone}</h5>
    </div>
  )
}



export default App;
