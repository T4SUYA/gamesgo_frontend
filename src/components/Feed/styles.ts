import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0px;
  cursor: pointer;

  color: var(--gamesgo);
  border-bottom: 2px solid var(--gamesgo);

  &:hover {
    background: var(--gamesgo-dark-hover);
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
