import Head from 'next/head'
import Link from 'next/link'

import React from 'react'

export default function Index() {
    return (
        <>
        <Head>
            <title>EarthTraveller1</title>
        </Head>
        
        <h1>EarthTraveller1</h1>
        
        <p>
            This webpage is created with Next.js, and hosted on GitHub pages. Below
            is a table of contents for this site.
        </p>
        
        <ol>
            <li><Link href="/ccxx-project-conventions">C/C++ Project Conventions</Link></li>
        </ol>
        </>
    )
}