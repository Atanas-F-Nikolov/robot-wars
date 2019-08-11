import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './pages/Home';
import { RobotList } from './pages/RobotList';
import { PageNotFound } from './pages/PageNotFound';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={props => <Home {...props} />} />
          <Route exact path="/robots" component={props => <RobotList {...props} />} />
          <Route exact path="/404" component={() => <PageNotFound />} />
          <Route exact component={() => <Redirect to="/404" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
