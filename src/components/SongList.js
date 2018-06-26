import React from 'react';
import Song from './Song.js'

class SongList extends React.Component {
  render(){
    const songsList = this.props.songs.map(song => {
      return(<li key={song.id.attributes["im:id"]}><Song artist={song["im:artist"]} title={song["im:name"]}
      image={song["im:image"]}  >
    </Song></li>
  )
  });
  return (
    <ol>
      <div className="song-list">{songsList}</div>
    </ol>
  )
  }
}

export default SongList;
