import { useQuery } from "@tanstack/react-query";
// import { IWatchlist } from "stx/app/types";
// import { LOGIN_API } from "stx/utils/API";

// export const fetchSuperHeroes = async () => {
//   const data = await LOGIN_API.get("/watchlists/all", {
//     headers: {
//       "X-Client-Id": "ORAVI123",
//       "X-Platform": "web",
//     },
//   });
//   return data as unknown as IWatchlist;
// };

export default function useAPIData(key: string, fn: any, enabled?: boolean, id?: number) {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => fn(),
    enabled: enabled
  });
}
