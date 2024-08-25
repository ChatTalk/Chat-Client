import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
`;

const Button = styled.button`
  background-color: #4c8bf5;
  color: #fff;
  font-size: 15px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease, cursor 0.3s ease;

  &:hover {
    background-color: #3b73e8;
    transform: scale(1.05);
    cursor: pointer;
  }

  &:active {
    background-color: #2d5acc;
    transform: scale(0.95);
    cursor: grabbing;
  }

  &.hidden {
    background-color: transparent;
    border-color: #fff;
  }
`;

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checkPassword: '',
    phone: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { password, checkPassword } = formData;

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    fetch("/api/users/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("서버 응답:", data);
      alert("회원가입 성공!");
    })
    .catch(error => {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <span>use your email for registration</span>
      <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <Input type="password" name="checkPassword" placeholder="Check Password" value={formData.checkPassword} onChange={handleChange} required />
      <Input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="" disabled>Select Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <Button type="submit">회원가입</Button>
    </Form>
  );
};

export default SignUp;
