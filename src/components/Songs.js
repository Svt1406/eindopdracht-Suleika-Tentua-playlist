import { FaTimes } from 'react-icons/fa';

const Songs = ({ songs, onDelete }) => {

    let songList
    if (songs.length > 0) {
        songList = songs.map((song) => {    
        return  <tr className='songlist' key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td className='rating'>{song.rating}</td> 
                    <td>  
                        <FaTimes
                            className='fatimes'
                            style={{ color: '#D8AA96', cursor: 'pointer'}}
                            onClick={() => onDelete(song.id)}                
                        />  
                    </td>
                      
                </tr>
            }) 
        }
    else {
        songList = (<tr className='songlist'>
                        <td><h3 className='no-songs'>No song to show</h3></td>
                    </tr>)
    }

    return ( 
        <div>
            <table style={{width: "100%"}}>
                <tbody>
                    <tr className='song-header'>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                        {songList}
                </tbody>
            </table>
        </div>     
    );
}
 
export default Songs;