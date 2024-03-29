// import React, { useState, useEffect, useRef } from 'react';
// import styles from "./MusicScreen.module.css";
// import axios from 'axios';
// import { MdOutlineShuffle,MdOutlineSkipPrevious,MdOutlineSkipNext } from "react-icons/md";
// import { CiPlay1,CiPause1 } from "react-icons/ci";
// import { ImLoop } from "react-icons/im";

// const MusicScreen = ({ category }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isLooping, setIsLooping] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const [sliderValue, setSliderValue] = useState(0);
//   const audioPlayer = useRef(null); // Ref for the audio element

//   useEffect(() => {
//     const fetchMusicData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/music');
//         // Update the URLs in the response data
//         const updatedSongs = response.data.map(song => ({
//           ...song,
//           url: `http://localhost:5000${song.url}` 
//         }));
//         setSongs(updatedSongs);
//       } catch (error) {
//         console.error('API Error:', error);
//       }
//     };

//     fetchMusicData();
//   }, []);

//   useEffect(() => {
//     if (songs.length > 0) {
//       audioPlayer.current = new Audio(songs[currentSongIndex].url);
//       const audio = audioPlayer.current;

//       const handleLoadedMetadata = () => {
//         setDuration(audio.duration);
//       };

//       const handleTimeUpdate = () => {
//         setCurrentTime(audio.currentTime);
//         setSliderValue(audio.currentTime);
//       };

//       const handleEnded = () => {
//         if (!isLooping) {
//           playNext();
//         }
//       };

//       audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.addEventListener('timeupdate', handleTimeUpdate);
//       audio.addEventListener('ended', handleEnded);

//       if (isPlaying) {
//         audio.play();
//       } else {
//         audio.pause();
//       }

//       return () => {
//         audio.pause();
//         audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//         audio.removeEventListener('timeupdate', handleTimeUpdate);
//         audio.removeEventListener('ended', handleEnded);
//       };
//     }
//   }, [currentSongIndex, isPlaying, isLooping, songs]);

//   const playPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const playNext = () => {
//     const nextIndex = (currentSongIndex + 1) % songs.length;
//     setCurrentSongIndex(nextIndex);
//     setIsPlaying(true); // Start playing the next song automatically
//   };

//   const playPrevious = () => {
//     const previousIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
//     setCurrentSongIndex(previousIndex);
//     setIsPlaying(true); // Start playing the previous song automatically
//   };

//   const toggleLoop = () => {
//     setIsLooping(!isLooping);
//   };

//   const handleSliderChange = (e) => {
//     const newValue = parseFloat(e.target.value);
//     setSliderValue(newValue);
//     setCurrentTime(newValue);
//     if (isPlaying) {
//       audioPlayer.current.currentTime = newValue;
//     }
//   };

//   const playMusic = (index) => {
//     setCurrentSongIndex(index);
//     setIsPlaying(true);
//   };

