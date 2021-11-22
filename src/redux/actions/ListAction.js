import {fetchPosts} from '../../api/index';


export const getData = () => async (dispatch) => {

  try {
      const { data } = await fetchPosts();
      dispatch({ type: 'FETCH_ALL', payload: data })
  }
  catch (err) {
      console.error(err.message);
  }
}
