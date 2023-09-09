"use client";
import { Button } from "@mui/material";
import React from "react";
import useAPIData from "stx/hooks/useWatchlistData";
import { fetchAllWatchlist } from "stx/queryFns/getQuery";

type Props = {};

const Watchlist = (props: Props) => {
  const { isLoading, data, isError, error, refetch }: any = useAPIData("watchlist", fetchAllWatchlist, false);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(isLoading);

  return (
    <>
      <div>Watchlist</div>
      <Button onClick={refetch}>fetch watchlist</Button>
    </>
  );
};

export default Watchlist;
