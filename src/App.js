import React , {Component} from "react";
import AddItem from "./components/AddItem/Additems";
import TodoItems from "./components/Todoitem/Todoitems";

class App extends Component{
  state ={
    items :[
      {id:1,name:'khaled',age:22},
      {id:2,name:'mohammad',age:21},
      {id:3,name:'khadiga',age:18}
    ]
  }
  deleteItem = (id) =>{
    //T1
    // let items = this.state.items;
    // let i = items.findIndex(items => items.id ==id);
    // items.splice(i,1);
    // this.setState({items:items})
    // or
    // this.setState({items})


    //T2
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})
  }
  addItem =(item)=>{
    item.id=Math.random();
    let items =this.state.items;
    items.push(item);
    this.setState(items)
  }

  render(){
    return(
      <div className="App container">
        <h1 className="text-center">TodoList App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
    
  }
}

export default App;
