import React from 'react';
import {Component} from 'react'
import './App.css';

import axios from 'axios'
// import Persons from '../components/persons/persons'
import RenderRow from '../components/table_format/render_row'


class App extends Component{

  constructor(props)
  {
    console.log('App.js constructor')
    super(props);
    this.state ={
      
      data_list:[],
      showpeople:false,
      
    }
  }
  

  
  static getDerivedStateFromProps(props, state){
    console.log('App.js GetDerivedStateFromProps')

    return state
  }

  componentDidMount(){
    console.log('App.js componentDidMount')
    axios.get('https://cors-anywhere.herokuapp.com/https://api.pipelinedeals.com/api/v3/deals.json?api_key=tFTM3grWXS1SYVmfM7B2')
    .then((response)=>{
      this.setState({data_list : response.data.entries}) ;

      console.log(response.data.entries)
    
    });

    
    
    return 
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js should componentUpdate')
    return true
  }
  componentDidUpdate(){
    console.log(this.state.data_list[0])
    console.log('App.js componentDidUpdate')

  }


  togglepeopleHandler = () => {
    const doesShow = this.state.showpeople ;
    this.setState({showpeople : !doesShow})
  }

  deletepeopleHandler = (people_index) => {
    const del_people = [...this.state.data_list]
    del_people.splice(people_index,1)
    this.setState({data_list:del_people})
  }

  

 
  
  render(){
    
    console.log('App.js render')
    let person_list=null;
    if (this.state.showpeople)
    {
      person_list=(
        // this part of code  is used for different style of output (in form type )
        // <div>
        //   <Persons people={this.state.data_list}
        //           clicked ={this.deletepeopleHandler}/>
        // </div>
        
        //this new code is used to output data in table form 
        <div>
          <table>
            <thead>
              <td >ID</td>
              <td >Name</td>
              <td >Summary</td>
              <td >User_id</td>
              <td >created_at</td>
              <td >Updated_at</td>

            </thead>
            <tbody>
                <RenderRow data_1={this.state.data_list}/>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Leads data from pipelinedeals website  ​</h1>
        <button onClick={this.togglepeopleHandler}>click here to get</button>
        {person_list}

      </div>
    );
  }
}

export default App;
