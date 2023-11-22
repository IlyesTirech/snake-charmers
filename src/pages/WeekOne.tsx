import React, { useState } from 'react';
import { Container, Grid, Card, TextInput, Button } from '@mantine/core';

const WeekOne: React.FC = () => {
  const [w1t1Result, setW1t1Result] = useState<string>('');
  const [w1t2Result, setW1t2Result] = useState<string>('');
  const [w1t3Result, setW1t3Result] = useState<string>('');
  const [w1t3cResult, setW1t3cResult] = useState<string>('');
  const [lastGeneratedNumber, setLastGeneratedNumber] = useState<number>(1);

  const w1t1 = (a: number) => {
    setW1t1Result(
      (a % 3 ? '' : 'Fizz') + (a % 5 ? '' : 'Buzz') || a.toString()
    );
  };

  const w1t2 = () => {
    let output = w1t2Result;
    for (let i = lastGeneratedNumber; i < lastGeneratedNumber + 10; i++) {
      let result = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
      output += result + ' ';
    }

    setLastGeneratedNumber(lastGeneratedNumber + 10);

    setW1t2Result(output);
  };

  const w1t3a = (a: string) => {
    try {
      let arr = JSON.parse(a);
      if (!Array.isArray(arr)) {
        throw new Error('Input is not a valid array');
      }
      let b = Math.min(...arr);
      let result = (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
      setW1t3Result(result.toString());
    } catch (error: any) {
      setW1t3Result('Error parsing JSON: ' + error.message);
    }
  };

  const w1t3b = (a: string) => {
    try {
      let arr = JSON.parse(a);
      if (!Array.isArray(arr)) {
        throw new Error('Input is not a valid array');
      }
      let sum = arr.reduce((acc: number, val: number) => acc + val, 0);
      let b = Math.round(sum / arr.length);
      let result = (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
      setW1t3Result(result.toString());
    } catch (error: any) {
      setW1t3Result('Error parsing JSON: ' + error.message);
    }
  };

  const w1t3c = (a: string) => {
    try {
      let arr = JSON.parse(a);
      if (!Array.isArray(arr) || !arr.every(Array.isArray)) {
        throw new Error('Input is not a valid 2D array');
      }
      let output = arr.map((sub_arr: number[]) => {
        let sum = sub_arr.reduce((acc: number, val: number) => acc + val, 0);
        let b = Math.min(...sub_arr);
        return (b % 3 ? '' : 'Fizz') + (b % 5 ? '' : 'Buzz') || b;
      });
      setW1t3cResult(output.join(', '));
    } catch (error: any) {
      setW1t3cResult('Error parsing JSON: ' + error.message);
    }
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
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Week 1 Task 2</h2>
            <p>FizzBuzz Printer</p>
            <Button onClick={w1t2} mt="sm">
              Generate next 10 numbers
            </Button>
            <div className="mt-3" id="w1t2">
              {w1t2Result}
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Week 1 Task 3</h2>
            <p>FizzBuzz Array Handler</p>
            <form>
              <TextInput
                label="Enter an array"
                id="b"
                onChange={(e) => {
                  (document.getElementById('b') as HTMLInputElement).value =
                    e.currentTarget.value;
                }}
              />
              <Button
                onClick={(e) => {
                  w1t3a(
                    (document.getElementById('b') as HTMLInputElement).value
                  );
                  e.preventDefault();
                }}
                mt="sm">
                Smallest in array
              </Button>
              <Button
                onClick={(e) => {
                  w1t3b(
                    (document.getElementById('b') as HTMLInputElement).value
                  );
                  e.preventDefault();
                }}
                mt="sm">
                Mean of array
              </Button>
            </form>
            <p id="w1t3" className="mt-3">
              {w1t3Result}
            </p>
            <form>
              <TextInput
                label="Enter a 2d array"
                id="c"
                onChange={(e) => {
                  (document.getElementById('c') as HTMLInputElement).value =
                    e.currentTarget.value;
                }}
              />
              <Button
                onClick={(e) => {
                  w1t3c(
                    (document.getElementById('c') as HTMLInputElement).value
                  );
                  e.preventDefault();
                }}
                mt="sm">
                Smallest in each sub array
              </Button>
            </form>
            <p id="w1t3c" className="mt-3">
              {w1t3cResult}
            </p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default WeekOne;
