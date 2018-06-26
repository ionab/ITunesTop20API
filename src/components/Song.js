import React from 'react';

const Song = (props) =>
  (
  <div>
    <p>Artist: {props.artist.label}</p>
    <p>Title: {props.title.label} </p>
    <img src={props.image[2].label} alt="album art" className="image"></img>
  </div>
  )

export default Song;
