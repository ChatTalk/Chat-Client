import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button, ButtonContainer, ProfileImage, UserContainer, UserDetail, UserInfo, UserName } from '../../styles/UserStyles';
import { logoutUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await dispatch(logoutUser()).unwrap();  // 로그아웃 요청 디스패치
          navigate('/login');  // 로그아웃 후 홈으로 이동
        } catch (error) {
          console.error('로그아웃 중 오류 발생:', error);
        }
    };

    const handleMyPage = () => {
        // 마이페이지로 이동하는 경로 설정
    };
  
    return (
      <UserContainer>
          <ProfileImage src="../../chatLogo.png" alt="chatLogo" /> {/* 서버에 저장된 프로필 이미지로 대체 */}
            <UserInfo>
                <UserName>{user.email}</UserName>
                <UserDetail>Phone: {user.phone}</UserDetail>
                <UserDetail>Role: {user.role}</UserDetail>
            </UserInfo>
            <ButtonContainer>
                <Button onClick={handleMyPage}>My Page</Button>
                <Button onClick={handleLogout}>Log Out</Button>
            </ButtonContainer>
      </UserContainer>
    );
};

export default UserProfile;