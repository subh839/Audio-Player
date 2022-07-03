import {useState, useEffect} from 'react';
import Player from './components/Player';

function App(){
  const [songs]= useState([
    {
      title:"Song1",
      artist:"someone1",
      src:'./music/mu.mp3'
    },

    {
      title:"Song2",
      artist:"someone2",
      src:"./music/mu.mp3"
    },

    {
      title:"Song3",
      artist:"someone3",
      src:"./music/sound.mp3"
    }

  ]);


const [currentSongIndex,setCurrentSongIndex]=useState(0);
const [nextSongIndex,setNextSongIndex]= useState(0);

useEffect(()=>{
  setNextSongIndex(()=>{
if(currentSongIndex+1 > songs.length-1){
  return 0;
}else{
  return currentSongIndex+1;
}
  });
},[currentSongIndex]);

return(
<div className='App'>
  <Player
  currentSongIndex={currentSongIndex}
  setCurrentSongIndex={setCurrentSongIndex}
  nextSongIndex={nextSongIndex}
  songs={songs}
  />
</div>
);

}

export default App;