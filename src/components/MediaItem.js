import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MediaItem.css';

class MediaItem extends Component {
	render() {
		const mediaItem = this.props.mediaItem;
		const width = this.props.thumbnail.width;
		const defaultWidth = this.props.thumbnail.defaultWidth;
		const defaultHeight = this.props.thumbnail.defaultHeight;
		const ratio = defaultHeight/defaultWidth;

		const widthStyle = {
			width: width + 'px',
			maxWidth: width + 'px'
		}

		// The ratio multiplier is to make sure the thumbnail
		// is always proportional
		const heightStyle = {
			height: width * ratio + 'px',
			maxHeight: width * ratio + 'px'
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
	}
};

MediaItem.propTypes = {
  mediaItem: PropTypes.object.isRequired,
  thumbnail: PropTypes.object.isRequired
};

export default MediaItem;
