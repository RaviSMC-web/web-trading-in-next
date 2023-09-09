import axios from "axios";
import { IWatchlist } from "stx/app/types";
import { LOGIN_API } from "stx/utils/API";

export const fetchAllWatchlist = async () => {
    const data = await LOGIN_API.get("/watchlists/all", {
      headers: {
        "X-Client-Id": "ORAVI123",
        "X-Platform": "web",
      },
    });
    return data as unknown as IWatchlist;
  };

  export const fetchBulkDealsData = async () => axios.get(`http://inmob.stoxkart.com:8080/solr/BulkDeals/select?wt=json&indent=true&rows=10&sort=Date_dt%20desc&fl=&csv.separator=~&q=*`).then((res) => res.data);

  export const fetchDataByID = async (id: number) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.data);

//   export const fetchBulkDealsData = async () => {
    
//     const data = await axios.get('http://inmob.stoxkart.com:8080/solr/BulkDeals/select?wt=json&indent=true&rows=10&sort=Date_dt%20desc&fl=&csv.separator=~&q=*')
//     return data
//   };

  