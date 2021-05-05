import { useState } from 'react';

const AddSong = ({ onAdd }) => {
    const [title, setTitle] = useState ('');
    const [artist, setArtist] = useState ('');
    const [genre, setGenre] = useState ('');
    const [rating, setRating] = useState('');

    const onSubmit = (event) => { 
        event.preventDefault()
    
    if (!title) {
        alert('Please at a song')
        return
    }
    onAdd({ title, artist, genre, rating })

    setTitle('')
    setArtist('')
    setGenre('')
    setRating('')
}

    return ( 
        <form className='add-form' onSubmit={onSubmit}>
            <label>Song</label>
            <div className='form-control'>
                <input 
                    type='text' 
                    placeholder='Add Song Title' 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
            </div>
            <label>Artist</label>
            <div className='form-control'>
                <input 
                    type='text' 
                    placeholder='Add Artist'
                    value={artist} 
                    onChange={(event) => setArtist(event.target.value)}
                />
            </div>
            <label>Genre</label>
            <div className='form-control radio-container'>
                <input 
                    label = 'Hip Hop'
                    type='radio' 
                    id='hip hop' 
                    name='genre' 
                    checked={genre === 'hip hop'}
                    value={genre}
                    onChange={(event) => setGenre('hip hop')}
                />
                <input 
                    label = 'RnB'
                    type='radio' 
                    id='rnb' 
                    name='genre' 
                    checked={genre === 'rnb'}
                    value={genre}
                    onChange={(event) => setGenre('rnb')}
                />
                <input 
                    label = 'Bachata'
                    type='radio' 
                    id='bachata' 
                    name='genre' 
                    checked={genre === 'bachata'}
                    value={genre}
                    onChange={(event) => setGenre('bachata')}
                />
            </div>
            <label> Rating</label>
            <div className='form-control radio-container'>
                <input 
                    label = '1'
                    type='radio' 
                    id='1' 
                    name='rate' 
                    checked={rating === '1'}
                    value={1}
                    onChange={(event) => setRating('1')}
                />
                <input 
                    label= '2'
                    type='radio' 
                    id='2' 
                    name='rate' 
                    checked={rating === '2'}
                    value='2'
                    onChange={(event) => setRating('2')}
                />
                <input 
                    label='3'
                    type='radio' 
                    id='3' 
                    name='rate' 
                    checked={rating === '3'}
                    value='3'
                    onChange={(event) => setRating('3')}
                />
                <input 
                    label='4'
                    type='radio' 
                    id='4' 
                    name='rate' 
                    checked={rating === '4'}
                    value='4'
                    onChange={(event) => setRating('4')}
                />
                <input 
                    label='5'
                    type='radio' 
                    id='5' 
                    name='rate' 
                    checked={rating === '5'}
                    value= '5'
                    onChange={(event) => setRating('5')}
                />
            </div>

            <input className='btn btn-block' type='submit' value='Save Song' />
        </form>
     );
}
 
export default AddSong;