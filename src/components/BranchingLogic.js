import { useMemo } from "react";
import styles from "./BranchingLogic.module.css";

const BranchingLogic = ({ propFlex, propMinWidth, propWidth, propPadding }) => {
  const branchingLogicStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const groupDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.branchingLogic} style={branchingLogicStyle}>
      <div className={styles.selectName}>{`Published Date `}</div>
      <div className={styles.rectangleParent} style={groupDiv3Style}>
        <div className={styles.frameChild} />
        <div className={styles.loopController}>
          <div className={styles.est}>EST</div>
          <div className={styles.loopControllerInner}>
            <img className={styles.frameItem} alt="" src="/polygon-7.svg" />
          </div>
        </div>
        <input
      className={styles.text2}
      placeholder="Select date"
      type="date"
    />
      </div>
    </div>
  );
};

export default BranchingLogic;
