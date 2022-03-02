// import logo from "./logo.svg";
import React,{useEffect, useState} from 'react'
import "./App.css";

function App() {
  const products=[
  {name:'Photoshop', price:'$56.6'},
  {name:'Illustrator',price:'$55'},
  {name:'PDF', price:'$30'},
  {name:'premier', price: '$40'}
  ]

  return (  
    <div className="App">
      <header className="App-header">
      <CountNumber></CountNumber>
      <Users></Users>


        {
          products.map(pro => <Product product={pro}></Product>)
        }

      </header>
    </div>
  );

}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h4>User:{users.length}</h4>
      <ul>
        {
          users.map( use => <li>{use.id}{use.name }</li>)
        }
        <br></br>
        {
          users.map( use => <li>{use.phone}</li>)
        }
      </ul>
    </div>
  )
}

function CountNumber(){
  const [count, setCount ]= useState(0);
//   const plus = () => {
//     const newCount= count + 1;
//     setCount(newCount)
//   }
//  const minus = () => {
//    const newCount = count -1;
//    setCount(newCount)
//  }
// const plus = () => setCount(count +1);
// const minus =() => setCount(count -1)
 
  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={ () => setCount(count +1)}> + </button>
      <button onClick={() => setCount(count -1)}> - </button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'2px solid red',
    borderRadius:'5px',
    backgroundColor:'light',
    height:' 250px',
    width:' 700px',
    margin:'10px',
    float:'left',
  }
  
  return(
    <div style={productStyle}>
      <h1>{props.product.name} </h1>
      <h2>{props.product.price}</h2>
      <button>button</button>
    </div>
  )
} 

export default App;
