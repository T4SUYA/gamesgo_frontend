import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Posts</Tab>

      <Posts>
        <Tweet />
      </Posts>
    </Container>
  );
};

export default Feed;
