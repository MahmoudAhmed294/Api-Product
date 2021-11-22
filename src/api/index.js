import axios from "axios";

const url = "https://wawinner.its.ae/dev/public/api/v1/front-end/campaign";


export const fetchPosts = () => axios.get(url);
