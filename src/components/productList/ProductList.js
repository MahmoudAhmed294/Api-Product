import React from 'react'
import { useSelector } from "react-redux";
import Product from "../product/Product";
import CircularProgress from '@material-ui/core/CircularProgress';

const ProductList = () => {
    const productdetails = useSelector((state) => state.productsData.data);
    console.log(productdetails);
  
    return (
        <>
        {
            productdetails ? productdetails.map((value)=>(
                <Product  dataOfProduct={value} key={value.id}/>
                )):<div style={{display:'flex', flex:1 , justifyContent:"center" , alignItems:"center" ,height:'100vh'}}>
                    <CircularProgress color="secondary" />

                </div>
        }
        </>
    )
}

export default ProductList
