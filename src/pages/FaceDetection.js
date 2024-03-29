// import { useRef, useEffect, useState } from 'react';
// import styles from "./facedetection.module.css";
// import * as faceapi from 'face-api.js';

// function FaceDetection() {
//   const videoRef = useRef();
//   const canvasRef = useRef();
//   const [showCamera, setShowCamera] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [consentGiven, setConsentGiven] = useState(false);

//   useEffect(() => {
//     if (showCamera && consentGiven) {
//       startVideo();
//       loadModels();
//     }
//   }, [showCamera, consentGiven]);

//   useEffect(() => {
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [popupMessage]);

//   const startVideo = () => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then((currentStream) => {
//         videoRef.current.srcObject = currentStream;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const loadModels = async () => {
//     await Promise.all([
//       faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//       faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//       faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//       faceapi.nets.faceExpressionNet.loadFromUri('/models'),
//     ]);
//     faceMyDetect();
//   };

//   const faceMyDetect = () => {
//     setInterval(async () => {
//       const detections = await faceapi.detectAllFaces(videoRef.current,
//         new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

//       canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
//       faceapi.matchDimensions(canvasRef.current, {
//         width: 240,
//         height: 40,
//       });

//       const resized = faceapi.resizeResults(detections, {
//         width: 240,
//         height: 40,
//       });

//       // Process emotions and show motivational thoughts
//       processEmotions(resized);
//     }, 1000);
//   };

//   const processEmotions = (detections) => {
//     detections.forEach((detection) => {
//       const emotions = detection.expressions;
//       let dominantEmotion = 'neutral';
//       let maxConfidence = 0;
//       Object.entries(emotions).forEach(([emotion, confidence]) => {
//         if (confidence > maxConfidence) {
//           maxConfidence = confidence;
//           dominantEmotion = emotion;
//         }
//       });
//       // Show motivational thought based on dominant emotion
//       showMotivationalThought(dominantEmotion);
//     });
//   };

//   const showMotivationalThought = (emotion) => {
//     let message = '';
//     switch (emotion) {
//       case 'happy':
//         message = 'Stay positive and keep smiling!';
//         break;
//       case 'sad':
//         message = 'It’s okay to feel sad. Remember, tomorrow is a new day.';
//         break;
//       // Add more cases for other emotions as needed
//       default:
//         break;
//     }
//     if (message !== '') {
//       setPopupMessage(message);
//     }
//   };

//   const toggleCamera = () => {
//     setShowCamera(!showCamera);
//     if (!showCamera) {
//       setConsentGiven(false);
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupMessage('');
//   };

//   const handleOutsideClick = (e) => {
//     if (!e.target.closest(`.${styles.popup}`) && popupMessage) {
//       setPopupMessage('');
//     }
//   };

//   const grantConsent = () => {
//     setConsentGiven(true);
//   };

//   const denyConsent = () => {
//     setShowCamera(false);
//     setConsentGiven(false);
//   };

//   return (
//     <div className={styles.myapp} onClick={handleOutsideClick}>
//       <div className={styles.cameraIcon} onClick={toggleCamera}>
//         <img src="Camera.png" alt="Camera Icon" />
//       </div>
//       {showCamera && (
//         <div className={styles.appVideo}>
//           <video crossOrigin="anonymous" ref={videoRef} autoPlay style={{ display: 'none' }}></video>
//         </div>
//       )}
//       <canvas ref={canvasRef} width="240" height="40" className={styles.appCanvas} />
//       {popupMessage && (
//         <div className={styles.popup}>
//         <div>
//         <p className={styles.heading}>Credo 2</p>
//         </div>
//         <img src="pop-image.png" alt="Motivation Image" className={styles.image} />
//         <div className={styles.content}>
//       <p className={styles.message}>{popupMessage}</p>
//           </div>
          
//         </div>
//       )}
//       {!consentGiven && showCamera && (
//         <div className={styles.consentPopup}>
//           <p>Please grant access to your camera to proceed.</p>
//           <button onClick={grantConsent}>Grant Access</button>
//           <button onClick={denyConsent}>Deny Access</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FaceDetection;


import { useRef, useEffect, useState } from 'react';
import styles from "./facedetection.module.css";
import * as faceapi from 'face-api.js';

function FaceDetection() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [showCamera, setShowCamera] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (showCamera && consentGiven) {
      startVideo();
      loadModels();
    }
  }, [showCamera, consentGiven]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupMessage]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]);
    faceMyDetect();
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
      faceapi.matchDimensions(canvasRef.current, {
        width: 240,
        height: 40,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 240,
        height: 40,
      });

      // Process emotions and show motivational thoughts
      processEmotions(resized);
    }, 1000);
  };

  const processEmotions = (detections) => {
    detections.forEach((detection) => {
      const emotions = detection.expressions;
      let dominantEmotion = 'neutral';
      let maxConfidence = 0;
      Object.entries(emotions).forEach(([emotion, confidence]) => {
        if (confidence > maxConfidence) {
          maxConfidence = confidence;
          dominantEmotion = emotion;
        }
      });
      // Show motivational thought based on dominant emotion
      showMotivationalThought(dominantEmotion);
    });
  };

  const showMotivationalThought = (emotion) => {
    let message = '';
    switch (emotion) {
      case 'happy':
        message = 'Stay positive and keep smiling!';
        break;
      case 'sad':
        message = 'It’s okay to feel sad. Remember, tomorrow is a new day.';
        break;
      // Add more cases for other emotions as needed
      default:
        break;
    }
    if (message !== '') {
      setPopupMessage(message);
    }
  };

  const toggleCamera = () => {
    setShowCamera(!showCamera);
    if (!showCamera) {
      setConsentGiven(false);
    }
  };

  const handleClosePopup = () => {
    setPopupMessage('');
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(`.${styles.popup}`) && popupMessage) {
      setPopupMessage('');
    }
  };

  const grantConsent = () => {
    setConsentGiven(true);
  };

  const denyConsent = () => {
    setShowCamera(false);
    setConsentGiven(false);
  };

  return (
    <div className={styles.myapp} onClick={handleOutsideClick}>
      <div className={styles.cameraIcon} onClick={toggleCamera}>
      <img src={showCamera ? "CameraOn.png" : "CameraOff.png"} alt="Camera Icon" />
      </div>
      {showCamera && (
        <div className={styles.appVideo}>
          <video crossOrigin="anonymous" ref={videoRef} autoPlay style={{ display: 'none' }}></video>
        </div>
      )}
      <canvas ref={canvasRef} width="240" height="40" className={styles.appCanvas} />
      {popupMessage && (
        <div className={styles.popup}>
        <div>
        <p className={styles.heading}>Credo 2</p>
        </div>
        <img src="pop-image.png" alt="Motivation Image" className={styles.image} />
        <div className={styles.content}>
      <p className={styles.message}>{popupMessage}</p>
          </div>
          
        </div>
      )}
      {!consentGiven && showCamera && (
        <div className={styles.consentPopup}>
          <p>Please grant access to your camera to proceed.</p>
          <button onClick={grantConsent}>Grant Access</button>
          <button onClick={denyConsent}>Deny Access</button>
        </div>
      )}
    </div>
  );
}

export default FaceDetection;