import React, { useState, useEffect } from 'react';
import { PersonalCard } from '../../components/PersonalCard';
import styles from './RobotView.module.scss';

function RobotView(props) {
  const [robot, setRobot] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    // Cancelling a Promise with React.useEffect
    // https://juliangaramendy.dev/use-promise-subscription/
    let isSubscribed = true;
    setIsPending(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
      .then(response => {
        if (response.status === 404) {
          props.history.push('/404');
        } else {
          return response.json();
        }
      })
      .then(user => {
        if (isSubscribed) {
          setRobot(user);
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
  }, [props.match.params.id]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value ? 'Instruction: ' + value.toUpperCase() : 'IDLE MDOE');
    setValue('');
  };

  const renderForm = () => (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Send your instructions to the robot:
        <textarea
          className={styles.formTextarea}
          value={value}
          onChange={handleChange}
          placeholder="See instructions in the console..."
        />
      </label>
      <input className={styles.submitButton} type="submit" value="INSTRUCT" />
    </form>
  );

  return (
    <div className={styles.wrapper}>
      {isPending && <h2 className={styles.centerTextOnPage}>Loading...</h2>}
      {hasError && <h2 className={styles.centerTextOnPage}>Oops! Something went wrong.</h2>}
      {!isPending && !hasError && robot.id && (
        <>
          <h1 className={styles.title}>Robot Personal Card</h1>
          <div className={styles.container}>
            <PersonalCard robot={robot}></PersonalCard>
            {renderForm()}
          </div>
        </>
      )}
    </div>
  );
}

export default RobotView;
