import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Procure eventos, campeonatos e etc." />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Pessoas na sua região"
            elements={[
              <FollowSuggestion name="Rodrigo" nickname="@rodrs" photoUrl="https://terceirotempo.uol.com.br/imagens/66/67/pdt_ft1_106667.jpg" />,
              <FollowSuggestion name="João Victor" nickname="@_jvictor" photoUrl='https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg' />,
              <FollowSuggestion name="Pedro Bahzan" nickname="@pedro_bas" />,
            ]}
          />

          <List
            title="Nos próximos dias"
            elements={[
              <News
                header="Francisco Beltrão · Futebol"
                topic="Pelada dos Amigos no Arrudão"
                link="https://www.jornaldebeltrao.com.br/arquivos/media/esporte---arrudao.png"
              />,
              <News
                header="Dois Vizinhos · Basquete"
                topic="Campeonato de basquete UFPR"
                link="https://lnb.com.br/wp-content/uploads/2015/09/Torcida-223.jpg"
              />,
              <News header="Pato Branco · Vôlei" topic="Campeonato municipal"
                link='https://www.olimpiadatododia.com.br/wp-content/uploads/2021/12/kisy-minas-tenis-vakifbank-mundial-clubes-volei-feminino-edit.jpg' />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
