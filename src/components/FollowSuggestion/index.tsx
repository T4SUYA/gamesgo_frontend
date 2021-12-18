import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  photoUrl?: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, photoUrl }) => {

  const loadProfilePhoto = () => {
    if (photoUrl) {
      return photoUrl;
    }
    return require('../../assets/avatar.png');

  }
  return (
    <Container>
      <div>
        <Avatar>
          <img src={loadProfilePhoto()} alt="Avatar" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
