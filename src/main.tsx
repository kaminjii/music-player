import React, { useState, useEffect, useRef } from 'react';
import { allSongs, type SongVibe } from './songData';
import { Player } from './Player';
import { SongList } from './SongList';
import './App.css';

function App() {
  const [activeSong, setActiveSong] = useState<SongVibe>(allSongs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSongListOpen, setIsSongListOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Apply dynamic styles when the active song changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', activeSong.vibe.colors.background);
    root.style.setProperty('--gradient-start', activeSong.vibe.colors.gradientStart);
    root.style.setProperty('--gradient-end', activeSong.vibe.colors.gradientEnd);
    root.style.setProperty('--text-color', activeSong.vibe.colors.text);
    root.style.setProperty('--accent-color', activeSong.vibe.colors.accent);
    root.style.setProperty('--font-family', activeSong.vibe.fontFamily);

    // If there's an audio element, update its source
    if (audioRef.current) {
        audioRef.current.src = activeSong.audioUrl || '';
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        }
    }
  }, [activeSong, isPlaying]);
  
  // Manage audio play/pause state
  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(isNaN(progressPercent) ? 0 : progressPercent);
    }
  };

  const handleSongSelect = (song: SongVibe) => {
    setActiveSong(song);
    setIsPlaying(true);
    setIsSongListOpen(false);
  };
  
  const handleNextSong = () => {
    const currentIndex = allSongs.findIndex(s => s.id === activeSong.id);
    const nextIndex = (currentIndex + 1) % allSongs.length;
    setActiveSong(allSongs[nextIndex]);
    setIsPlaying(true);
  };
  
  const handlePrevSong = () => {
    const currentIndex = allSongs.findIndex(s => s.id === activeSong.id);
    const prevIndex = (currentIndex - 1 + allSongs.length) % allSongs.length;
    setActiveSong(allSongs[prevIndex]);
    setIsPlaying(true);
  };
  
  const handleProgressSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
        const progressBar = e.currentTarget;
        const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
        const newTime = (clickPosition / progressBar.offsetWidth) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="app-container">
      {/* Hidden audio element for playback */}
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextSong} // Auto-play next song
        src={activeSong.audioUrl}
      ></audio>

      <Player song={activeSong} isPlaying={isPlaying} />

      <div className="song-info">
        <h1 className="song-title">{activeSong.title}</h1>
        <h2 className="song-artist">{activeSong.artist}</h2>
      </div>

      <div className="controls-wrapper">
        <div className="progress-bar" onClick={handleProgressSeek}>
            <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="buttons-container">
            <button className="control-btn" onClick={handlePrevSong}>
                <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>
            </button>
            <button className="control-btn play-pause-btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 
                    <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg> : 
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                }
            </button>
            <button className="control-btn" onClick={handleNextSong}>
                 <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
            </button>
        </div>
      </div>
      
      <button className="playlist-toggle-btn" onClick={() => setIsSongListOpen(true)}>
        <svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
      </button>

      <SongList 
        isOpen={isSongListOpen}
        songs={allSongs}
        activeSongId={activeSong.id}
        onSongSelect={handleSongSelect}
        onClose={() => setIsSongListOpen(false)}
      />
    </div>
  );
}

export default App;
