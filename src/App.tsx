// src/App.tsx

import { useState } from 'react';
import { allSongs, type SongVibe } from './songData';
import { Player } from './Player';
import { SongList } from './SongList';
import './App.css'; // We'll create this file next

function App() {
  // 1. Hold the currently active song in state. Default to the first song.
  const [activeSong, setActiveSong] = useState<SongVibe>(allSongs[0]);

  // 2. This function is the "magic." We use it to set CSS Custom Properties (variables)
  //    that our whole app can use.
  const appStyle = {
    '--bg-color': activeSong.colors.background,
    '--text-color': activeSong.colors.text,
    '--accent-color': activeSong.colors.accent,
  } as React.CSSProperties; // Cast to CSSProperties to make TypeScript happy

  return (
    // 3. Apply the style to the main container
    <div className="app-container" style={appStyle}>
      <main className="vibe-player-wrapper">
        <Player song={activeSong} />
        <SongList
          songs={allSongs}
          activeSongId={activeSong.id}
          onSongSelect={setActiveSong} // Pass the 'setter' function as a prop
        />
      </main>
    </div>
  );
}

export default App;