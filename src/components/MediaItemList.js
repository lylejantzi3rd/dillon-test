import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaActions from '../actions/media-actions';
import MediaItem from './MediaItem';
import './MediaItemList.css';

class MediaItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }

  render() {
    const {media} = this.props;

    return (
      <div className="media-container">
        {media.map((mediaItem) => 
          <MediaItem key={mediaItem.titleId} mediaItem={mediaItem} />  
        )}
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
    media: state.media
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mediaActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaItemList);
