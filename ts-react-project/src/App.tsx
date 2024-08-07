import './App.css'

interface Todoprop{
  title : string,
  description : string,
  done : boolean
}

interface Person {
  name : string,
  age : number,
  greet (phrase:string) : void
}

class employee implements Person{
  name : string,
  age : number,

  constructor(n:string,a:number){
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }

}

function Todo(todo : Todoprop){
  return <div>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
      {todo.done ? <div>"done"</div> : <div>"not done"</div>}
    </div>
}

function App() {

  return (
    <>
    <Todo title='go to the gym' description='between 6-9' done = {false} />
    </>
  )
}

export default App
