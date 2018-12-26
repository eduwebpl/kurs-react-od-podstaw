import React from 'react';

const Form = ({submitFn}) => (
    <form onSubmit={submitFn}>
        <input placeholder="name" name="name" />
        <input placeholder="link" name="link" />
        <input placeholder="image" name="image" />
        <textarea placeholder="description" name="description" />
        <button type="submit">
            add new item
        </button>
    </form>
);

export default Form;