// import logo from "./logo.svg";
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
        {
          products.map(pro => <Product product={pro}></Product>)
        }
      </header>
    </div>
  );

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
