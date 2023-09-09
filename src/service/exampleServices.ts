// import axios from "axios";
import { AxiosResponse } from "axios";
import { LOGIN_API } from "stx/utils/API";

class ExampleService {
  /**
   * Get all posts
   * @returns
   */
  getAllWatchlist(): Promise<AxiosResponse<any, any>> {
    return LOGIN_API.get("/watchlists/all");
  }

  //   /**
  //    * Get By Id
  //    * @returns
  //    */
  //   getByPostId() {
  //     return axios.get("https://jsonplaceholder.typicode.com/posts/1");
  //   }

  //   /**
  //    *To Add a Post
  //    * @returns
  //    */
  //   async addPost() {
  //     const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: "foo",
  //         body: "bar",
  //         userId: 1,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     return res;
  //   }

  //   /**
  //    *To Update a Post
  //    * @returns
  //    */
  //   async updatePost() {
  //     const res = await axios.put(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify({
  //           id: 1,
  //           title: "foo",
  //           body: "bar",
  //           userId: 1,
  //         }),
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }
  //     );
  //     return res;
  //   }

  //   /**
  //    *To Delete a Post
  //    * @returns
  //    */
  //   async deletePost() {
  //     const res = await axios.delete(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     return res;
  //   }
}

export default new ExampleService();
