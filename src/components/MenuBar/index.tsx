import React from 'react';
import Button from '../Button';
import {
  Avatar, BellIcon, Botside, Container, EmailIcon, ExitIcon, ExploreIcon, HomeIcon, Logo,
  MenuButton, ProfileData, ProfileIcon, Topside
} from './styles';



const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo >
          <img width={40} height={40} src={require('../../assets/LogoBrave.png')} alt="Avatar" />
        </Logo>

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Criar Post</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img
            src="https://tribunademinas.com.br/wp-content/uploads/2020/01/esp-v%C3%B4lei-luiz-foto-fernando-priamo.jpg"
            alt="Bruno Alves"
          />
        </Avatar>

        <ProfileData>
          <strong>Bruno Alves</strong>
          <span>@bruninho_123</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
