import { useState } from "react";
import "./Travel.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true }

];

export default function App() {
  const[finalItems,setFinalItems]=useState([...initialItems]);
  const[desc,setDesc]=useState("");
  const[select,setSelect]=useState("");
  function handleDelete(e,id){
    setFinalItems(finalItems.filter(item =>item.id ===id))
  }
  function handlePacked(e,id){

  }
  return (
    <div className="App">
      <Header />
      <Form 
      finalItems={finalItems}
      setFinalItems={setFinalItems}
      desc={desc}
      setDesc={setDesc}
      select={select}
      setSelect={setSelect}
      />
      <PackingList 
      finalItems={finalItems}
      handleDelete={handleDelete}
      handlePacked={handlePacked}
      />
      <Stats
      finalItems={finalItems}
      />
    </div>
  );
}

function Header() {
  return <h1> 🏝 Far Away 🧳 </h1>;
}

function Form({finalItems,setFinalItems,desc,setdesc,select,setSelect}) {
  function handleSubmit(e){
e.preventDefault();
const item={};
item.id=finalItems.length+1;
item.description=desc;
item.quantity=select;
item.packed=false;
setFinalItems([...finalItems,item]);
setSelect("1");
setDesc("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={select} onChange={(e)=>setSelect(e.target.value)}>
        {Array.from({ length: 20 }, (val, idx) => idx + 1).map((val, idx) => {
          return (
            <option key={idx} value={val}>
              {val}
            </option>
          );
        })}
      </select>

      <input
        placeholder="item..."
        value={desc}
        onChange={(e) => {
          console.log(e.target.value);
          setDesc(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList({finalItems,handleDelete,handlePacked}) {
  return (
    <div className="list">
      <ul>
        {finalItems.map((eItem,index) => {
          return <Item item={eItem} key={index} handleDelete={handleDelete}/>;
        })}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have{finalItems.length} items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

function Item({item,handleDelete,handlePacked }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e)=>handleDelete(e,item.id)}>❌</button>
      <button onClick={handlePacked}></button>
    </li>
  );
}





          