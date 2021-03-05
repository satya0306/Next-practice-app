import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => (

<div>

 <Head>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet"/>
</Head> 

    <div>
        <div className="mt-3"></div>
            <div>
                {children} 
            </div>
        </div>
</div>

    
)

export default Layout
