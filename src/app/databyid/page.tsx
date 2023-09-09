import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "stx/lib/getQueryClient";
// import { fetchBulkDealsData } from "stx/queryFns/getQuery";
import { ReactQueryHydrate } from "../components/ReactQueryHydrete/ReactQueryHydrate";
import { Posts } from "../components/client/Posts/Posts.client";
import {  fetchDataByID } from "stx/queryFns/getQuery";
import PostByID from "../components/client/PostByID";

 


export default async function Dashboard() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["data_id", 1], () =>fetchDataByID(1));
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
    <PostByID />
    </ReactQueryHydrate>
  );
}
