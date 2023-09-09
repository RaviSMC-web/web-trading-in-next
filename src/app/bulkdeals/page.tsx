import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "stx/lib/getQueryClient";
// import { fetchBulkDealsData } from "stx/queryFns/getQuery";
import { ReactQueryHydrate } from "../components/ReactQueryHydrete/ReactQueryHydrate";
import { Posts } from "../components/client/Posts/Posts.client";
import { fetchBulkDealsData } from "stx/queryFns/getQuery";

 


export default async function Dashboard() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["bulkdeals"], fetchBulkDealsData);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
    <Posts />
    </ReactQueryHydrate>
  );
}
