import Head from 'next/head'
import Script from 'next/script'

import styles from './index.module.css'

export default function Index() {
    return (
        <>
        <div className={styles.page}>
            <Head>
                <title>EarthTraveller1</title>
            </Head>
            
            <Script
                src='/scripts/index.js'
            />
            
            <h1 className={styles.center + " " + styles.bigText}>NO</h1>
            <p className={styles.center + " " + styles.smallText} id="justNoText"></p>
        </div>
        </>
    )
}