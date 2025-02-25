import React, { useState } from "react";
import infoIcon from "../public/assets/images/icon-info.svg";
import ImageUploader from "./imageUploader";
import { useForm } from "./formContext";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [error, setError] = useState("");
  const { updateFormData } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        validateEmail(e.target.value);
        break;

      case "github":
        setGitHub(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(name, email, selectedImage, gitHub);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImageUploader
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div className="form-group">
        <label htmlFor="name">Full Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          className="input-field"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@hotmail.com"
          className="input-field"
          value={email}
          onChange={handleChange}
          required
        />
        {error ? (
          <div className="error-info" style={{ marginTop: "2px" }}>
            <img className="error-icon" src={infoIcon} alt="info Icon" />
            <span className={error ? "error-text" : "info-text"}>{error}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="github">GitHub Username</label>
        <input
          type="text"
          id="github"
          name="github"
          value={gitHub}
          placeholder="@yourusername"
          className="input-field"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="submit_btn">Generate My Ticket</button>
      </div>
    </form>
  );
};

export default Form;
