import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ArticlesView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.article} />
    )}
  </AppContext.Consumer>
);

export default ArticlesView;