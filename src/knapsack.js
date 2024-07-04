/*const item1 = { name: 'Hlib', weight: 3, value: 2 };
const item2 = { name: 'Schweppes', weight: 4, value: 3 };
const item3 = { name: 'Candia', weight: 5, value: 4 };
const item4 = { name: 'IDK', weight: 6, value: 1 };

function compare(a, b) {
  if (a.weight < b.weight) {
    return -1;
  }
  if (a.weight > b.weight) {
    return 1;
  }
  return 0;
}

function knapsackSolve(items, weight) {
  // Sorting Items 

  items.sort(compare);

  var M = [[]];

  for (var j = 0; j < weight + 2; j++) {
    M[0][j] = 0;
  }
  for (var i = 1; i < items.length + 1; i++) {
    M[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (j = 0; j < items[i - 1].weight; j++) {
      M[i][j] = M[i - 1][j];
    }
    for (j = items[i - 1].weight; j < weight + 1; j++) {
      M[i][j] = Math.max(
        M[i - 1][j],
        M[i - 1][j - items[i - 1].weight] + items[i - 1].value
      );
    }
  }

  var chosen = [];

  i = items.length;
  j = weight;
  var V = 0;

  while (i !== 0 && j !== 0) {
    if (M[i][j] === M[i - 1][j]) {
      chosen[i - 1] = 0;
      i = i - 1;
    } else {
      chosen[i - 1] = 1;
      j = j - items[i - 1].weight;
      V = V + items[i - 1].value;
      i = i - 1;
    }
  }
  
  return { chosen: chosen, valueOptim: V }
}

export default knapsackSolve;


*/
const item1 = { name: 'Hlib', weight: 2, value: 1 };
const item2 = { name: 'Schweppes', weight: 3, value: 3 };
const item3 = { name: 'Candia', weight: 5, value: 2 };
const item4 = { name: 'croissant', weight: 3, value: 5 };
const items = [item1,item2,item3,item4];

function knapsackSolve(items, weight){

  var P = new Array(items.length+1);
  for (var i = 0; i < items.length+1; i++) {
    P[i] = new Array(weight);
  }

  for (var i = 0; i <= items.length; i++) {
    P[i][0] = {value: 0, bool : 0}
  }
  for (var j = 0; j <= weight  ; j++) {  
  P[0][j] = {value: 0, bool : 0}
  }
  for (let i = 1; i <= items.length; i++) {
    for (let j = 1; j <= weight; j++) {
      if(items[i-1].weight > j){
        P[i][j] ={value: P[i-1][j].value, bool : 0 }
      }else if(P[i-1][j].value > P[i-1][j-items[i-1].weight].value + items[i-1].value ){
        P[i][j]= {value: P[i-1][j].value , bool: 0}
      }else{
        P[i][j]= {value: P[i-1][j-items[i-1].weight].value + items[i-1].value , bool: 1}
      }
    }
  }
console.log("Le tableau est :")

for (let k = 0; k <= items.length ; k++) {
  let rowValues = [];
  for (let n = 0; n <= weight; n++) {
    rowValues.push(P[k][n].value);
  }
  console.log(rowValues.join("\t"));
}
//console.log(i,j)

var L =[]
i--
j--
  while (i>0) {
    if (P[i][j].bool == 1) {
      L.push(items[i-1])
      j = j-items[i-1].weight
    }
    i--
  }
  console.log(L)
  return { chosen: L, valueOptim: P[items.length][weight].value , table: P}
}
export default knapsackSolve;


//knapsackSolve(items,10)


/*
const item1 = { name: 'Hlib', weight: 2, value: 1 };
const item2 = { name: 'Schweppes', weight: 3, value: 3 };
const item3 = { name: 'Candia', weight: 5, value: 2 };
const item4 = { name: 'IDK', weight: 3, value: 5 };
const items = [item1, item2, item3, item4];

function knapsackSolve(items, weight = 10) {
  var P = new Array(items.length + 1);
  for (var i = 0; i <= items.length; i++) {
    P[i] = new Array(weight + 1);
  }

  for (var i = 0; i <= items.length; i++) {
    P[i][0] = 0;
  }
  for (var j = 0; j <= weight; j++) {
    P[0][j] = 0;
  }

  for (let i = 1; i <= items.length; i++) {
    for (let j = 1; j <= weight; j++) {
      if (items[i - 1].weight > j) {
        P[i][j] = { bool: 0, value: P[i - 1][j] };
      } else if (P[i - 1][j].value > P[i - 1][j - items[i - 1].weight].value + items[i - 1].value) {
        P[i][j] = { bool: 0, value: P[i - 1][j].value };
      } else {
        P[i][j] = { bool: 1, value: P[i - 1][j - items[i - 1].weight].value + items[i - 1].value };
      }
    }
  }

  console.log("Le tableau est:");

  for (let k = 0; k <= items.length; k++) {
    for (let n = 0; n <= weight; n++) {
      console.log(P[k][n].value);
    }
    console.log("slm");
  }

  let L = [];
  i = items.length;
  j = weight;

  while (i > 0) {
    if (P[i][j].bool == 1) {
      L.push(items[i - 1]);
      j = j - items[i - 1].weight;
    }
    i--;
  }

  console.log("Knapsack Items: ", L);
}

knapsackSolve(items, 10);
*/