import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, List, Volume2, Heart, Shuffle, Repeat } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverUrl: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    backgroundGradient: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    vinyl: string;
    fontFamily: string;
    mood: 'dreamy' | 'energetic' | 'melancholic' | 'romantic' | 'ethereal' | 'vibrant' | 'dark' | 'soft';
  };
}

const songs: Song[] = [
  {
    id: '1',
    title: 'Saw You in a Dream',
    artist: 'The Japanese House',
    duration: '3:42',
    coverUrl: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&h=500&fit=crop',
    theme: {
      primary: '#6B5B95',
      secondary: '#88B0D3',
      background: '#1a1625',
      backgroundGradient: 'linear-gradient(135deg, #1a1625 0%, #2d2640 50%, #3d3856 100%)',
      textPrimary: '#E8D5E7',
      textSecondary: '#B8A9C9',
      accent: '#9B89B3',
      vinyl: 'linear-gradient(135deg, #2a2435 0%, #4a3f5c 50%, #3a3248 100%)',
      fontFamily: "'Playfair Display', serif",
      mood: 'dreamy'
    }
  },
  {
    id: '2',
    title: 'Ladida',
    artist: 'Lemon Stella',
    duration: '3:28',
    coverUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=500&fit=crop',
    theme: {
      primary: '#FFD662',
      secondary: '#FF6B6B',
      background: '#FFF5E1',
      backgroundGradient: 'linear-gradient(135deg, #FFF5E1 0%, #FFE4B5 50%, #FFDAB9 100%)',
      textPrimary: '#2C3E50',
      textSecondary: '#7F8C8D',
      accent: '#FF8E53',
      vinyl: 'linear-gradient(135deg, #FFE4B5 0%, #FFCC80 50%, #FFB74D 100%)',
      fontFamily: "'Quicksand', sans-serif",
      mood: 'energetic'
    }
  },
  {
    id: '3',
    title: 'Blue Valentine',
    artist: 'NMIXX',
    duration: '3:15',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&h=500&fit=crop',
    theme: {
      primary: '#4A90E2',
      secondary: '#E91E63',
      background: '#0A0E27',
      backgroundGradient: 'linear-gradient(135deg, #0A0E27 0%, #1a2342 50%, #2a3456 100%)',
      textPrimary: '#FFFFFF',
      textSecondary: '#87CEEB',
      accent: '#FF69B4',
      vinyl: 'linear-gradient(135deg, #1a2342 0%, #2a3456 50%, #3a4566 100%)',
      fontFamily: "'Orbitron', sans-serif",
      mood: 'vibrant'
    }
  },
  {
    id: '4',
    title: 'Odoriko',
    artist: 'Vaundy',
    duration: '3:33',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    theme: {
      primary: '#DC143C',
      secondary: '#FF1493',
      background: '#1a0a0a',
      backgroundGradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #401010 100%)',
      textPrimary: '#FFCCCB',
      textSecondary: '#FF6B6B',
      accent: '#FF0040',
      vinyl: 'linear-gradient(135deg, #2d1515 0%, #401010 50%, #551515 100%)',
      fontFamily: "'Noto Serif JP', serif",
      mood: 'dark'
    }
  },
  {
    id: '5',
    title: 'Night Dancer',
    artist: 'imase',
    duration: '3:26',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    theme: {
      primary: '#9400D3',
      secondary: '#FF00FF',
      background: '#0F0F1E',
      backgroundGradient: 'linear-gradient(135deg, #0F0F1E 0%, #1a1a3e 50%, #2d2d5e 100%)',
      textPrimary: '#E6E6FA',
      textSecondary: '#DDA0DD',
      accent: '#FF00FF',
      vinyl: 'linear-gradient(135deg, #1a1a3e 0%, #2d2d5e 50%, #40407e 100%)',
      fontFamily: "'Bebas Neue', cursive",
      mood: 'energetic'
    }
  },
  {
    id: '6',
    title: 'Hikarunara',
    artist: 'Goose house',
    duration: '4:18',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    theme: {
      primary: '#87CEEB',
      secondary: '#FFE4B5',
      background: '#F0F8FF',
      backgroundGradient: 'linear-gradient(135deg, #F0F8FF 0%, #E6F2FF 50%, #D4E8FF 100%)',
      textPrimary: '#2C3E50',
      textSecondary: '#5D6D7E',
      accent: '#4FC3F7',
      vinyl: 'linear-gradient(135deg, #E6F2FF 0%, #D4E8FF 50%, #C2DFFF 100%)',
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
      mood: 'soft'
    }
  },
  {
    id: '7',
    title: 'Lovin Me',
    artist: 'FIFTY FIFTY',
    duration: '2:48',
    coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=500&h=500&fit=crop',
    theme: {
      primary: '#FFB6C1',
      secondary: '#FFC0CB',
      background: '#FFF0F5',
      backgroundGradient: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 50%, #FFD4DB 100%)',
      textPrimary: '#8B4565',
      textSecondary: '#CD5C8A',
      accent: '#FF69B4',
      vinyl: 'linear-gradient(135deg, #FFE4E1 0%, #FFD4DB 50%, #FFC4D1 100%)',
      fontFamily: "'Pacifico', cursive",
      mood: 'romantic'
    }
  },
  {
    id: '8',
    title: 'Ditto',
    artist: 'NewJeans',
    duration: '3:05',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    theme: {
      primary: '#98D8C8',
      secondary: '#F7DC6F',
      background: '#FAFAFA',
      backgroundGradient: 'linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 50%, #E8E8E8 100%)',
      textPrimary: '#2C3E50',
      textSecondary: '#7F8C8D',
      accent: '#7FCDCD',
      vinyl: 'linear-gradient(135deg, #F0F0F0 0%, #E8E8E8 50%, #E0E0E0 100%)',
      fontFamily: "'Jua', sans-serif",
      mood: 'soft'
    }
  },
  {
    id: '9',
    title: 'Echo',
    artist: 'Ablume',
    duration: '3:52',
    coverUrl: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=500&h=500&fit=crop',
    theme: {
      primary: '#4A5568',
      secondary: '#718096',
      background: '#1A202C',
      backgroundGradient: 'linear-gradient(135deg, #1A202C 0%, #2D3748 50%, #4A5568 100%)',
      textPrimary: '#E2E8F0',
      textSecondary: '#A0AEC0',
      accent: '#9F7AEA',
      vinyl: 'linear-gradient(135deg, #2D3748 0%, #4A5568 50%, #5D6678 100%)',
      fontFamily: "'Space Mono', monospace",
      mood: 'melancholic'
    }
  },
  {
    id: '10',
    title: 'Supernova Love',
    artist: 'IVE',
    duration: '3:21',
    coverUrl: 'https://images.unsplash.com/photo-1544099891-e3b97691b969?w=500&h=500&fit=crop',
    theme: {
      primary: '#FF006E',
      secondary: '#8338EC',
      background: '#06060F',
      backgroundGradient: 'linear-gradient(135deg, #06060F 0%, #1a0a2e 50%, #2e0a4f 100%)',
      textPrimary: '#FFFFFF',
      textSecondary: '#FB5607',
      accent: '#FFBE0B',
      vinyl: 'linear-gradient(135deg, #1a0a2e 0%, #2e0a4f 50%, #420a6f 100%)',
      fontFamily: "'Exo 2', sans-serif",
      mood: 'vibrant'
    }
  },
  {
    id: '11',
    title: '0%',
    artist: 'BOBAE',
    duration: '3:08',
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&h=500&fit=crop',
    theme: {
      primary: '#00BFA6',
      secondary: '#64FFDA',
      background: '#0A192F',
      backgroundGradient: 'linear-gradient(135deg, #0A192F 0%, #112240 50%, #1a2c4a 100%)',
      textPrimary: '#CCD6F6',
      textSecondary: '#8892B0',
      accent: '#64FFDA',
      vinyl: 'linear-gradient(135deg, #112240 0%, #1a2c4a 50%, #22365a 100%)',
      fontFamily: "'IBM Plex Sans KR', sans-serif",
      mood: 'ethereal'
    }
  },
  {
    id: '12',
    title: 'Sofia',
    artist: 'Clairo',
    duration: '3:18',
    coverUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500&h=500&fit=crop',
    theme: {
      primary: '#D4A574',
      secondary: '#C19A6B',
      background: '#F5F5DC',
      backgroundGradient: 'linear-gradient(135deg, #F5F5DC 0%, #EEE8D5 50%, #DDD5C5 100%)',
      textPrimary: '#4A4035',
      textSecondary: '#6B5D4F',
      accent: '#CD853F',
      vinyl: 'linear-gradient(135deg, #EEE8D5 0%, #DDD5C5 50%, #CCC5B5 100%)',
      fontFamily: "'Cormorant Garamond', serif",
      mood: 'soft'
    }
  },
  {
    id: '13',
    title: 'Washing Machine',
    artist: 'Vanishing Girl',
    duration: '4:02',
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
    theme: {
      primary: '#708090',
      secondary: '#B0C4DE',
      background: '#2F4F4F',
      backgroundGradient: 'linear-gradient(135deg, #2F4F4F 0%, #3a5a5a 50%, #456565 100%)',
      textPrimary: '#F0F8FF',
      textSecondary: '#B0C4DE',
      accent: '#87CEEB',
      vinyl: 'linear-gradient(135deg, #3a5a5a 0%, #456565 50%, #507070 100%)',
      fontFamily: "'Courier New', monospace",
      mood: 'melancholic'
    }
  },
  {
    id: '14',
    title: 'One of Your Girls',
    artist: 'Troye Sivan',
    duration: '3:48',
    coverUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=500&h=500&fit=crop',
    theme: {
      primary: '#E91E63',
      secondary: '#F06292',
      background: '#3E2723',
      backgroundGradient: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #5D4037 100%)',
      textPrimary: '#FCE4EC',
      textSecondary: '#F8BBD0',
      accent: '#FF4081',
      vinyl: 'linear-gradient(135deg, #4E342E 0%, #5D4037 50%, #6D4C41 100%)',
      fontFamily: "'Raleway', sans-serif",
      mood: 'romantic'
    }
  },
  {
    id: '15',
    title: '3AM',
    artist: 'ROSÉ',
    duration: '3:36',
    coverUrl: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=500&h=500&fit=crop',
    theme: {
      primary: '#B71C1C',
      secondary: '#E57373',
      background: '#1A0000',
      backgroundGradient: 'linear-gradient(135deg, #1A0000 0%, #2d0a0a 50%, #401414 100%)',
      textPrimary: '#FFCDD2',
      textSecondary: '#EF9A9A',
      accent: '#FF5252',
      vinyl: 'linear-gradient(135deg, #2d0a0a 0%, #401414 50%, #531e1e 100%)',
      fontFamily: "'Crimson Text', serif",
      mood: 'dark'
    }
  },
  {
    id: '16',
    title: 'Love Hangover',
    artist: 'JENNIE',
    duration: '3:29',
    coverUrl: 'https://images.unsplash.com/photo-1524512498473-13d2b6fc5857?w=500&h=500&fit=crop',
    theme: {
      primary: '#AD1457',
      secondary: '#F48FB1',
      background: '#1C0D15',
      backgroundGradient: 'linear-gradient(135deg, #1C0D15 0%, #2e1525 50%, #401f35 100%)',
      textPrimary: '#FCE4EC',
      textSecondary: '#F8BBD0',
      accent: '#FF80AB',
      vinyl: 'linear-gradient(135deg, #2e1525 0%, #401f35 50%, #522945 100%)',
      fontFamily: "'Bodoni Moda', serif",
      mood: 'romantic'
    }
  },
  {
    id: '17',
    title: 'Bloom',
    artist: 'DABIN',
    duration: '3:44',
    coverUrl: 'https://images.unsplash.com/photo-1542887486-62b8c3da7b51?w=500&h=500&fit=crop',
    theme: {
      primary: '#7C4DFF',
      secondary: '#B388FF',
      background: '#0D0D1F',
      backgroundGradient: 'linear-gradient(135deg, #0D0D1F 0%, #1a1a3e 50%, #27275c 100%)',
      textPrimary: '#EDE7F6',
      textSecondary: '#D1C4E9',
      accent: '#9575CD',
      vinyl: 'linear-gradient(135deg, #1a1a3e 0%, #27275c 50%, #34347a 100%)',
      fontFamily: "'Montserrat', sans-serif",
      mood: 'ethereal'
    }
  }
];

const VinylMusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 150);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.style.setProperty('--font-family', currentSong.theme.fontFamily);
  }, [currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }
    setProgress(0);
    setIsLiked(false);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setProgress(0);
    setIsLiked(false);
  };

  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setProgress(0);
    setShowPlaylist(false);
    setIsLiked(false);
  };

  const formatTime = (progress: number) => {
    const [minutes, seconds] = currentSong.duration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    const currentSeconds = Math.floor((progress / 100) * totalSeconds);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="player-container" 
      style={{
        background: currentSong.theme.backgroundGradient,
        fontFamily: currentSong.theme.fontFamily,
        color: currentSong.theme.textPrimary,
        transition: 'all 1s ease'
      }}
    >
      {/* Background Animation */}
      <div className="background-animation">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="bg-particle"
            style={{
              background: currentSong.theme.accent,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Vinyl Record */}
        <div className="vinyl-container">
          <div className={`vinyl-record ${isPlaying ? 'spinning' : ''}`} style={{
            background: currentSong.theme.vinyl,
            boxShadow: `0 0 40px ${currentSong.theme.primary}33`
          }}>
            <div className="vinyl-grooves">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="groove" 
                  style={{ 
                    borderColor: `${currentSong.theme.textPrimary}15`,
                    width: `${100 - i * 10}%`,
                    height: `${100 - i * 10}%`
                  }}
                />
              ))}
            </div>
            <div className="vinyl-center">
              <img 
                src={currentSong.coverUrl} 
                alt={currentSong.title}
                className="album-art"
              />
              <div className="center-hole" style={{ 
                background: currentSong.theme.background 
              }} />
            </div>
          </div>
          <div className="tonearm" style={{
            transform: isPlaying ? 'rotate(20deg)' : 'rotate(0deg)'
          }}>
            <div className="tonearm-base" style={{ 
              background: currentSong.theme.textSecondary 
            }} />
            <div className="tonearm-arm" style={{ 
              background: `linear-gradient(90deg, ${currentSong.theme.textSecondary}, ${currentSong.theme.textPrimary})` 
            }} />
            <div className="needle" style={{ 
              background: currentSong.theme.accent 
            }} />
          </div>
        </div>

        {/* Song Info */}
        <div className="song-info">
          <h1 className="song-title" style={{ 
            color: currentSong.theme.textPrimary 
          }}>{currentSong.title}</h1>
          <p className="song-artist" style={{ 
            color: currentSong.theme.textSecondary 
          }}>{currentSong.artist}</p>
          
          {/* Mood Indicator */}
          <div className="mood-indicator" style={{
            background: `${currentSong.theme.accent}20`,
            borderColor: currentSong.theme.accent
          }}>
            {currentSong.theme.mood}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <span className="time-label">{formatTime(progress)}</span>
          <div className="progress-bar" style={{ 
            background: `${currentSong.theme.textSecondary}30` 
          }}>
            <div 
              className="progress-fill" 
              style={{ 
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${currentSong.theme.primary}, ${currentSong.theme.secondary})`
              }}
            />
          </div>
          <span className="time-label">{currentSong.duration}</span>
        </div>

        {/* Controls */}
        <div className="controls">
          <button 
            className={`control-btn ${isShuffled ? 'active' : ''}`}
            onClick={() => setIsShuffled(!isShuffled)}
            style={{ color: isShuffled ? currentSong.theme.accent : currentSong.theme.textSecondary }}
          >
            <Shuffle size={20} />
          </button>
          
          <button 
            className="control-btn" 
            onClick={handlePrevious}
            style={{ color: currentSong.theme.textPrimary }}
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            className="play-btn" 
            onClick={handlePlayPause}
            style={{ 
              background: `linear-gradient(135deg, ${currentSong.theme.primary}, ${currentSong.theme.secondary})`,
              boxShadow: `0 4px 20px ${currentSong.theme.primary}50`
            }}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '3px' }} />}
          </button>
          
          <button 
            className="control-btn" 
            onClick={handleNext}
            style={{ color: currentSong.theme.textPrimary }}
          >
            <SkipForward size={24} />
          </button>
          
          <button 
            className={`control-btn ${isRepeating ? 'active' : ''}`}
            onClick={() => setIsRepeating(!isRepeating)}
            style={{ color: isRepeating ? currentSong.theme.accent : currentSong.theme.textSecondary }}
          >
            <Repeat size={20} />
          </button>
        </div>

        {/* Extra Controls */}
        <div className="extra-controls">
          <button 
            className={`icon-btn ${isLiked ? 'active' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
            style={{ color: isLiked ? '#FF006E' : currentSong.theme.textSecondary }}
          >
            <Heart size={20} fill={isLiked ? '#FF006E' : 'none'} />
          </button>
          
          <div className="volume-control">
            <Volume2 size={20} style={{ color: currentSong.theme.textSecondary }} />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-slider"
              style={{
                background: `linear-gradient(to right, ${currentSong.theme.primary} 0%, ${currentSong.theme.primary} ${volume}%, ${currentSong.theme.textSecondary}30 ${volume}%, ${currentSong.theme.textSecondary}30 100%)`
              }}
            />
          </div>
          
          <button 
            className="icon-btn"
            onClick={() => setShowPlaylist(!showPlaylist)}
            style={{ color: currentSong.theme.textPrimary }}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <div className={`playlist-sidebar ${showPlaylist ? 'show' : ''}`} style={{
        background: `${currentSong.theme.background}F0`,
        backdropFilter: 'blur(20px)'
      }}>
        <div className="playlist-header">
          <h2 style={{ color: currentSong.theme.textPrimary }}>Playlist</h2>
          <button 
            onClick={() => setShowPlaylist(false)}
            style={{ color: currentSong.theme.textSecondary }}
          >
            ✕
          </button>
        </div>
        <div className="playlist-items">
          {songs.map((song, index) => (
            <div 
              key={song.id}
              className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
              onClick={() => handleSongSelect(index)}
              style={{
                background: index === currentSongIndex ? `${currentSong.theme.primary}20` : 'transparent',
                borderColor: index === currentSongIndex ? currentSong.theme.primary : 'transparent'
              }}
            >
              <img src={song.coverUrl} alt={song.title} className="playlist-cover" />
              <div className="playlist-info">
                <div className="playlist-title" style={{ 
                  color: index === currentSongIndex ? currentSong.theme.textPrimary : currentSong.theme.textSecondary 
                }}>
                  {song.title}
                </div>
                <div className="playlist-artist" style={{ 
                  color: `${currentSong.theme.textSecondary}80` 
                }}>
                  {song.artist}
                </div>
              </div>
              <span className="playlist-duration" style={{ 
                color: `${currentSong.theme.textSecondary}60` 
              }}>
                {song.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@300;400;600&family=Courier+New&family=Crimson+Text:wght@400;600&family=Exo+2:wght@300;400;600&family=IBM+Plex+Sans+KR:wght@300;400;500&family=Jua&family=M+PLUS+Rounded+1c:wght@300;400;500&family=Montserrat:wght@300;400;600&family=Noto+Serif+JP:wght@300;400;600&family=Orbitron:wght@400;600;700&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&family=Raleway:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
        }

        .player-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        .bg-particle:nth-child(1) { width: 300px; height: 300px; top: -150px; left: -150px; }
        .bg-particle:nth-child(2) { width: 200px; height: 200px; bottom: -100px; right: -100px; }
        .bg-particle:nth-child(3) { width: 150px; height: 150px; top: 50%; left: -75px; }
        .bg-particle:nth-child(4) { width: 250px; height: 250px; bottom: -125px; left: 30%; }
        .bg-particle:nth-child(5) { width: 180px; height: 180px; top: -90px; right: 20%; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .main-content {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          max-width: 500px;
          width: 90%;
          position: relative;
          z-index: 1;
        }

        .vinyl-container {
          position: relative;
          width: 280px;
          height: 280px;
          margin: 0 auto 30px;
        }

        .vinyl-record {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation-timing-function: linear;
        }

        .vinyl-record.spinning {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vinyl-grooves {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .groove {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
        }

        .vinyl-center {
          width: 140px;
          height: 140px;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
        }

        .album-art {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .center-hole {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .tonearm {
          position: absolute;
          top: 30px;
          right: -20px;
          width: 150px;
          height: 200px;
          transform-origin: top right;
          transition: transform 0.5s ease;
          z-index: 3;
        }

        .tonearm-base {
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .tonearm-arm {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 120px;
          height: 3px;
          transform: rotate(35deg);
          transform-origin: right center;
        }

        .needle {
          position: absolute;
          bottom: 70px;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
        }

        .song-info {
          text-align: center;
          margin-bottom: 25px;
        }

        .song-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .song-artist {
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 12px;
        }

        .mood-indicator {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid;
        }

        .progress-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .time-label {
          font-size: 12px;
          font-weight: 500;
          min-width: 35px;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.1s linear;
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .control-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          transition: all 0.2s ease;
          opacity: 0.8;
        }

        .control-btn:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .control-btn.active {
          opacity: 1;
        }

        .play-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        .play-btn:active {
          transform: scale(0.95);
        }

        .extra-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          transition: all 0.2s ease;
        }

        .icon-btn:hover {
          transform: scale(1.1);
        }

        .icon-btn.active {
          animation: pulse 0.5s ease;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          max-width: 150px;
          margin: 0 20px;
        }

        .volume-slider {
          flex: 1;
          height: 4px;
          -webkit-appearance: none;
          appearance: none;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .playlist-sidebar {
          position: fixed;
          top: 0;
          right: -400px;
          width: 400px;
          height: 100vh;
          padding: 20px;
          overflow-y: auto;
          transition: right 0.3s ease;
          z-index: 10;
        }

        .playlist-sidebar.show {
          right: 0;
        }

        .playlist-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .playlist-header h2 {
          font-size: 24px;
          font-weight: 600;
        }

        .playlist-header button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
          transition: opacity 0.2s ease;
        }

        .playlist-header button:hover {
          opacity: 0.7;
        }

        .playlist-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }

        .playlist-item:hover {
          background: rgba(255,255,255,0.05);
        }

        .playlist-cover {
          width: 45px;
          height: 45px;
          border-radius: 4px;
          object-fit: cover;
        }

        .playlist-info {
          flex: 1;
        }

        .playlist-title {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .playlist-artist {
          font-size: 12px;
        }

        .playlist-duration {
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 30px 20px;
          }

          .vinyl-container {
            width: 240px;
            height: 240px;
          }

          .song-title {
            font-size: 24px;
          }

          .song-artist {
            font-size: 16px;
          }

          .playlist-sidebar {
            width: 100%;
            right: -100%;
          }
        }
      `}</style>
    </div>
  );
};

export default VinylMusicPlayer;