import React, { useState } from 'react';
import { Form, ErrorText } from '../styles/AuthStyles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== checkPassword) {
      setError('Passwords do not match.');
      return;
    }

    const formData = { email, password, phone, role };

    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Sign up successful!');
        window.location.href = '/';
      } else {
        const data = await response.json();
        setError(data.message || 'Sign up failed.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <span>Use your email for registration</span>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="password" placeholder="Check Password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="" disabled>Select Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button type="submit">Sign Up</button>
      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
};

export default SignUp;
