import React from 'react';
import SongList from '../components/SongList'

class TopTwentyBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
    }
  }
  componentDidMount(){
    const request = new XMLHttpRequest();
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({songs: songs.feed.entry}));
  }
  render(){
    return (
      <div>
      <p>This is a TopTwentyBox</p>
      <SongList songs={this.state.songs}/>
    </div>
    )
  }

}

export default TopTwentyBox;
