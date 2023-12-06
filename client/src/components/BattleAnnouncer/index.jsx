/* eslint-disable react/prop-types */
// battle announcer will use typed messages to type out the actions that happen during the battle
import { useTypedMessage } from '../../Hooks';
import styles from './styles.module.css';

const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};
export default BattleAnnouncer;