import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
    <li className="listItem__wrapper">
        <img src={danAbramovImage} className="listItem__image" />
        <div>
            <h2 className="listItem__name">Dan Abramov</h2>
            <p className="listItem__description">It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations.</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>
);

export default ListItem;