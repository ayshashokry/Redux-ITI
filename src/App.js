import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './redux/reducers/rootReducers';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarDetails from './containers/CarDetails';
import promiseMW from 'redux-promise';
const createStoreWM = applyMiddleware(promiseMW)(createStore);
const App = () => {
  return (
    <Provider store={createStoreWM(rootReducers)}>
      <Header />
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cars" component={Home} />
            <Route exact path="/cars/:id" component={CarDetails} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
