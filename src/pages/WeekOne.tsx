import { Card, Container, Grid, Group, Input, Text } from '@mantine/core';
import React, { useState } from 'react';

const WeekOne = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [numArray, setNumArray] = useState<any[]>([]);
  const [twoDArr, setTwoDArr] = useState<any[]>([]);

  const w1t1 = () => {
    if (num === 0) {
      return 0;
    }
    const result = (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num;
    return result;
  };

  const handleTask1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNum = parseInt(e.target.value, 10) || 0;
    setNum(inputNum);
  };

  const w1t2 = () => {
    let lastGeneratedNumber = 1;
    let output = '';
    for (let i = 1; i < lastGeneratedNumber + 10; i++) {
      let result = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
      output += result + ' ';
    }

    lastGeneratedNumber += 10;

    return output;
  };

  const handleTask2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNum = parseInt(e.target.value, 10) || 0;
    setNum1(inputNum);
  };

  const w1t3a = () => {
    if (numArray.length < 1) {
      return 0;
    }
    let b = Math.min(...numArray);
    const result = (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
    return result;
  };

  const w1t3b = () => {
    if (numArray.length < 1) {
      return 0;
    }
    let sum = numArray.reduce((a, b) => a + b, 0);
    let b = Math.round(sum / numArray.length);
    const result = (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
    return result;
  };

  const w1t3c = () => {
    let output: any = [];
    numArray.forEach((sub_arr) => {
      let sum = sub_arr.reduce((a: number, b: number) => a + b, 0);
      let b = Math.min(...sub_arr);
      const result = (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
      output.push(result);
    });
    console.log({ output });

    return output.join(', ');
  };

  const handleTask3a = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = e.target.value.split(',').map(Number);
    setNumArray(newArray);
  };

  const handleTask3b = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputString = e.target.value;
    const rows = inputString.split(';');
    const newArray = rows.map((row) => row.split(',').map(Number));
    setTwoDArr(newArray);
  };

  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Task 1</Text>
                <Input
                  placeholder="Input component"
                  onChange={handleTask1}
                  value={num}
                />
                <h1>{w1t1()}</h1>
              </Group>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Task 2</Text>
                <h1>{w1t2()}</h1>
              </Group>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Task 3a</Text>
                <Input
                  placeholder="Input component"
                  onChange={handleTask3a}
                  value={numArray.join(',')}
                />
                <h1>{w1t3a()}</h1>
                <Text fw={500}>Task 3b</Text>
                <h1>{w1t3b()}</h1>
                <Text fw={500}>Task 3c</Text>
                <Input
                  placeholder="Input component"
                  onChange={handleTask3b}
                  value={twoDArr.join(',')}
                />
                <h1>{w1t3c()}</h1>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default WeekOne;
