import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ProfileImage, UserContainer, UserDetail, UserInfo, UserName } from '../../styles/UserStyles';

const UserProfileCard: React.FC = () => {
    const user = useAppSelector((state) => state.user);
  
    return (
      <UserContainer>
        <ProfileImage src="path_to_profile_image" alt="Profile" /> {/* 서버에 저장된 프로필 이미지로 대체 */}
        <UserInfo>
          <UserName>{user.email}</UserName>
          <UserDetail>Phone: {user.phone}</UserDetail>
          <UserDetail>Role: {user.role}</UserDetail>
        </UserInfo>
      </UserContainer>
    );
  };
  
  export default UserProfileCard;