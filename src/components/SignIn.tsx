import React, { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../slices/authSlice';
import { FormContainer } from '../styles/StyledComponents';

const SignIn: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      dispatch(setUser(response.data));
    //   window.location.href = '/auctions';
    } catch (err) {
      setError('로그인 실패, 입력 정보 재확인 요망');
      alert(error)
    }
  };

  return (
    <FormContainer isSignUp={false}>
      <h1>Sign In</h1>
      <span>use your email password</span>
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
        <div style={{ color: 'red' }} role="alert">{error}</div>
        {/* <a className="forget" href="#">Forget Your Password?</a> */}
        <button type="submit">로그인</button>
        <button type="button" onClick={onSwitch}>회원가입</button>
      </form>
    </FormContainer>
  );
};

export default SignIn;