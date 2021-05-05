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
            <div className="div-select">
            <label> Genre </label>
                <select
                    className='select'
                    id="genre" 
                    name="genre"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)} >
                        <option value="choose"></option>
                        <option value="pop"> Pop </option>
                        <option value="rnb"> R&B </option>
                        <option value="rock"> Rock </option>
                        <option value="Reaggeton">Reaggeton</option>
                        <option value="Bachata">Bachata</option>
                </select>
            </div>
            <div className="div-select">
            <label> Rating </label>
                <select
                    className='select'
                    id="rating" 
                    name="rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)} >
                        <option value="choose"></option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                </select>
            </div>

            <input className='btn btn-block' type='submit' value='Save Song' />
        </form>
     );
}
 
export default AddSong;