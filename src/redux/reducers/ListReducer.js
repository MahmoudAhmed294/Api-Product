
const initState ={
  data:[],
}

const productsData = (state = initState , action) => {
  switch (action.type) {

    case 'FETCH_ALL':
      return action.payload;

    default:
      return state;
  }
};

export default productsData;
