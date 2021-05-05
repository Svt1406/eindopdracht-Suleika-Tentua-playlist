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
        title: 'Promise',
        artist: 'Romeo Santos ft. User',
        genre: 'Bachata',
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
    <div className='body-container'>
      <div className='left-container'>
        <Header />
        <AddSong onAdd={addSong}/>
      </div>
      <div className='right-container'>
          <Songs 
            songs={songs}
            onDelete={deleteSong}
        /> 
      </div>
    </div>
  );
}

export default App;
