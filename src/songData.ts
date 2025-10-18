
// 1. We've updated the SongVibe interface.
// It now includes a font family and a color gradient for the controls.
export interface SongVibe {
  id: string;
  title: string;
  artist: string;
  coverArtUrl: string;
  audioUrl?: string; // You can add mp3 URLs here to make the player functional
  vibe: {
    fontFamily: string;
    colors: {
      background: string;
      gradientStart: string;
      gradientEnd: string;
      text: string;
      accent: string;
    };
  };
}

// 2. This is the complete song list with new vibe definitions for all songs.
export const allSongs: SongVibe[] = [
  {
    id: 'saw-you-in-a-dream',
    title: 'Saw You In A Dream',
    artist: 'The Japanese House',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27357591d1881513f56e0c03c53',
    vibe: {
      fontFamily: "'Lora', serif",
      colors: {
        background: '#e0e7ef',
        gradientStart: '#a7b4c2',
        gradientEnd: '#cad3dd',
        text: '#2c3e50',
        accent: '#e74c3c',
      },
    },
  },
  {
    id: 'ladida',
    title: 'LA DI DA',
    artist: 'Lemon Stella',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b2734e73e2b20f9f2e3073b64f9f',
    vibe: {
        fontFamily: "'Poppins', sans-serif",
        colors: {
            background: '#fef9e0',
            gradientStart: '#d1e4dd',
            gradientEnd: '#fdf6e6',
            text: '#5a4a42',
            accent: '#7fdbca',
        },
    },
  },
  {
    id: 'blue-valentine',
    title: 'Blue Valentine',
    artist: 'NMIXX',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27318a66a383d0b2e88a3e7e221',
     vibe: {
      fontFamily: "'Dosis', sans-serif",
      colors: {
        background: '#1a1a3a',
        gradientStart: '#3d3d5c',
        gradientEnd: '#1a1a3a',
        text: '#e0e0ff',
        accent: '#ff6b81',
      },
    },
  },
  {
    id: 'odoriko',
    title: 'odoriko',
    artist: 'Vaundy',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27339d9b139885b3b5c6d33c5e0',
    vibe: {
      fontFamily: "'Playfair Display', serif",
      colors: {
        background: '#f4f0e9',
        gradientStart: '#d94e41',
        gradientEnd: '#f4a261',
        text: '#3b3b3b',
        accent: '#d94e41',
      },
    },
  },
  {
    id: 'night-dancer',
    title: 'Night Dancer',
    artist: 'imase',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b273b50821e2c5e533c3751b03de',
    vibe: {
      fontFamily: "'Dosis', sans-serif",
      colors: {
        background: '#0d0221',
        gradientStart: '#26175e',
        gradientEnd: '#0d0221',
        text: '#f9a8d4',
        accent: '#ffffff',
      },
    },
  },
  {
    id: 'hikarunara',
    title: 'Hikarunara',
    artist: 'Goose house',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b273b458c6e26c636f8a4a58e178',
    vibe: {
      fontFamily: "'Playfair Display', serif",
      colors: {
        background: '#fffbef',
        gradientStart: '#87ceeb',
        gradientEnd: '#fffacd',
        text: '#4a4a4a',
        accent: '#ffb6c1',
      },
    },
  },
  {
    id: 'lovin-me',
    title: "Lovin' Me",
    artist: 'FIFTY FIFTY',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b2733418a284c0c0b343c162c974',
    vibe: {
      fontFamily: "'Caveat', cursive",
      colors: {
        background: '#fdeff2',
        gradientStart: '#ffcad4',
        gradientEnd: '#fdeff2',
        text: '#d15c7c',
        accent: '#ea4c89',
      },
    },
  },
  {
    id: 'ditto',
    title: 'Ditto',
    artist: 'NewJeans',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b2735415386a7c364e31e80ba6b1',
    vibe: {
      fontFamily: "'Roboto Mono', monospace",
      colors: {
        background: '#f0f0f0',
        gradientStart: '#d1d9e6',
        gradientEnd: '#ffffff',
        text: '#333333',
        accent: '#4a90e2',
      },
    },
  },
  {
    id: 'love-dive',
    title: 'LOVE DIVE',
    artist: 'IVE',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27306aaa8e0aee0393c0ad6b84a',
    vibe: {
      fontFamily: "'Montserrat', sans-serif",
      colors: {
        background: '#0a4a8d',
        gradientStart: '#c0c0c0',
        gradientEnd: '#8e9eab',
        text: '#ffffff',
        accent: '#ffffff',
      },
    },
  },
  {
    id: 'sofia',
    title: 'Sofia',
    artist: 'Clairo',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27341770b0b8c50c18d09f7b198',
    vibe: {
      fontFamily: "'Montserrat', sans-serif",
      colors: {
        background: '#fdf3f2',
        gradientStart: '#e76f51',
        gradientEnd: '#f4a261',
        text: '#3e3e3e',
        accent: '#e76f51',
      },
    },
  },
  {
    id: 'washing-machine-heart',
    title: 'Washing Machine Heart',
    artist: 'Mitski',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b2738c8180d07e6f3d1b8e1f0e8f',
    vibe: {
      fontFamily: "'Caveat', cursive",
      colors: {
        background: '#1e1e24',
        gradientStart: '#4a4e69',
        gradientEnd: '#22223b',
        text: '#ffffff',
        accent: '#ffcc00',
      },
    },
  },
  {
    id: 'one-of-your-girls',
    title: 'One of Your Girls',
    artist: 'Troye Sivan',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27346b3f23b53111d0f5b921319',
    vibe: {
      fontFamily: "'Poppins', sans-serif",
      colors: {
        background: '#1a1a1a',
        gradientStart: '#ff0055',
        gradientEnd: '#8a2be2',
        text: '#ffffff',
        accent: '#ff0055',
      },
    },
  },
   {
    id: '3am',
    title: '3am',
    artist: 'ROSÉ',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b27394c653664923b355e1a108c4',
    vibe: {
      fontFamily: "'Lora', serif",
      colors: {
        background: '#faf6f2',
        gradientStart: '#d3c4b8',
        gradientEnd: '#e9e0da',
        text: '#2b2b2b',
        accent: '#b89f8a',
      },
    },
  },
  {
    id: 'love-hangover',
    title: 'Love Hangover',
    artist: 'JENNIE',
    coverArtUrl: 'https://i.ytimg.com/vi/rN1-tK1E-uQ/maxresdefault.jpg',
     vibe: {
      fontFamily: "'Poppins', sans-serif",
      colors: {
        background: '#1a1a1a',
        gradientStart: '#e60023',
        gradientEnd: '#ff4d6d',
        text: '#e0e0e0',
        accent: '#e60023',
      },
    },
  },
  {
    id: 'bloom',
    title: 'Bloom',
    artist: 'Dabin',
    coverArtUrl: 'https://i.scdn.co/image/ab67616d0000b273ddf968c92a2f6063c6ab563b',
    vibe: {
        fontFamily: "'Dosis', sans-serif",
        colors: {
            background: '#fdeff2',
            gradientStart: '#6cb6c2',
            gradientEnd: '#b4dfe5',
            text: '#5e4c5f',
            accent: '#6cb6c2',
        },
    },
  },
];
