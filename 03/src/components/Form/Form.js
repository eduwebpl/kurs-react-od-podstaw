import React from 'react';
import './Form.css';

const Form = ({submitFn}) => (
    <div className="form__wrapper">
        <h2>Add new twitter account</h2>
        <form 
            className="form__form" 
            onSubmit={submitFn}
        >
            <div className="form__item">
                <input 
                    type="text" 
                    name="name" 
                    id="name" placeholder=" " maxLength="30"
                />
                <label htmlFor="name">Name</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input
                    type="text"
                    name="link"
                    id="link" placeholder=" "
                />
                <label htmlFor="link">Link</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input
                    type="text"
                    name="image"
                    id="image" 
                    placeholder=" " 
                />
                <label htmlFor="image">Image</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <textarea
                    name="description"
                    id="description"
                    placeholder=" "
                />
                <label htmlFor="description">Description</label>
                <div className="forms__item__bar"></div>
            </div>
            <button 
                className="form__button"
                type="submit"
            >
                add new item
            </button>
        </form>
    </div>
);

export default Form;