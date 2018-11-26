import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map((item) => (
            <ListItem
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.twitterLink}
            />
        ))}
    </ul>
);

export default ListWrapper;