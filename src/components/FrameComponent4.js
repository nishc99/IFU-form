// import { useMemo } from "react";
// import styles from "./FrameComponent4.module.css";

// const FrameComponent4 = ({
//   propFlex,
//   propMinWidth,
//   propWidth,
//   propPadding,
// }) => {
//   const frameDivStyle = useMemo(() => {
//     return {
//       flex: propFlex,
//       minWidth: propMinWidth,
//       width: propWidth,
//     };
//   }, [propFlex, propMinWidth, propWidth]);

//   const groupDivStyle = useMemo(() => {
//     return {
//       padding: propPadding,
//     };
//   }, [propPadding]);

//   return (
//     <div className={styles.frameParent} style={frameDivStyle}>
//       <div className={styles.selectNameWrapper}>
//         <div className={styles.selectName}>
//           <span>{`Name `}</span>
//           <span className={styles.span}>*</span>
//         </div>
//       </div>
//       <div className={styles.rectangleParent} style={groupDivStyle}>
//         <div className={styles.frameChild} />
//         <input
//                                 className={styles.text1}
//                                 placeholder="Name Required"
//                                 type="text"
//                               />
        
//       </div>
//     </div>
//   );
// };

// export default FrameComponent4;

// ************************************************************************************************

import React, { useState, useEffect } from 'react';
import { useMemo } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
  copiedTexts,
  setCopiedTexts,
  inputValueName,
  setInputValueName,
  suggestions,
  setSuggestions,
  showSuggestionsName,
  setShowSuggestionsName,
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

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   setShowSuggestions(true); // Show suggestions when input value changes
  // };

  // const handleSuggestionClick = (suggestion) => {
  //   setInputValue(suggestion);
  //   setShowSuggestions(false); // Close suggestions upon selecting a suggestion
  // };

  const handleInputChangeName = (event) => {
    setInputValueName(event.target.value);
    setShowSuggestionsName(true); // Show suggestions when input value changes
  };
  
  const handleSuggestionClickName = (suggestion) => {
    setInputValueName(suggestion);
    setShowSuggestionsName(false); // Close suggestions upon selecting a suggestion
  };


  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.selectNameWrapper}>
        <div className={styles.selectName}>
          <span>{`Name `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.frameChild} />
        <input
          className={styles.text1}
          type="text"
          value={inputValueName}
          onChange={handleInputChangeName}
          onClick={() => setShowSuggestionsName(true)}
          placeholder="Name Required"
        />
        {/* {showSuggestions && (
          <div className={styles.suggestionsContainer}>
            {suggestions.map((suggestion, index) => (
              <div key={index} onClick={() => handleSuggestionClick(suggestion)} className={styles.suggestion}>
                {suggestion}
              </div>
            ))}
          </div>
        )} */}
        {showSuggestionsName && (
  <div className={styles.suggestionsContainer}>
  {suggestions.filter(suggestion => isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickName(suggestion)} className={`${styles.suggestion} ${styles.text}`}>
        {suggestion}
      </div>
    ))}
    <div className={styles.divider}></div>
    {/* Render number suggestions */}
    {suggestions.filter(suggestion => !isNaN(suggestion)).map((suggestion, index) => (
      <div key={index} onClick={() => handleSuggestionClickName(suggestion)} className={`${styles.suggestion} ${styles.number}`}>
        {suggestion}
      </div>
    ))}
  </div>
)}
      </div>
    </div>
  );
};

export default FrameComponent4;



