import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageSizeSlider.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

class ImageSizeSlider extends Component {
	constructor(props) {
    super(props);

    this.handleChange= this.handleChange.bind(this);
  }

	handleChange(value) {
		this.props.setThumbnailWidth(value);
	}

  render() {
    return (
			<div className="bottom-bar">
				<div className="image-resize-slider">
					<Slider
						min={100}
						max={270}
						value={this.props.value}
						onChange={this.handleChange}
					/>
				</div>
			</div>
    );
  }
}

ImageSizeSlider.propTypes = {
  setThumbnailWidth: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default ImageSizeSlider;
