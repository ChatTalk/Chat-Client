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
      setError('패스원드 불일치');
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
        alert('회원가입 성공');
        // window.location.href = '/'; 라우팅으로 리팩토링하기
      } else {
        const data = await response.json();
        setError(data.message || '회원가입 실패');
      }
    } catch (error) {
      setError('네트워크 에러, 재시도 및 재확인 필요');
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
