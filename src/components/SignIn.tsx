import React, { useState } from 'react';
import { Form, ErrorText } from '../styles/AuthStyles';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/api';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = { email, password };

    try {
      const response = await signIn(formData);

      if (response.status === 200) {
        alert("로그인 성공")
        navigate('/test');
      } else {
        setError(response.data.message || '로그인 실패');
      }
    } catch (error) {
      setError('네트워크 에러, 재시도 및 재확인 필요');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <span>Use your email and password</span>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <div>
        {/* <a href="#">Forget Your Password?</a> 라우팅으로 리팩토링하기 */}
      </div>
      <button type="submit">Sign In</button>
      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
};

export default SignIn;