//   if (!songs[currentSongIndex]) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div className={styles.soothingGrpParent}>
//       <div className={styles.soothingGrp}>
//         <div className={styles.rectangleParent}>
//           <div className={styles.frameChild} />
//           <div className={styles.popularCats}>
//             <h3 className={styles.mostPopularCategories}>
//               Most Popular Categories
//             </h3>
//           </div>
//           <div className={styles.beastGrp}>
//             <div className={styles.soothingMetParent}>
//               <div className={styles.soothingMet}>
//                 <div className={styles.soothingMetChild} />
//                 <div className={styles.soothing}>#Soothing</div>
//               </div>
//               <div className={styles.soothingMet1}>
//                 <div className={styles.soothingMetItem} />
//                 <div className={styles.metallic}>#Metallic</div>
//               </div>
//               <div className={styles.soothingMet2}>
//                 <div className={styles.soothingMetInner} />
//                 <div className={styles.peace}>#Peace</div>
//               </div>
//             </div>
//             <div className={styles.beastOuting}>
//               <div className={styles.frameParent}>
//                 <div className={styles.rectangleGroup}>
//                   <div className={styles.frameItem} />
//                   <div className={styles.beast}>#Beast</div>
//                 </div>
//                 <div className={styles.rectangleContainer}>
//                   <div className={styles.frameInner} />
//                   <div className={styles.outing}>#Outing</div>
//                 </div>
//               </div>
//               <div className={styles.youRightGrpParent}>
//                 <div className={styles.youRightGrp}>
//                   <div className={styles.youRightGrpChild} />
//                   <div className={styles.relaxation}>#Relaxation</div>
//                 </div>
//                 <div className={styles.frameDiv}>
//                   <div className={styles.rectangleDiv} />
//                   <div className={styles.cutting}>#Cutting</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.frameGroup}>
//         <div className={styles.frameContainer}>
//           <div className={styles.frameParent1}>
//             <img
//               className={styles.groupIcon}
//               alt=""
//               src="/group-1000002891@2x.png"
//             />
//             <div className={styles.youRightParent}>
//               <h3 className={styles.youRight}>{songs[currentSongIndex][`title${currentSongIndex + 1}`]}</h3>
//               <div className={styles.dojaCatTheWeekndParent}>
//                 <div className={styles.dojaCatThe}>{songs[currentSongIndex][`artist${currentSongIndex + 1}`]}</div>
//                 {/* <div className={styles.mainElements}>
//                   <img
//                     className={styles.maskGroupIcon}
//                     alt=""
//                     src="/FavouriteMusic.png"
//                   />
//                 </div> */}
//               </div>
//               <div className={styles.mainElements}>
//                   <img
//                     className={styles.maskGroupIcon}
//                     alt=""
//                     src="/FavouriteMusic.png"
//                   />
//                 </div>
//             </div>
//             <div className={styles.frameWrapper}>
//   <div className={styles.frameParent2}>
//     <input
//       className={styles.frameChild1}
//       type="range"
//       min="0"
//       max={duration}
//       value={sliderValue}
//       onChange={handleSliderChange}
//     />
//     <div className={styles.frameWrapper1}>
//       <div className={styles.verticalSplitParent}>
//       <div className="verticalSplit" style={{zIndex:"1"}}>{formatTime(currentTime)}</div>
//         <div className="verticalSplit1" style={{zIndex:"1"}}>{formatTime(duration)}</div>

//       </div>
//     </div>
//   </div>
// </div>

//           </div>
//           <div className={styles.vectorParent}>
//             <img
//               className={styles.rectangleIcon}
//               alt=""
//               src="/rectangle-4463.svg"
//             />
//             <div className="control-box">
//         <button className={styles.shufflebutton} onClick={toggleLoop}>{isLooping ? <MdOutlineShuffle /> : <MdOutlineShuffle />}</button>
//         <button className={styles.previousbutton} onClick={playPrevious}><MdOutlineSkipPrevious /></button>
//         <button className={styles.playbutton} onClick={playPause}>{isPlaying ? <CiPause1 /> : <CiPlay1 />}</button>
//         <button className={styles.nextbutton} onClick={playNext}><MdOutlineSkipNext /></button>
//         <button className={styles.loopbutton} onClick={toggleLoop}>{isLooping ? <ImLoop style={{transform:"scaleX(-1)"}} /> : <ImLoop />}</button>
//       </div>
//           </div>
//         </div>
//         <div className={styles.favorites}>
//           <img
//             className={styles.favoritesChild}
//             alt=""
//             src="/rectangle-4464.svg"
//           />
//           <div className={styles.frameParent3}>
//             <div className={styles.yourFavoritesWrapper}>
//               <h2 className={styles.yourFavorites}>Your favorites</h2>
//             </div>
//             <img
//               className={styles.favoriteIcon}
//               loading="lazy"
//               alt=""
//               src="/favorite.svg"
//             />
//           </div>
//           <div className={styles.favoritesInner}>
//             <div className={styles.rectangleParent1}>
//               <img
//                 className={styles.frameChild3}
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-4465@2x.png"
//               />
//               {songs.map((song, index) => {
//               if (index === 0) {
//               return (
//               <div className={styles.youRightGroup} key={song.id} onClick={() => playMusic(index)}>
//               <h3 className={styles.youRight1}>{song.title1}</h3>
//               <div className={styles.dojaCatThe1}>{song.artist1}</div>
//               </div>
//              );
//           } else {
//             return null;
//             }
//           })}
//             </div>
//           </div>
//           <div className={styles.favoritesInner1}>
//             <div className={styles.rectangleParent2}>
//               <img
//                 className={styles.frameChild4}
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-4466@2x.png"
//               />
//               {songs.map((song, index) => {
//               if (index === 1) {
//               return (
//               <div className={styles.amParent} key={song.id} onClick={() => playMusic(index)}>
//                 <div className={styles.am}>{song.title2}</div>
//                 <div className={styles.arizonaZervas}>{song.artist2}</div>
//               </div>
//               );
//           } else {
//             return null; 
//             }
//           })}
//             </div>
//           </div>
//           <div className={styles.baddestLabel}>
//             <div className={styles.chainzCrown}>
//               <img
//                 className={styles.chainzCrownChild}
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-4467@2x.png"
//               />
//               {songs.map((song, index) => {
//               if (index === 2) {
//               return (
//               <div className={styles.austinEmblem} key={song.id} onClick={() => playMusic(index)}>
//                 <div className={styles.baddest}>{song.title3}</div>
//                 <div className={styles.chainzChrisBrown}>{song.artist3}</div>
//               </div>
//               );
//           } else {
//             return null;
//             }
//           })}
//             </div>
//           </div>
//           <div className={styles.favoritesInner2}>
//             <div className={styles.rectangleParent3}>
//               <img
//                 className={styles.frameChild5}
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-4468@2x.png"
//               />
//               {songs.map((song, index) => {
//               if (index === 3) {
//               return (
//               <div className={styles.handsOnYouParent} key={song.id} onClick={() => playMusic(index)}>
//                 <div className={styles.handsOnYou}>{song.title4}</div>
//                 <div className={styles.austinGeorge}>{song.artist4}</div>
//               </div>
//               );
//           } else {
//             return null;
//             }
//           })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const formatTime = (timeInSeconds) => {
//   const minutes = Math.floor(timeInSeconds / 60);
//   const seconds = Math.floor(timeInSeconds % 60);
//   return `${minutes}:${seconds.toString().padStart(2, '0')}`; // Adjusted format
// };

