import React from 'react'
import styles from './friendlist.module.css'
import PropTypes from 'prop-types';


export default function ListItem ({friends}) {
    return (
        <>
        {friends.map(item => (
            <li key={item.id} className={styles.item}>
            <span className={!item.isOnline ? styles.status : styles.isOnline}>{item.isOnline}</span>
            <img className={styles.avatar} src={item.avatar} alt="" width="48" />
            <p className={styles.name}>{item.name}</p>
        </li>
        ))}
        </>
    )
}

ListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
  }