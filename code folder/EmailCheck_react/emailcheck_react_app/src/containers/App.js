import React, { Component } from 'react';


import './App.css'; 

import axios from 'axios'

// const validator = require('validator')

//import Emailchecker from '../components/emailcheck'

class App extends Component {

  constructor(props)
  {
    console.log('App.js constructor')
    super(props);
    this.state ={
      
      ans:[],

    }

    
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault()
    const user = event.target.elements.checkmail.value
    document.getElementById('p-1').innerHTML='<h2>Loading....</h2>';
    
    axios.get('http://localhost:3000/user_2?Emailaddress='+user).then((data)=>{
        console.log(data)
        if (data.data.error)
        {
          // console.log(data.error)
          document.getElementById('p-1').innerHTML="<h1>"+data.data.error+"</h1>"
          this.setState({ans:data.data.error})
        }
        else if (data.data.info)
        {
          // console.log(data)
          document.getElementById('p-1').innerHTML="<h1>"+data.data.info+"</h1>"
          this.setState({ans:data.data.info})
        }
        else
        {
          document.getElementById('p-1').innerHTML="<h1>ERROR</h1><h3>code: "+data.data.code+"</h3><h3>"+data.data.syscall+"</h3><h3>Host name : "+data.data.hostname+"</h3>"
          this.setState({ans:data.data.code})
        }
        
       
    }).catch((error)=>{
      document.getElementById('p-1').innerHTML="<h1>error</h1>"
    })
  


  }



  

  render(){
  return (
    <div className='App'>
      <div>
        <h1>Enter Your Emailaddress</h1>
      </div>
      <form id="p-2" onSubmit={this.handleSubmit}>
        <input className="input1" type="email" name="checkmail" />
        <button className="button1">Submit</button>
      </form>
      <div id="p-1">
        
      </div>
        
   </div>   
  )
  
  }
}

export default App;
