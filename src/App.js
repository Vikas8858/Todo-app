import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './tabs';

function App() {

let[active,setActive]=useState(0)
let[content,setContent]=useState(tabs[0])

let changeData=(index)=>{
  setActive(index)
  setContent(tabs[index])
}


let[list,setList]=useState([])
    
let saveToDoList=(event)=>{
let toname=event.target.toname.value;
if(!list.includes(toname)){
  let finalList=[...list,toname]
  setList(finalList)

} 
else{
 alert("ToDo Name Allready Exists.....")
} 
  
  event.preventDefault();
}
let list1=list.map((value,index)=>{
return(
  <ToDoListItems value={value} key={index} indexNumber={index}
  list={list}
  setList={setList}
  />
)

})

  return (
    <div className="App">

     <div className="tabOuter">
      <h1  style={{textAlign:'left'}}>Law prep Vision Mission and value</h1>
      <ul>
        {tabs.map((value,index)=>{
          return(
          <li>
            <button onClick={()=>changeData(index)} className={active==index? 'activeButton': ''}>
              {value.title}
              
            </button>
          </li>
          )
        })}
      
      </ul>

      {
     content!==undefined?
     <p>
     {content.description}
   </p>
   :
   ''

      }
     </div>


      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
            <input type="text"  name='toname'/>
            <button>save</button>
      </form>
         
         <div className="outerDiv">
          <ul>
            {list1}
          </ul>
         </div>

    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,list,setList}){
  let[status,setStatus]=useState(false)
  
  let deleteRow=()=>{
    let finalData=list.filter((v,i)=>i!=indexNumber)
   setList(finalData)
  }

  let cheackStatus=()=>{
 setStatus(!status)
  }
  
  return(

      <li className={(status)? 'completetodo': ' '}  onClick={cheackStatus}>   {indexNumber+1}{value} <span onClick={deleteRow}>&times;</span></li>

      )

}