// export default MusicScreen;




import React, { useState, useEffect, useRef } from 'react';
import styles from "./MusicScreen.module.css";
import axios from 'axios';
import { MdOutlineShuffle,MdOutlineSkipPrevious,MdOutlineSkipNext } from "react-icons/md";
import { CiPlay1,CiPause1 } from "react-icons/ci";
import { ImLoop } from "react-icons/im";

const MusicScreen = ({ category }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [songs, setSongs] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const audioPlayer = useRef(null); // Ref for the audio element

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        let response;
        if (isShuffle) {
          response = await axios.get('http://localhost:5000/music/shuffle');
        } else {
          response = await axios.get('http://localhost:5000/music');
        }
        const updatedSongs = response.data.map(song => ({
          ...song,
          url: `http://localhost:5000${song.url}` 
        }));
        setSongs(updatedSongs);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchMusicData();
  }, [isShuffle]);

  useEffect(() => {
    if (songs.length > 0) {
      audioPlayer.current = new Audio(songs[currentSongIndex].url);
      const audio = audioPlayer.current;

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        setSliderValue(audio.currentTime);
      };

      const handleEnded = () => {
        if (!isLooping) {
          playNext();
        }
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.pause();
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSongIndex, isPlaying, isLooping, isShuffle, songs]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = isShuffle ? getRandomIndex() : (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Start playing the next song automatically
  };


  const playPrevious = () => {
    const previousIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(previousIndex);
    setIsPlaying(true); // Start playing the previous song automatically
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleSliderChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setSliderValue(newValue);
    setCurrentTime(newValue);
    if (isPlaying) {
      audioPlayer.current.currentTime = newValue;
    }
  };

  const playMusic = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * songs.length);
  };

  if (!songs[currentSongIndex]) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className={styles.soothingGrpParent}>
      <div className={styles.soothingGrp}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.popularCats}>
            <h3 className={styles.mostPopularCategories}>
              Most Popular Categories
            </h3>
          </div>
          <div className={styles.beastGrp}>
            <div className={styles.soothingMetParent}>
              <div className={styles.soothingMet}>
                <div className={styles.soothingMetChild} />
                <div className={styles.soothing}>#Soothing</div>
              </div>
              <div className={styles.soothingMet1}>
                <div className={styles.soothingMetItem} />
                <div className={styles.metallic}>#Metallic</div>
              </div>
              <div className={styles.soothingMet2}>
                <div className={styles.soothingMetInner} />
                <div className={styles.peace}>#Peace</div>
              </div>
            </div>
            <div className={styles.beastOuting}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.beast}>#Beast</div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.outing}>#Outing</div>
                </div>
              </div>
              <div className={styles.youRightGrpParent}>
                <div className={styles.youRightGrp}>
                  <div className={styles.youRightGrpChild} />
                  <div className={styles.relaxation}>#Relaxation</div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.cutting}>#Cutting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-1000002891@2x.png"
            />
            <div className={styles.youRightParent}>
              <h3 className={styles.youRight}>{songs[currentSongIndex][`title${currentSongIndex + 1}`]}</h3>
              <div className={styles.dojaCatTheWeekndParent}>
                <div className={styles.dojaCatThe}>{songs[currentSongIndex][`artist${currentSongIndex + 1}`]}</div>
                {/* <div className={styles.mainElements}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/FavouriteMusic.png"
                  />
                </div> */}
              </div>
              <div className={styles.mainElements}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/FavouriteMusic.png"
                  />
                </div>
            </div>
            <div className={styles.frameWrapper}>
  <div className={styles.frameParent2}>
    <input
      className={styles.frameChild1}
      type="range"
      min="0"
      max={duration}
      value={sliderValue}
      onChange={handleSliderChange}
    />
    <div className={styles.frameWrapper1}>
      <div className={styles.verticalSplitParent}>
      <div className="verticalSplit" style={{zIndex:"1"}}>{formatTime(currentTime)}</div>
        <div className="verticalSplit1" style={{zIndex:"1"}}>{formatTime(duration)}</div>

      </div>
    </div>
  </div>
