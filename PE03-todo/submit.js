import Input from './Input'

let todoIndex = 0

class App extends Component {
    submitTodo () 
    {    
        if (this.state.inputValue.match(/^\s*$/)) 
        {    
          return    
        }    
        const todo = 
        {    
          title: this.state.inputValue,    
          todoIndex,    
          complete: false     
        }    
        todoIndex++    
        const todos = [...this.state.todos, todo]    
        this.setState({ todos, inputValue: '' }, () => {    
          console.log('State: ', this.state)    
        }) 
  }