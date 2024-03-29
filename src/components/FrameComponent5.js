// import { useMemo } from "react";
// import styles from "./FrameComponent5.module.css";

// const FrameComponent5 = ({
//   documentSpecificFor,
//   concurrentNavigableMap,
//   chevronDown,
//   propFlex,
//   propMinWidth,
//   propWidth,
//   propPadding,
//   propMinWidth1,
//   inputValueName,
//   setInputValueName,
//   suggestions,
//   setSuggestions,
//   showSuggestionsName,
//   setShowSuggestionsName,
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

//   const handleInputChangeDocument = (event) => {
//     setInputValueDocument(event.target.value);
//     setShowSuggestionsDocument(true); // Show suggestions when input value changes
//   };
  
//   const handleSuggestionClickDocument = (suggestion) => {
//     setInputValueDocument(suggestion);
//     setShowSuggestionsDocument(false); // Close suggestions upon selecting a suggestion
//   };


//   return (
//     <div className={styles.frameParent} style={frameDiv1Style}>
//       <div className={styles.selectNameWrapper}>
//         <div className={styles.selectName}>
//           <span>{`Document Code `}</span>
//           <span className={styles.span}>*</span>
//         </div>
//       </div>
//       <div className={styles.rectangleParent} style={groupDiv1Style}>
//         <div className={styles.frameChild} />
//         <input
//         className={styles.text1}
//         placeholder="Type Document Code"
//         type="text"
//         />
        
//       </div>
//     </div>
//   );
// };

// export default FrameComponent5;



// ***************************************************************************************************

import { useMemo } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
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
  inputValueDocument,
  setInputValueDocument,
  suggestions,
  setSuggestions,
  showSuggestionsDocument,
  setShowSuggestionsDocument,
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

  const handleInputChangeDocument = (event) => {
    setInputValueDocument(event.target.value);
    setShowSuggestionsDocument(true); // Show suggestions when input value changes
  };
  
  const handleSuggestionClickDocument = (suggestion) => {
    setInputValueDocument(suggestion);
    setShowSuggestionsDocument(false); // Close suggestions upon selecting a suggestion
  };


  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.selectNameWrapper}>
        <div className={styles.selectName}>
          <span>{`Document Code `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} />
        <input
        className={styles.text1}
        placeholder="Type Document Code"
        type="text"
        value={inputValueDocument}
        onChange={handleInputChangeDocument}
        onClick={() => setShowSuggestionsDocument(true)}
        />
        {showSuggestionsDocument && (
  <div className={styles.suggestionsContainer}>
  {suggestions.filter(suggestion => isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickDocument(suggestion)} className={`${styles.suggestion} ${styles.text}`}>
        {suggestion}
      </div>
    ))}
    <div className={styles.divider}></div>
    {/* Render number suggestions */}
    {suggestions.filter(suggestion => !isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickDocument(suggestion)} className={`${styles.suggestion} ${styles.number}`}>
        {suggestion}
      </div>
    ))}
  </div>
)}
        
      </div>
    </div>
  );
};

export default FrameComponent5;

