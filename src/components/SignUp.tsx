import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
