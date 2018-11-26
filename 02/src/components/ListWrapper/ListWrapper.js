import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        <ListItem
            name={twitterAccounts[0].name}
            description={twitterAccounts[0].description}
            image={twitterAccounts[0].image}
        />
        <ListItem
            name={twitterAccounts[1].name}
            description={twitterAccounts[1].description}
            image={twitterAccounts[1].image}
        />
        <ListItem
            name={twitterAccounts[2].name}
            description={twitterAccounts[2].description}
            image={twitterAccounts[2].image}
        />
        <ListItem
            name={twitterAccounts[3].name}
            description={twitterAccounts[3].description}
            image={twitterAccounts[3].image}
        />
    </ul>
);

export default ListWrapper;