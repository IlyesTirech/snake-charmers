import React, { useState } from 'react';
import { Container, Grid, Card, TextInput, Button } from '@mantine/core';

const WeekOne: React.FC = () => {
  const [w1t1Result, setW1t1Result] = useState<string>('');

  const w1t1 = (a: number) => {
    setW1t1Result(
      (a % 3 ? '' : 'Fizz') + (a % 5 ? '' : 'Buzz') || a.toString()
    );
  };


  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 1</h1>
      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Week 1 Task 1</h2>
            <p>Simple fizz buzz from inputted number.</p>
            <form>
              <TextInput
                label="Input"
                id="a"
                type="number"
                onChange={(e) => w1t1(Number(e.currentTarget.value))}
              />
              <Button
                mt="sm"
                onClick={(e) => {
                  w1t1(
                    Number(
                      (document.getElementById('a') as HTMLInputElement).value
                    )
                  );
                  e.preventDefault();
                }}>
                FizzBuzzzzzz
              </Button>
            </form>
            <p id="w1t1" className="mt-3">
              {w1t1Result}
            </p>
          </Card>
        </Grid.Col>
       
      </Grid>
    </Container>
  );
};

export default WeekOne;
