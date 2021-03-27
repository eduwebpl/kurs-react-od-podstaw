import React from 'react';
import Form from './components/Form/Form';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';

const inistialStateItems = [{
    image: 'https://www.tate.org.uk/sites/default/files/styles/width-720/public/malevich5_0.jpg',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
    image: 'https://www.tate.org.uk/sites/default/files/styles/width-720/public/malevich5_0.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
    image: 'https://www.tate.org.uk/sites/default/files/styles/width-720/public/malevich5_0.jpg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
    },
    {
    image: 'https://www.tate.org.uk/sites/default/files/styles/width-720/public/malevich5_0.jpg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
    },];

class App extends React.Component {
    state={
        items: [...inistialStateItems],
    }

    addItem = (e) =>{
        e.preventDeafult();
    }

    render(){
        return(
        <div>
            <ListWrapper
                items={this.state.items}
            />
            <Form submitFn={this.addItem}/>
        </div>
        )
    }
}

export default App;
