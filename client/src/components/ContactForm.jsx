import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [success, setSuccess] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
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
    <div className="form-container">
      <h1>She Can Foundation</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>
      </form>

      {success && (
        <p>{success}</p>
      )}
    </div>
  );
}

export default ContactForm;