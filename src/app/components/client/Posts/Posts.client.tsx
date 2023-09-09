'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Post as PostType } from 'stx/types';
import { Post } from './Post.client';
import { Button } from '@mui/material';
import { fetchBulkDealsData } from 'stx/queryFns/getQuery';

export const Posts = () => {
  const { data, refetch } = useQuery({
    queryKey: ['bulkdeals'],
    queryFn: fetchBulkDealsData,
  });

  if (!data) return <div>Not found</div>;

  return (
    <div className='divide-y'>
    <Button onClick={() => refetch()}> fetch</Button>

      {data?.response?.docs.map((post: any) => (
        <Post post={post} key={post.co_code_s} />
      ))}
    </div>
  );
};
