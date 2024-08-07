import React from 'react';
import Avatar from 'react-avatar';

const UserAvatar = ({ name, imageUrl, color }) => {
  return (
    <Avatar 
      name={name} 
      size="100" 
      // maxInitials="1" 
      initials= {name[0]}
      round={true} 
      src={imageUrl} 
      color={color} 
      fgColor="#FFFFFF" 
    />
  );
};

export default UserAvatar;