import React, { useState } from 'react';
import axios from 'axios';
// import { useAppDispatch } from '../redux/hooks';
import { FormContainer } from '../styles/StyledComponents';

const SignUp: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== checkPassword) {
      alert('암호가 일치하지 않음');
      return;
    }
    try {
      await axios.post('/api/users/signup', { email, password, phone, role });
      alert('Sign Up successful');
      window.location.href = '/';
    } catch (err) {
      setError('회원가입 실패, 입력 정보 재확인 필요');
      alert(error)
    }
  };

  return (
    <FormContainer isSignUp={true}>
      <h1>Sign Up</h1>
      <span>use your email for registration</span>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder="Check Password"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="" disabled selected>Select Role</option>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">회원가입</button>
        <button type="button" onClick={onSwitch}>로그인</button>
      </form>
    </FormContainer>
  );
};

export default SignUp;