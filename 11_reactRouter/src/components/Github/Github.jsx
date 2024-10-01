import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData]=useState(0);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akramkhan27')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])

    const data= useLoaderData();
  return (
    <div className='bg-gray-500 text-white text-3xl m-4 p-5'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response =await fetch('https://api.github.com/users/akramkhan27')
    return response.json();
}