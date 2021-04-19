import React from 'react';
import styles from './Form.module.scss';

const Form = ({submitFn}) => (
    <form className={styles.wrapper} onSubmit={submitFn}>
        <h2>Add new twitter account</h2>
        <input className={styles.form__item} placeholder="Name"></input>
        <input className={styles.form__item} placeholder="Link"></input>
        <input className={styles.form__item} placeholder="Image"></input>
        <textarea className={styles.form__item}
         placeholder="Description"
         name="description"></textarea>
        <button type="submit">add new item</button>
    </form>
);

export default Form;