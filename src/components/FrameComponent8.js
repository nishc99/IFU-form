import { useMemo } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({
  documentSpecificFor,
  concurrentNavigableMap,
  chevronDown,
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
  propMinWidth1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const concurrentNavigableMapStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.selectNameParent} style={frameDiv1Style}>
      <div className={styles.selectName}>
        <span>{documentSpecificFor}</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} />
        {/* <input
        className={styles.text1}
        placeholder="Name Required"
        type="text"
        />
        <div className={styles.chevronDownWrapper}>
          <img className={styles.chevronDownIcon} alt="" src={chevronDown} />
        </div> */}
        <select className={styles.text2}>
        <option value="option1">Select Franchise</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default FrameComponent8;
