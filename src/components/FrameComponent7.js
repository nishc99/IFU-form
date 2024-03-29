import { useMemo } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({
  published,
  text,
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
  propLineHeight,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const groupDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.selectNameParent} style={frameDiv2Style}>
      <div className={styles.selectName}>
        <span>{published}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.rectangleParent} style={groupDiv2Style}>
        <div className={styles.frameChild} />
        {/* <div className={styles.text} style={textStyle}>
          {text}
        </div> */}
        <select className={styles.text2}>
        <option value="option1">Select Version</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
        {/* <div className={styles.chevronDownWrapper}>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown-1.svg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default FrameComponent7;
