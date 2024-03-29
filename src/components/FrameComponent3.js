import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.documentTitleParent}>
      <header className={styles.documentTitle}>
        <div className={styles.newInformationFor}>
          New Information for Use (IFU)
        </div>
        <div className={styles.chevronDownIcon}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.generalInformationWrapper}>
              <img
                className={styles.generalInformationIcon}
                loading="lazy"
                alt=""
                src="/polygon-6.svg"
              />
            </div>
            <div className={styles.newDocumentWrapper}>
              <div className={styles.newDocument}>New Document</div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.vectorWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/vector-311.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
