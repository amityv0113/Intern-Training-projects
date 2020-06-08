import React , {Component} from 'react'

import Person from './Person/person'

class Persons extends Component{



    static getDerivedStateFromProps(props, state){
        
        console.log('Persons.js from getDerivedStateFromProps')

        return state

    }

    shouldComponentUpdate(nextProps ,nextState){
        console.log('person.js shouldComponet update')
        return true


    }

    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log('person.js getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('person.js componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('person.js componentWillUnmount')
    }


    render(){
        console.log('persons.js rendering ')
        return (this.props.people.map((argument,index) => {
            return <Person name ={argument.name}
                          summary ={argument.summary}
                          Id={argument.id}
                          created_at={argument.created_at}
                          updated_at={argument.updated_at}
                          user={argument.user}
                          click={()=>this.props.clicked(index)}
                          />
          })
    
        );
   
    // return(
    //     <div>

    //     </div>
    // );
    }

}

export default Persons;