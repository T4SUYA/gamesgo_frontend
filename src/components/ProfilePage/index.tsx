import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://tribunademinas.com.br/wp-content/uploads/2020/01/esp-v%C3%B4lei-luiz-foto-fernando-priamo.jpg"
            alt="Bruno Alves"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Bruno Alves</h1>
        <h2>@bruninho_123</h2>

        <p>
          Estudante de Engenharia de Bioprocessos na Universidade Federal de Santa Maria.
          Entusiasta de Volei e Futebol.

        </p>

        <ul>
          <li>
            <LocationIcon />
            São José do Rio Preto, Brazil
          </li>
          <li>
            <CakeIcon />
            Nasceu em 13 Maio, 1989
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
