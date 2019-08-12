import React, { useState, useEffect } from 'react';
import { CardList } from '../../components/CardList';
import styles from './RobotList.module.scss';

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Cancelling a Promise with React.useEffect
    // https://juliangaramendy.dev/use-promise-subscription/
    let isSubscribed = true;
    setIsPending(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        if (isSubscribed) {
          setRobots(users);
          setIsPending(false);
        }
      })
      .catch(err => {
        if (isSubscribed) {
          setHasError(true);
          setIsPending(false);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isPending && <h2 className={styles.centerTextOnPage}>Loading...</h2>}
      {hasError && <h2 className={styles.centerTextOnPage}>Oops! Something went wrong.</h2>}
      {!isPending && !hasError && robots.length > 0 && (
        <>
          <h1 className={styles.title}>Robot Warriors List</h1>
          <CardList robots={robots}></CardList>
        </>
      )}
    </div>
  );
}

export default RobotList;
