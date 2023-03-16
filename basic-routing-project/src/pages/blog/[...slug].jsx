import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Blog = () => {
    const router = useRouter();
    console.log(router);
    let data;

    try {
         data = {
            d: router.query?.slug[0],
            m: router.query?.slug[1],
            y: router.query?.slug[2],
            pid: router.query?.slug[3],
        }
    } catch (error) {
        
    }

    console.log(data);
    
    return (
    <div>Blog: 
        <p>pathname: {router.pathname}</p>
        <p>route: {router.route}</p>
        <p>asPath: {router.asPath}</p>
        <p>slug: {router.query.slug}</p>
        <br /><br />
        {data?.d &&<p>D: {data.d}</p>}
        {data?.m &&<p>M: {data.m}</p>}
        {data?.y &&<p>Y: {data.y}</p>}
        {data?.pid &&<p>PID: {data.pid}</p>}
    </div>
  )
}

export default Blog