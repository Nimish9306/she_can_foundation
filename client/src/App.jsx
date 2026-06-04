import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response =
        await axios.post(
          "http://localhost:5000/api/contact",
          formData
        );

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      {/* LEFT SECTION */}
      <div className="left-section">
        <h1 className="team-title">TEAM</h1>

        <p className="description">
          Join our team and make a difference in the lives of women.
          At She Can Foundation, we are committed to creating positive
          change and empowering women through education, leadership,
          and opportunities.
        </p>

        <div className="stats">
          <div>
            <h2>500+</h2>
            <span>Women Supported</span>
          </div>

          <div>
            <h2>50+</h2>
            <span>Programs</span>
          </div>

          <div>
            <h2>10+</h2>
            <span>Cities Reached</span>
          </div>
        </div>

        <button className="join-btn">
          JOIN US
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="form-card">
          <h2>Get In Touch</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="submit-btn"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </form>

          {success && (
            <p className="success">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;