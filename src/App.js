import React, { useEffect, useState } from "react"
import axios from "axios";

function App() {
  //array json object,json object
  //const [users,setUsers]=useState([]);
  const [users,setUsers]=useState("");
  useEffect(()=>{
    let Tast=async()=>{
      // let response=await axios.get('https://jsonplaceholder.typicode.com/todos/')
      let response=await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      setUsers(response.data);
    }
    Tast()
    // axios.get('https://jsonplaceholder.typicode.com/todos/').then((res)=>{
    //   setUsers(res.data);
    // })
  },[])
  return (
    <div className="App">
      {/* {users&&(users.map((user=>(
        <div key={user.id}>
          <p>{user.title}</p>
        </div>
      ))))} */}
      {users&&<div>{users.time.updated}</div>}
    </div>
  );
}

export default App;
