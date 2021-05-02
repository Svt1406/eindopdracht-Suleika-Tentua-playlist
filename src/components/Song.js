import { FaTimes } from 'react-icons/fa';

const Song = ({ song, onDelete }) => {
    return ( 
        <div className='song'>
            <h3>{song.title} by {song.artist} 
                <FaTimes
                    style={{ color: 'deeppink', cursor: 'pointer'}}
                    onClick={() => onDelete(song.id)}
                />
            </h3>
            <p>Genre {song.genre}</p>
            <p>Rating: {song.rating}</p>
        </div>
     );
}
 
export default Song;