import Products from "./components/product/Product";
import React,{useEffect} from 'react'
import {getData} from './redux/actions/ListAction'
import { useDispatch } from 'react-redux';
import ProductList from "./components/productList/ProductList";
function App() {
  const Dispatch = useDispatch();

useEffect(() => {

  Dispatch(getData())

},[Dispatch])


  return (

    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
