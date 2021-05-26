import React from 'react'
import styles from '../styles/userCard.module.css'

const UserCard = ({image, name, username}) => {
  return (
    <div className={styles.container}>
       <img className={styles.img} src={image}/>
     <div className={styles.infContainer}>
       <p className={styles.p1}>{name}</p>
       <p className={styles.p2}>{username}</p>
     </div>
    </div>
  )
}

export default UserCard
