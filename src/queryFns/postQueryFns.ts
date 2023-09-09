import axios from "axios";

export const fetchBulkDealsData = async () => axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.data);