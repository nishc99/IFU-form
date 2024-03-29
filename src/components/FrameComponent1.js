// import { useMemo } from "react";
// import styles from "./FrameComponent1.module.css";

// const FrameComponent1 = ({
//   documentSpecificFor,
//   concurrentNavigableMap,
//   chevronDown,
//   propFlex,
//   propMinWidth,
//   propWidth,
//   propPadding,
//   propMinWidth1,
// }) => {
//   const frameDiv1Style = useMemo(() => {
//     return {
//       flex: propFlex,
//       minWidth: propMinWidth,
//       width: propWidth,
//     };
//   }, [propFlex, propMinWidth, propWidth]);

//   const groupDiv1Style = useMemo(() => {
//     return {
//       padding: propPadding,
//     };
//   }, [propPadding]);

//   const concurrentNavigableMapStyle = useMemo(() => {
//     return {
//       minWidth: propMinWidth1,
//     };
//   }, [propMinWidth1]);

//   return (
//     <div className={styles.selectNameParent} style={frameDiv1Style}>
//       <div className={styles.selectName}>
//         <span>{documentSpecificFor}</span>
//         <span className={styles.span}>*</span>
//         <span>{` `}</span>
//       </div>
//       <div className={styles.rectangleParent} style={groupDiv1Style}>
//         <div className={styles.frameChild} />
//         <input
//         className={styles.text1}
//         placeholder="Type Doc. Specific for"
//         type="text"
//         />
//         {/* <div className={styles.chevronDownWrapper}>
//           <img className={styles.chevronDownIcon} alt="" src={chevronDown} />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default FrameComponent1;


import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  documentSpecificFor,
  concurrentNavigableMap,
  chevronDown,
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
  propMinWidth1,
  copiedTexts,
  setCopiedTexts,
  inputValueDocspec,
  setInputValueDocspec,
  suggestions,
  setSuggestions,
  showSuggestionsDocspec,
  setShowSuggestionsDocspec,
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

  const handleInputChangeDocspec = (event) => {
    setInputValueDocspec(event.target.value);
    setShowSuggestionsDocspec(true); // Show suggestions when input value changes
  };
  
  const handleSuggestionClickDocspec = (suggestion) => {
    setInputValueDocspec(suggestion);
    setShowSuggestionsDocspec(false); // Close suggestions upon selecting a suggestion
  };

  return (
    <div className={styles.selectNameParent} style={frameDiv1Style}>
      <div className={styles.selectName}>
        <span>{documentSpecificFor}</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} />
        <input
        className={styles.text1}
        placeholder="Type Doc. Specific for"
        type="text"
        value={inputValueDocspec}
        onChange={handleInputChangeDocspec}
        onClick={() => setShowSuggestionsDocspec(true)}
        />
        {showSuggestionsDocspec && (
        <div className={styles.suggestionsContainer}>
        {suggestions.filter(suggestion => isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickDocspec(suggestion)} className={`${styles.suggestion} ${styles.text}`}>
        {suggestion}
      </div>
    ))}
    <div className={styles.divider}></div>
    {/* Render number suggestions */}
    {suggestions.filter(suggestion => !isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickDocspec(suggestion)} className={`${styles.suggestion} ${styles.number}`}>
        {suggestion}
      </div>
    ))}
  </div>
)}
      </div>
    </div>
  );
};

export default FrameComponent1;