</div>

          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-4463.svg"
            />
            <div className="control-box">
        <button className={styles.shufflebutton} onClick={toggleShuffle}>{isShuffle ? <MdOutlineShuffle style={{transform:"scaleX(-1)"}}/> : <MdOutlineShuffle />}</button>
        <button className={styles.previousbutton} onClick={playPrevious}><MdOutlineSkipPrevious /></button>
        <button className={styles.playbutton} onClick={playPause}>{isPlaying ? <CiPause1 /> : <CiPlay1 />}</button>
        <button className={styles.nextbutton} onClick={playNext}><MdOutlineSkipNext /></button>
        <button className={styles.loopbutton} onClick={toggleLoop}>{isLooping ? <ImLoop style={{transform:"scaleX(-1)"}} /> : <ImLoop />}</button>
      </div>
          </div>
        </div>
        <div className={styles.favorites}>
          <img
            className={styles.favoritesChild}
            alt=""
            src="/rectangle-4464.svg"
          />
          <div className={styles.frameParent3}>
            <div className={styles.yourFavoritesWrapper}>
              <h2 className={styles.yourFavorites}>Your favorites</h2>
            </div>
            <img
              className={styles.favoriteIcon}
              loading="lazy"
              alt=""
              src="/favorite.svg"
            />
          </div>
          <div className={styles.favoritesInner}>
            <div className={styles.rectangleParent1}>
              <img
                className={styles.frameChild3}
                loading="lazy"
                alt=""
                src="/rectangle-4465@2x.png"
              />
              {songs.map((song, index) => {
              if (index === 0) {
              return (
              <div className={styles.youRightGroup} key={song.id} onClick={() => playMusic(index)}>
              <h3 className={styles.youRight1}>{song.title1}</h3>
              <div className={styles.dojaCatThe1}>{song.artist1}</div>
              </div>
             );
          } else {
            return null;
            }
          })}
            </div>
          </div>
          <div className={styles.favoritesInner1}>
            <div className={styles.rectangleParent2}>
              <img
                className={styles.frameChild4}
                loading="lazy"
                alt=""
                src="/rectangle-4466@2x.png"
              />
              {songs.map((song, index) => {
              if (index === 1) {
              return (
              <div className={styles.amParent} key={song.id} onClick={() => playMusic(index)}>
                <div className={styles.am}>{song.title2}</div>
                <div className={styles.arizonaZervas}>{song.artist2}</div>
              </div>
              );
          } else {
            return null; 
            }
          })}
            </div>
          </div>
          <div className={styles.baddestLabel}>
            <div className={styles.chainzCrown}>
              <img
                className={styles.chainzCrownChild}
                loading="lazy"
                alt=""
                src="/rectangle-4467@2x.png"
              />
              {songs.map((song, index) => {
              if (index === 2) {
              return (
              <div className={styles.austinEmblem} key={song.id} onClick={() => playMusic(index)}>
                <div className={styles.baddest}>{song.title3}</div>
                <div className={styles.chainzChrisBrown}>{song.artist3}</div>
              </div>
              );
          } else {
            return null;
            }
          })}
            </div>
          </div>
          <div className={styles.favoritesInner2}>
            <div className={styles.rectangleParent3}>
              <img
                className={styles.frameChild5}
                loading="lazy"
                alt=""
                src="/rectangle-4468@2x.png"
              />
              {songs.map((song, index) => {
              if (index === 3) {
              return (
              <div className={styles.handsOnYouParent} key={song.id} onClick={() => playMusic(index)}>
                <div className={styles.handsOnYou}>{song.title4}</div>
                <div className={styles.austinGeorge}>{song.artist4}</div>
              </div>
              );
          } else {
            return null;
            }
          })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`; // Adjusted format
};

export default MusicScreen;

