import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers/blog_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return <div>Hello!</div>
    }
}

class GoodBye extends React.Component {
    render() {
        return <div>GoodBye!</div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={GoodBye} />            
        </div>
        </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));