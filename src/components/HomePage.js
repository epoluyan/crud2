import React from 'react';
import useJsonFetch from '../data/useJsonFetch';
import Posts from './Posts';

export default function HomePage() {
  const url = 'http://localhost:7777/';
  const [data, isLoading, error] = useJsonFetch(`${url}posts`);

 return (
    <div className="posts-container">
       {isLoading && <progress/>}
       {error && <div> {error} </div>}
       {data && !isLoading && (<div className="posts">{data.length && <Posts data={data}/>}</div>)}
    </div>
 );
}
