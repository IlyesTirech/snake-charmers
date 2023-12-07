import React from 'react';
import CardItem from '../components/Cards';
import { Grid, Container, Text } from '@mantine/core';

const HomePage: React.FC = () => {
  const weeks = [
    { weekNumber: 1, title: 'FizzBuzz', status: 'done', link: '/week1' },
    { weekNumber: 2, title: 'DateTime', status: 'done', link: '/week2' },
    {
      weekNumber: 3,
      title: 'MaxProduct',
      status: 'done',
      link: '/week3'
    },
    { weekNumber: 4, title: 'BinarySearch', status: 'inprogress', link: '/week4' },
  ];

  return (
    <Container size="lg" style={{ marginTop: '2rem' }}>
      <div>
        <Text size="xl" style={{ marginBottom: '1rem' }}>
          React Warriors Coding Challenge
        </Text>
      </div>
      <Grid>
        {weeks.map((week) => (
          <Grid.Col
            span={{ base: 12, xs: 6, md: 4, lg: 3 }}
            key={week.weekNumber}>
            <CardItem
              title={week.title}
              status={week.status}
              link={week.link}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
