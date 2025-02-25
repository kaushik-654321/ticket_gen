import React, { useState } from "react";
import uploadIcon from "../public/assets/images/icon-upload.svg";
import infoIcon from "../public/assets/images/icon-info.svg";

function ImageUploader({ selectedImage, setSelectedImage }) {
  const [error, setError] = useState("");
  const maxSize = 50 * 1024 * 1024;

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > maxSize) {
        setError("File too large. Please upload a photo under 50KB");
        return;
      }
      setError(""); // Clear previous errors
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="form-group">
      <label htmlFor="image">Upload Avatar</label>
      <div className="file-upload-wrapper">
        {selectedImage ? (
          <div className="image-preview">
            <img
              src={selectedImage}
              alt="Uploaded Avatar"
              className="preview-img"
            />
            <div className="button-group">
              <label
                className="remove-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveImage();
                }}
              >
                Remove Image
              </label>
              <label className="change-btn">
                Change Image
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="hidden-file-input"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        ) : (
          <label className="file-upload" tabIndex={0}>
            <div className="upload-icon">
              <img src={uploadIcon} alt="Upload Icon" />
            </div>
            <span>Drag and drop or click to upload</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="input-field"
              onChange={handleChange}
            />
          </label>
        )}
      </div>
      <div className={error ? "error-info" : "info"}>
        <img
          className={error ? "error-icon" : "info-icon"}
          src={infoIcon}
          alt="info Icon"
        />
        <span className={error ? "error-text" : "info-text"}>
          {error ? error : "upload your photo(JPG or PNG, max size: 10kb)"}
        </span>
      </div>
    </div>
  );
}

export default ImageUploader;
