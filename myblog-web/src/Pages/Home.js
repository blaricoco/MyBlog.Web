import React from 'react'
import useFetch from '../Hooks/useFetch';
function Home() {

  const{data, loading, error} = useFetch("https://v2.jokeapi.dev/joke/Any")

  if (loading) return <h1>LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div>
      <div>THIS IS HOME</div>
      <div>
      <h1>{data?.setup} : {data?.delivery}</h1>
      </div>
    </div>
    
  )
}

export default Home