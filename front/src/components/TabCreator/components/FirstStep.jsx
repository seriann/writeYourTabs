import React from 'react'
import styles from "../styles/firstStep.module.css"

const FirstStep = ({ handleClick, handleChange, title, author, genre, textarea }) => {
  return (
  <form onSubmit={handleClick} className={styles.container}>
    <p className={styles.p}> before continue we need some extra information about your tab</p>
    <p className={styles.p}> please fill out the form </p>
    <label className={styles.label}>Title</label>
     <input
     value={title}
     onChange={handleChange}
     name="title"
     className={styles.input}
     required
     />
    <label className={styles.label}>Author</label>
     <input
     value={author}
     onChange={handleChange}
     name="author"
     className={styles.input}
     required
     />
    <label className={styles.label}>Genre</label>
    <input
    value={genre}
    onChange={handleChange}
    name="genre"
    className={styles.input}
    required
    />
    <div className={styles.textareaContainer}>
      <label className={styles.label}>you want to leave a short description? it's optional</label>
        <textarea
        value={textarea}
        onChange={handleChange}
        name="textarea"
        className={styles.input2}
        maxLength="250"
        />
      <p className={styles.counter}>{`${textarea.length}/250`}</p>
    </div>
    <input
    type='submit'
    className={styles.button}></input>
  </form>
 )
}
export default FirstStep
