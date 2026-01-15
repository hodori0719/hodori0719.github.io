import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca9d8640-fa0a-41cf-a5d5-5d1204ac714c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error—please try again", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <p>For any messages, please provide your information below and I will get back to you as soon as possible. Alternatively, you can directly reach me at the email address available on my <a href="https://www.linkedin.com/in/juneyoo/">LinkedIn</a> profile.</p>
        <h2>Name</h2>
        <input type="text" name="name" required/>
        <h2>Email</h2>
        <input type="email" name="email" required/>
        <h2>Message</h2>
        <textarea name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
      { result &&
        <span className='formResult'>{result}</span>
      }
    </>
  );
}