import React, { useState } from 'react';
import { Container, Grid, Card, Code } from '@mantine/core';

const WeekThree: React.FC = () => {
  // Task 1
  const [task1Result, setTask1Result] = useState<string>('');
  const [task2Result, setTask2Result] = useState<string>('');
  const [task3Result, setTask3Result] = useState<string>('');
  const [task4Result, setTask4Result] = useState<string>('');
  const [task5Result, setTask5Result] = useState<string>('');

  const t1Code = '';
  const t2Code = '';
  const t3Code = '';
  const t4Code = '';
  const t5Code = '';

  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 3</h1>

      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>Find Max 3-Digit Product</p>
            <Code>{t1Code}</Code>

            <p className="mt-3">{task1Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 2</h2>
            <p>Convert Date Format</p>
            <Code>{t2Code}</Code>

            <p className="mt-3">{task2Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 3</h2>
            <p>Convert Date Format</p>
            <Code>{t3Code}</Code>

            <p className="mt-3">{task3Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 4</h2>
            <p>Convert Date Format</p>
            <Code>{t4Code}</Code>

            <p className="mt-3">{task4Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 5</h2>
            <p>Convert Date Format</p>
            <Code>{t5Code}</Code>

            <p className="mt-3">{task5Result}</p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default WeekThree;
