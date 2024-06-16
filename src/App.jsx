import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import Items from "./Components/Items";
import "./App.css";
import { useState } from "react";
function App() {

  
  
  const [items, setStateChange] = useState(() => {
    const savedItems = localStorage.getItem('notes');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  function Added (){
    const arr = document.querySelectorAll("input");
    let newItem = {task : `${arr[0].value}`,Date:`${arr[1].value}`}
    let newItems = [...items,newItem];
    
    localStorage.setItem('notes',JSON.stringify(newItems));
    console.log(localStorage.getItem('notes'));
    setStateChange(newItems);
  }

  function deleted (event){
    let newitems = [];
    let skip = event.target.id;
    for(let i=0;i<items.length;i++){
      if(items[i].task==skip) continue;
      newitems.push(items[i]);
    }
    setStateChange(newitems);
    localStorage.clear();
    localStorage.setItem('notes',JSON.stringify(newItems));
  }
  return (
    <center class="todo-container">
      <Appname></Appname>
      <Addtodo setStateChange={Added}></Addtodo>
      <Items items={items} deleted={deleted}></Items>
    </center>
  );
}

export default App;
