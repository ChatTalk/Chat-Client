import React, { useState } from 'react';
import { Form, ErrorText } from '../../styles/AuthStyles';
// import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/api';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  // const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== checkPassword) {
      setError('패스워드 불일치');
      return;
    }

    const formData = { email, password, phone, role };

    try {
        const response = await signUp(formData);
  
        if (response.status === 200) {
          alert("회원가입 성공");
          setError("회원가입 성공, 로그인하세요")
        } else {
          setError(response.data.message || '회원가입 실패');
        }
      } catch (error) {
        setError('네트워크 에러, 재시도 및 재확인 필요');
      }
    };

  const getErrorColor = (errorText: string) => {
    if (errorText === '회원가입 성공, 로그인하세요') {
      return 'green'; // 특정 텍스트일 경우 초록색
    }
    return 'red'; // 기본 색상
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
      {error && <ErrorText color={getErrorColor(error)}>{error}</ErrorText>}
    </Form>
  );
};

export default SignUp;
