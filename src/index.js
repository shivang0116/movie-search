import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import rootReducer from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);
export const StoreContext = createContext();
class Provider extends React.Component {
  render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }

}
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
  ,
  document.getElementById('root')
);
