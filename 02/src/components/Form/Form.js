import React from 'react';
import './Form.css';

const Form = ({submitFn}) => (
    <form className="form__wrapper" onSubmit={submitFn}>
        <h2>Add new twitter account</h2>
        <input className="form__item" placeholder="Name"></input>
        <input className="form__item" placeholder="Link"></input>
        <input className="form__item" placeholder="Image"></input>
        <textarea className="form__item"
         placeholder="Description"
         name="description"></textarea>
        <button type="submit">add new item</button>
    </form>
);

export default Form;