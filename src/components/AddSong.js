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
            <div className='form-control'>
                <label>Song</label>
                <input 
                    type='text' 
                    placeholder='Add Song Title' 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Artist</label>
                <input 
                    type='text' 
                    placeholder='Add Artist'
                    value={artist} 
                    onChange={(event) => setArtist(event.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Genre</label>
                <input 
                    type='text' 
                    placeholder='Add Genre' 
                    value={genre} 
                    onChange={(event) => setGenre(event.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <p>Rating: </p>
                <label> 1 </label>
                <input 
                    type='radio' 
                    id='1' 
                    name='rate' 
                    checked={rating === '1'}
                    value={1}
                    onChange={(event) => setRating('1')}
                />
                <label> 2 </label>
                <input 
                    type='radio' 
                    id='2' 
                    name='rate' 
                    checked={rating === '2'}
                    value='2'
                    onChange={(event) => setRating('2')}
                />
                <label> 3 </label>
                <input 
                    type='radio' 
                    id='3' 
                    name='rate' 
                    checked={rating === '3'}
                    value='3'
                    onChange={(event) => setRating('3')}
                />
                <label> 4 </label>
                <input 
                    type='radio' 
                    id='4' 
                    name='rate' 
                    checked={rating === '4'}
                    value='4'
                    onChange={(event) => setRating('4')}
                />
                <label> 5 </label>
                <input 
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