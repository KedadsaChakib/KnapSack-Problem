import React, { useState,useEffect } from "react";
import Header from "./Header";
//import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import knapsackSolve from "../knapsack";
import KnapsackMatrix from "./KnapsackMatrix";



function App() {
  const item1 = { name: 'Lait', weight: 2, value: 1 };
  const item2 = { name: 'Hamoud', weight: 3, value: 3 };
  const item3 = { name: 'Optilla', weight: 5, value: 2 };
  const item4 = { name: 'Maxon', weight: 3, value: 5 };
  const [items, setItems] = useState([item1, item2, item3, item4]);
  const [chosen, setChosen] = useState([]);
  const [KnapsackTable, setKnapsackTable] = useState(null);
  const [maxWeight, setMaxWeight] = useState(0);



  useEffect(() => {
    // This block of code will be executed when KnapsackTable changes
    console.log("le resultat est ", KnapsackTable);
  }, [KnapsackTable]);

  function updateMaxWeight(value) {
    setMaxWeight(value)
  }

  function compare(a, b) {
    if (a.weight < b.weight) {
      return -1;
    }
    if (a.weight > b.weight) {
      return 1;
    }
    return 0;
  }
  function addItem(newItem) {
    setItems(prevItems => {
      var temp = [...prevItems, newItem];
      temp.sort(compare);
      return temp;
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  
  function onSolve() {
    const result = knapsackSolve(items, maxWeight);
    setChosen(result.chosen);
    console.log("La valeur optimal = ", result.valueOptim);
    setKnapsackTable(result.table)
    //console.log("le resultat est ", KnapsackTable)
  }


  return (
    <div>
      <Header onSolve={onSolve} updateMaxWeight={updateMaxWeight}/>
      <CreateArea onAdd={addItem} />
      <div style ={{alignItems:'center',justifyContent:'center'}}>
      {items.map((item, index) => {
        //console.log(chosen[index] === 1)
        return (
          <Note
            key={index}
            id={index}
            name={item.name}
            weight={item.weight}
            value={item.value}
            onDelete={deleteItem}
            selected={chosen.some(it => JSON.stringify(it) === JSON.stringify(item))}
          />
        );
      })}
      </div>
    <KnapsackMatrix
    matrix = {KnapsackTable}
    />
    </div>
  );
}

export default App;
