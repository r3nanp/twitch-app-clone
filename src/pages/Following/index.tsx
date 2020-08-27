import React from 'react';
import { View, FlatList } from 'react-native'

import { Wrapper, Container, Main } from './styles';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean; 
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>FOLLOWED CATEGORIES</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList/>, },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>LIVE CHANNELS</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <StreamList/>, },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>CONTINUE WATCHING</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <StreamList/>, },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>OFFLINE CHANNELS</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <ChannelList/>, },

    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
    data: items,
    indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) =>  item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}

            //Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
