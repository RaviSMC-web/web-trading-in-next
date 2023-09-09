import { dehydrate } from "@tanstack/react-query";
// import ReactQueryHydrate from "stx/utils/ReactQueryHydrate";
// import getQueryClient from "stx/utils/getQueryClient";
import Watchlist from "../components/watchlist/Watchlist";
import { LOGIN_API } from "stx/utils/API";
import { IWatchlist } from "../types";

// export const fetchSuperHeroes = async () => {
//   const data = await LOGIN_API.get("/watchlists/all", {
//     headers: {
//       "X-Client-Id": "ORAVI123",
//       "X-Platform": "web",
//       // "Cookie":
//       //   "session=476eaeb12c86ba3755173d0c6cca0a80a723c1083bef976d2abc09343dbc4b24",
//     },
//   });
//   return data as unknown as IWatchlist;
// };

export default async function Dashboard() {
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["watchlist"], fetchSuperHeroes);
  // const dehydratedState = dehydrate(queryClient);

  return (
    // <ReactQueryHydrate state={dehydratedState}>
      <Watchlist />
    // </ReactQueryHydrate>
  );
}
