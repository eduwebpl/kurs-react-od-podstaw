import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import {twitterAccounts} from '../../data/twitterAccounts';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {/* destrukturyzacja z tA.map(item => (<ListItem name={item.name}
            zrobiono tA.map(({name, image})=> name={name} image={image})
            a następnie tA.map(item) => (<ListItem {...item}/>)

            key dodajemy po to zeby w konsoli nie dostawac bledu

        */}
        {twitterAccounts.map(item =>(
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);


export default ListWrapper;