import React, { useState, useEffect } from "react";
import "./applicationForm.css";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    activity: "",
    space: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function postData(url) {
    setIsLoading(true);
    try {
      const request = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await request;
      if (response.ok) {
        setSuccess(true);
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    if (submitted) {
      postData("http://localhost:8000/arenda");
    }
  }, [submitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="application-form">
      {success ? (
        <div className="thank-you-message">
          <h1>Спасибо, {formData.name}!</h1>
          <h1>Мы свяжемся с вами в ближайшее время</h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Заполните заявку на аренду офиса</h2>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="activity"
              placeholder="Вид деятельности"
              required
              value={formData.activity}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="space"
              placeholder="Желаемая площадь"
              required
              value={formData.space}
              onChange={handleChange}
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ApplicationForm;
