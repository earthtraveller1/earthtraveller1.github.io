import Head from 'next/head'
import Script from 'next/script'

import React from 'react'

import styles from './index.module.css'

export default function Index() {
    const [smallText, setSmallText] = React.useState("")
    
    React.useEffect(() => {
        setTimeout(() => {
            setSmallText("Just no...")
        }, 2500)
    })
    
    return (
        <>
        <div className={styles.page}>
            <Head>
                <title>EarthTraveller1</title>
            </Head>
            
            <h1 className={styles.center + " " + styles.bigText}>NO</h1>
            <p className={styles.center + " " + styles.smallText}>{smallText}</p>
        </div>
        </>
    )
}