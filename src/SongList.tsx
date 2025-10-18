import React from 'react';
import type { SongVibe } from './songData';

interface SongListProps {
  isOpen: boolean;
  songs: SongVibe[];
  activeSongId: string;
  onSongSelect: (song: SongVibe) => void;
  onClose: () => void;
}

export function SongList({ isOpen, songs, activeSongId, onSongSelect, onClose }: SongListProps) {
  return (
    // The modal backdrop - controlled by a class for smooth animation
    <div className={`song-list-modal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="song-list-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="song-list-close-btn" onClick={onClose}>&times;</button>
        <h3 className="song-list-title">Choose a Vibe</h3>
        <ul>
          {songs.map((song) => {
            const isActive = song.id === activeSongId;
            return (
              <li key={song.id}>
                <button
                  className={`song-list-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSongSelect(song)}
                >
                  <img 
                    src={song.coverArtUrl} 
                    alt="" 
                    className="song-list-item-thumbnail"
                  />
                  <div className="song-list-item-details">
                    <span className="song-list-item-title">{song.title}</span>
                    <span className="song-list-item-artist">{song.artist}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
