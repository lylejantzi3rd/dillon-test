import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaActions from '../actions/media-actions';
import * as thumbnailActions from '../actions/thumbnail-actions';
import MediaItem from './MediaItem';
import ImageSizeSlider from './ImageSizeSlider';
import './MediaItemList.css';

class MediaItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      thumbnail: {}
    };
  }

  render() {
    const {media} = this.props;

    return (
      <div className="media-container">
        {media.map((mediaItem) => 
          <MediaItem key={mediaItem.titleId} mediaItem={mediaItem} thumbnail={this.props.thumbnail} />  
        )}
				<ImageSizeSlider setThumbnailWidth={this.props.actions.setThumbnailWidth} value={this.props.thumbnail.width}/>
      </div>
    );
  }
}

MediaItemList.propTypes = {
  media: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    media: state.media,
    thumbnail: state.thumbnail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...mediaActions, ...thumbnailActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaItemList);
