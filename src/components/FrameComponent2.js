import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.selectNameWrapper}>
        <div className={styles.selectName}>
          <span>{`Target Audience `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.frameChild} />
        {/* <div className={styles.queueMapEntry}>Select Target Audience</div>
        <div className={styles.chevronDownWrapper}>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown-1.svg"
          />
        </div> */}
        <select className={styles.text2}>
        <option value="option1">Select Target Audience</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default FrameComponent2;
