import React from 'react';
import type { SongVibe } from './songData';

interface PlayerProps {
  song: SongVibe;
  isPlaying: boolean;
}

export function Player({ song, isPlaying }: PlayerProps) {
  const vinylStyle: React.CSSProperties = {
    // The album art is now part of a multi-layered background for realism
    backgroundImage: `
      url(${song.coverArtUrl}),
      repeating-radial-gradient(
        rgba(255, 255, 255, 0.02) 0%, 
        rgba(0, 0, 0, 0.1) 1px, 
        transparent 2px, 
        transparent 10px
      )
    `,
  };

  return (
    <div className="player-container">
      {/* IMPORTANT: These images MUST exist in your 'public/assets/' folder
        for the player to look correct.
      */}
      <img 
        src="/assets/turntable-base.png" 
        alt="Turntable Base" 
        className="turntable-base"
        // Add an error fallback for better user experience
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none'; // Hide broken image
            const parent = target.parentElement;
            if(parent) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'asset-error';
                errorMsg.textContent = "Error: turntable-base.png not found in public/assets/";
                parent.appendChild(errorMsg);
            }
        }}
      />
      
      <div 
        className={`turntable-vinyl ${isPlaying ? 'spinning' : ''}`}
        style={vinylStyle}
      >
        <div className="vinyl-label-hole"></div>
      </div>

      <img 
        src="/assets/turntable-arm.png" 
        alt="Turntable Arm" 
        className={`turntable-arm ${isPlaying ? 'playing' : ''}`}
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if(parent) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'asset-error';
                errorMsg.textContent = "Error: turntable-arm.png not found in public/assets/";
                parent.appendChild(errorMsg);
            }
        }}
      />
    </div>
  );
}
