import { useState} from 'react';
import Header from './components/Header';
import Songs from './components/Songs';
import AddSong from './components/AddSong';

function App() {
  const [songs, setSongs] = useState ([
    {
        id: 1,
        title: 'Fuego',
        artist: 'Jabal ft. Kiana Cova',
        genre: 'Bachata',
        rating: 3,
    },
    {
        id: 2,
        title: 'Peaches',
        artist: 'Justin Bieber ft. Daniel Ceasar',
        genre: 'Pop',
        rating: 4,
    },
    {
        id: 3,
        title: 'Dansa Deng Se',
        artist: 'Rafa',
        genre: 'Lagu Lagu',
        rating: 5,
    },
  ])

  //Add Song
  const addSong = (song) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newSong = { id, ...song}
    setSongs([...songs, newSong])
  }

  //Delete Song 
  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <AddSong onAdd={addSong}/>
      {songs.length > 0 ? (
        <Songs 
          songs={songs}
          onDelete={deleteSong}
      /> 
        ) : (
          'No Songs To Show'
    )}
     </div>
  );
}

export default App;
