import React from "react";
import "./productStyle.css";
import { Box, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Product = ({dataOfProduct}) => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center">
      <Box
        bgcolor="#fff"
        boxShadow={3}
        borderRadius={25}
        position="relative"
        width="60%"
        p={3}
        m={2}
        mt={20}
      >
        <Grid>
          <Grid>
            <div className="price">
              <h3>AED {dataOfProduct.product_price}</h3>
            </div>
            <div className="numberOfproduct">
              <div className="first-circle">
                <div className="second-circle">
                  <h4>{dataOfProduct.quantity_sold}</h4>
                  <p className="soldText">SOLD</p>
                  <p className="outOfText">
                    OUT OF
                    <br /> {dataOfProduct.product_quantity }
                  </p>
                </div>
              </div>
            </div>
            <div className="trapezoid">
              <div className="shape-1"></div>
              <h4 className="winthisText">Win This</h4>
              <div className="shape-2"></div>
            </div>
          </Grid>
          <Grid
            className="product-display"
            container
            item
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              className="first-product order2"
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              lg={5}
              item
            >
              <img
                src={dataOfProduct.product_id.image}
                className="productImage"
              />
              <h3 className="titleProduct">Buy a</h3>
  <p className="subTitleProduct">{dataOfProduct.product_id.name}</p>
              <p className="productText">
                {dataOfProduct.product_id.description}
              </p>
            </Grid>

            <Grid
              className="first-product order4"
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              lg={5}
              item
            >
              <img src={dataOfProduct.prize_id.image} className="productImage" />
              <h3 className="titleProduct">Buy a</h3>
  <p className="subTitleProduct">{dataOfProduct.prize_id.name}</p>
              <p className="productText">
                {dataOfProduct.prize_id.description}
              </p>
            </Grid>
            <Grid className="order1">
              <a className="cart wishlist" href="#">
                <FavoriteIcon />
              </a>

              <a className="cart product" href="#">
                <ShoppingCartIcon />
              </a>
            </Grid>
            <Grid className="counterProduct order3">
              <div className="Counter">
                <div className="counterMark">+</div>
                <p className="counterText">2</p>
                <div className="counterMark">-</div>
              </div>
              <div className="showCard">show your card</div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;
