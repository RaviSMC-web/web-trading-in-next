"use client"

import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { createQuery } from "react-query-kit";

const usePost = createQuery<
  {
    userId: number;
    id: number;
    title: string;
    body: string;
  },
  number,
  Error
>({
  primaryKey: "GET_POST",
  queryFn: ({ queryKey: [_, variable] }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${variable}`).then(
      (res) => res.json()
    );
  },
});

export default function ReactQueryKit() {
  const { data: posts } = usePost({ variables: 3 });

  const queryClient = useQueryClient();
  return (
    <div>
      <button
        onClick={() => {
          queryClient.fetchQuery(usePost.getKey(3), usePost.queryFn);
        }}
      >
        Fetch Query
      </button>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}