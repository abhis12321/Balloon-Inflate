import React, { useState } from 'react';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call your API here
    try {
      const response = await fetch('api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      setResponse(data.message); // Assuming your API returns a message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='form'>
      <h1>Form with API Call</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default FormPage;