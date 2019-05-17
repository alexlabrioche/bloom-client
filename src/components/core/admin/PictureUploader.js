import React from "react";

class PictureUploader extends React.Component {
  render() {
    const { handleUpload, label } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="picture">{label}</label>
        <input
          type="file"
          className="form-control-file"
          id="picture"
          onChange={event => handleUpload(event)}
        />
      </div>
    );
  }
}

export default PictureUploader;
