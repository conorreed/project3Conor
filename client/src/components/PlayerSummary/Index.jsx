/* eslint-disable react/prop-types */
// this is where the Name, Level, and an HP bar will be living. Will be above the sprite of the actual character.
import { Bar } from 'components';
import styles from './styles.module.css';

const red = '#821400';
const blue = '#1953cb';

const PlayerSummary = ({
  main,
  name,
  level,
  health,
  maxHealth,
}) => (
  <div
    className={styles.main}
    style={{ backgroundColor: main ? red : blue }}
  >
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.level}>Lvl {level}</div>
    </div>

    <div className={styles.health}>
      <Bar label="HP" value={health} maxValue={maxHealth} />
    </div>
  </div>
);
export default PlayerSummary;