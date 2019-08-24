import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './pages/Home';
import { RobotList } from './pages/RobotList';
import { RobotView } from './pages/RobotView';
import { PageNotFound } from './pages/PageNotFound';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter basename="/robot-wars">
      <div className={styles.wrapper}>
        <NavigationBar />
        <section role="main" className={styles.main}>
          <Switch>
            <Route exact path="/" component={props => <Home {...props} />} />
            <Route exact path="/robots" component={props => <RobotList {...props} />} />
            <Route exact path="/robots/:id" component={props => <RobotView {...props} />} />
            <Route exact path="/404" component={() => <PageNotFound />} />
            <Route exact component={() => <Redirect to="/404" />} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
