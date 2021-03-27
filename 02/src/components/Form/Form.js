import React from 'react';
import './Form.css';

const Form = ({submitFn}) => (
    <form className="form__wrapper" onSubmit={submitFn}>
        <h2>Add new twitter account</h2>
        <input class="form__item" placeholder="name"></input>
        <input class="form__item" placeholder="link"></input>
        <input class="form__item" placeholder="image"></input>
        <textarea class="form__item" placeholder="description" name="description"></textarea>
        <button type="submit">add new item</button>
    </form>
);

export default Form;