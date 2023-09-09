"use client";
import { Button } from "@mui/material";
import React from "react";
import useAPIData from "stx/hooks/useWatchlistData";
import {  fetchDataByID } from "stx/queryFns/getQuery";

type Props = {};

const PostByID = (props: Props) => {
  const { isLoading, data, isError, error, refetch }: any = useAPIData("data_id", () =>fetchDataByID(1), false, 1);

  return (
    <>
      <div>Watchlist</div>
      <Button onClick={() =>refetch()}>fetch watchlist</Button>
      {data?.title}
    </>
  );
};

export default PostByID;
