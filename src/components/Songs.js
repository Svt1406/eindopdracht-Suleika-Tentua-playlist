import Song from './Song';

const Songs = ({ songs, onDelete }) => {
  
    return ( 
        <>
            {songs.map((song) => (
                <Song 
                    key={song.id} 
                    song={song}
                    onDelete={onDelete}
                />
            ))}
        </>
     );
}
 
export default Songs;