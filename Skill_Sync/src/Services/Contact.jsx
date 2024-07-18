import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !number || !email || !description) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgpglqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          email,
          description,
        }),
      });

      if (response.ok) {
        alert("Message submitted successfully!");
        setName("");
        setNumber("");
        setEmail("");
        setDescription("");
      } else {
        alert("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-1 shadow m-5 w-[40%] h-auto flex justify-center items-center">
        <div className="relative bg-white p-6 my-1">
          <h3 className="text-2xl text-gray-900 font-semibold">
            Let us call you!
          </h3>
          <p className="text-gray-600">To help you, contact us</p>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 w-1/2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Your Number"
                className="border p-2 w-1/2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 w-full mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols="10"
              rows="3"
              placeholder="Tell us your problem"
              className="border p-2 mt-3 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
              className={`w-40 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 ${
                submitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={submitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
