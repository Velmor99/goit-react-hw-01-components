import React from 'react'
import styles from './friendlist.module.css'



export default function Friends ({children}) {
    return (
    <ul className={styles.friendsList}>
        {children}
    </ul>
    )
}

