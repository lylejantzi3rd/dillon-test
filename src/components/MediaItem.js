import React from 'react';
import PropTypes from 'prop-types';
import './MediaItem.css';

const MediaItem = ({mediaItem}) => {

  // Hard set width to 270px and height to 385px.
  // This is to guarantee a consistent width and
  // height for the images.
  const widthStyle = {
    width: '270px',
    maxWidth: '270px'
  }

  const heightStyle = {
    height: '385px',
    maxHeight: '385px'
  }

  return (
    <div className="media-item">
      <img
        style={{...widthStyle, ...heightStyle}}
        alt={mediaItem.title + " by " + mediaItem.artistName}
        src={"https://d2snwnmzyr8jue.cloudfront.net/"+mediaItem.artKey+"_270.jpeg"}
      />
      <div style={widthStyle}>{mediaItem.title}</div>
      <div style={widthStyle}>{mediaItem.artistName}</div>
    </div>
  );
};

MediaItem.propTypes = {
  mediaItem: PropTypes.object.isRequired
};

export default MediaItem;
