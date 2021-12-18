import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--gamesgo)')};
  color: ${(props) => (props.outlined ? 'var(--gamesgo)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--gamesgo)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  };
  }
`;
