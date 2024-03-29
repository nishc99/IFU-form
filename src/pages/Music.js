import MusicScreen from "../components/MusicScreen";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.div}>
      <section className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-4460.svg" />
        <div className={styles.frameParent}>
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1000002890@2x.png"
          />
          <div className={styles.relaxFor10MinsWrapper}>
            <h2 className={styles.relaxFor10}>Relax for 10 mins</h2>
          </div>
          <MusicScreen />
        </div>
      </section>
    </div>
  );
};

export default Music;
