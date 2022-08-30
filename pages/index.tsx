import Head from 'next/head'

import styles from './index.module.css'

export default function Index() {
    return (
        <>
        <div className={styles.page}>
            <Head>
                <title>EarthTraveller1</title>
            </Head>
            
            <h1 className={styles.center + " " + styles.bigText}>NO</h1>
            <p className={styles.center + " " + styles.smallText}>Just no...</p>
        </div>
        </>
    )
}