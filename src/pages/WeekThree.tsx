import React, { useState } from 'react';
import { Container, Grid, Card, Code, TextInput, Button } from '@mantine/core';

const WeekThree: React.FC = () => {
  // Task 1
  const [task1Result, setTask1Result] = useState<number>();
  const [task2Result, setTask2Result] = useState<number>();
  const [task3Result, setTask3Result] = useState<number>();
  const [task3ResultSubArr, setTask3ResultSubArr] = useState<number[]>([]);
  const [task4Result, setTask4Result] = useState<string>('');
  const [task5Result, setTask5Result] = useState<string>('');

  // Task 2
  const [maximumArray, setMaximumArray] = useState<number[]>([])
  const [minimumArray, setMinimumArray] = useState<number[]>([])
  const [twoDArray, setTwoDArray] = useState<string>('')

  const maximumProduct = () => {
    // Sort the array in ascending order
    maximumArray.sort((a:any, b:any) => a - b);

    // Calculate the product of the three largest numbers
    const n = maximumArray.length;
    const option1 = maximumArray[n - 1] * maximumArray[n - 2] * maximumArray[n - 3];

    // Calculate the product of the two smallest numbers (which could be negative) and the largest number
    const option2 = maximumArray[0] * maximumArray[1] * maximumArray[n - 1];

    // Return the maximum of the two options
    setTask1Result(Math.max(option1, option2))
    console.log(Math.max(option1, option2));
    
    return Math.max(option1, option2);
  }

  const minimumProduct = () => {
    // Sort the array in ascending order
    
    minimumArray.sort((a: any, b: any) => a - b);
    
    // Calculate the product of the three smallest numbers
    const n = minimumArray.length;
    const option1 = minimumArray[0] * minimumArray[1] * minimumArray[2];

    // Calculate the product of the two largest negative numbers and the smallest non-negative number
    const option2 = minimumArray[0] * minimumArray[1] * minimumArray[n - 1];

    // Return the minimum of the two options
    setTask2Result(Math.min(option1, option2)); 
    return Math.min(option1, option2);
  };

  const handleChangeTask1 = (e:any) => {
    const inputArray = e.target.value.slice(1, -1).split(',').map(Number);
    setMaximumArray(inputArray);
    console.log({maximumArray});
  };

  const handleChangeTask2 = (e:any) => {
    const inputArray = e.target.value.slice(1, -1).split(',').map(Number);
    setMinimumArray(inputArray);
    console.log({minimumArray});
  };

  const handleChangeTask3 =  () => {
    let arr = JSON.parse(twoDArray);
    console.log(arr);
    
    let largestSubArray: number[] =  [];
    let largestProduct = -Infinity;
    let output = arr.map((sub_arr: number[]) => {
      console.log(sub_arr);
      let product = sub_arr.reduce((acc, num) => acc * num, 1);

  // Check if the current sub-array has a larger product than the previously found largest product
  if (product > largestProduct) {
    largestProduct = product;
    largestSubArray = sub_arr.slice(); // Make a copy of the current sub-array
  }
  console.log("Product of the Largest Sub-Array:", largestProduct);
  console.log("The largest sub array:", largestSubArray);
  
  setTask3Result(largestProduct)
  setTask3ResultSubArr(largestSubArray)
    });
    
  };


  const t1Code = '';
  const t2Code = '';
  const t3Code = '';
  const t4Code = '';
  const t5Code = '';

  console.log({twoDArray})
  console.log({task3ResultSubArr});
  

  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 3</h1>

      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>Find Max 3-Digit Product</p>
            <Code>{t1Code}</Code>
            <TextInput
                label="Enter an array"
                id="b"
                onChange={handleChangeTask1}
              />
            <Button
                onClick={
                 maximumProduct
                }
                mt="sm"
                mr="lg">
                Maximum number
              </Button>
            <p className="mt-3">{task1Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 2</h2>
            <p>Minimum Number</p>
            <Code>{t2Code}</Code>
            <TextInput
                label="Enter an array"
                id="b"
                onChange={handleChangeTask2}
              />
            <Button
                onClick={
                  minimumProduct
                }
                mt="sm"
                mr="lg">
                Maximum number
              </Button>
            <p className="mt-3">{task2Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 3</h2>
            <p>Largest Sub Array</p>
            <Code>{t3Code}</Code>
            <TextInput
                label="Enter an array"
                onChange={(e:any) => setTwoDArray(e.target.value)}
              />
            <Button
              onClick={handleChangeTask3}
                mt="sm"
                mr="lg">
                Maximum number of subarray
              </Button>
              <p className="mt-3">Largest Sub-Array: {task3ResultSubArr.join(', ')}</p>
            <p className="mt-3">Largest Product: {task3Result}</p>
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
