import React, { useState } from 'react';
import { Container, Grid, Card, Code, TextInput, Button } from '@mantine/core';

const WeekThree: React.FC = () => {
  // Task 1
  const [task1Result, setTask1Result] = useState<any>();
  const [task2Result, setTask2Result] = useState<any>();
  const [task3Result, setTask3Result] = useState<any>();
  const [task3ResultSubArr, setTask3ResultSubArr] = useState<any[]>([]);
  const [task4ResultSubArr, setTask4ResultSubArr] = useState<any[]>([]);
  const [task4Result, setTask4Result] = useState<any>('');
  const [task5Result, setTask5Result] = useState<any>('');
  const [task5ResultSubArr, setTask5ResultSubArr] = useState<any[]>([]);

  // Task 2
  const [maximumArray, setMaximumArray] = useState<number[]>([]);
  const [minimumArray, setMinimumArray] = useState<number[]>([]);
  const [twoDArray, setTwoDArray] = useState<string>('');
  const [twoDArray2, setTwoDArray2] = useState<string>('');
  const [twoDArray3, setTwoDArray3] = useState<string>('');

  const maximumProduct = () => {
    // Sort the array in ascending order
    maximumArray.sort((a: any, b: any) => a - b);

    // Calculate the product of the three largest numbers
    const n = maximumArray.length;
    const option1 =
      maximumArray[n - 1] * maximumArray[n - 2] * maximumArray[n - 3];

    // Calculate the product of the two smallest numbers (which could be negative) and the largest number
    const option2 = maximumArray[0] * maximumArray[1] * maximumArray[n - 1];

    // Return the maximum of the two options
    setTask1Result(Math.max(option1, option2));
    console.log(Math.max(option1, option2));

    return Math.max(option1, option2);
  };

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

  const handleChangeTask1 = (e: any) => {
    const inputArray = e.target.value.slice(1, -1).split(',').map(Number);
    setMaximumArray(inputArray);
    console.log({ maximumArray });
  };

  const handleChangeTask2 = (e: any) => {
    const inputArray = e.target.value.slice(1, -1).split(',').map(Number);
    setMinimumArray(inputArray);
    console.log({ minimumArray });
  };

  const handleChangeTask3 = () => {
    try {
      let arr = JSON.parse(twoDArray);
      console.log(arr);

      let largestSubArray: number[] = [];
      let largestProduct = -Infinity;
      arr.map((sub_arr: number[]) => {
        console.log(sub_arr);
        let product = sub_arr.reduce((acc, num) => acc * num, 1);

        // Check if the current sub-array has a larger product than the previously found largest product
        if (product > largestProduct) {
          largestProduct = product;
          largestSubArray = sub_arr.slice(); // Make a copy of the current sub-array
        }
        console.log('Product of the Largest Sub-Array:', largestProduct);
        console.log('The largest sub array:', largestSubArray);

        setTask3Result(largestProduct);
        setTask3ResultSubArr(largestSubArray);
        return largestProduct;
      });
    } catch (error: any) {
      setTask3Result('Error parsing JSON: ' + error.message);
    }
  };

  const handleChangeTask4 = () => {
    try {
      let arr = JSON.parse(twoDArray2);
      console.log(arr);

      let largestNumbers: number[] = [];

      // Step 1: Find the largest number in each sub-array
      arr.forEach((sub_arr: number[]) => {
        console.log(sub_arr);

        // Use Math.max to find the largest number in the sub-array
        let largestNumber = Math.max(...sub_arr);

        largestNumbers.push(largestNumber);
      });

      // Step 2: Calculate the median of the array of largest numbers
      largestNumbers.sort((a, b) => a - b); // Sort the array in ascending order

      let median;
      const length = largestNumbers.length;

      if (length % 2 === 0) {
        // If the length is even, take the average of the two middle numbers
        median =
          (largestNumbers[length / 2 - 1] + largestNumbers[length / 2]) / 2;
      } else {
        // If the length is odd, take the middle number
        median = largestNumbers[Math.floor(length / 2)];
      }

      setTask4Result(median);
      setTask4ResultSubArr(largestNumbers);
    } catch (error: any) {
      setTask4Result('Error parsing JSON: ' + error.message);
    }
  };

  const handleChangeTask5 = () => {
    try {
      // Check if inputArray contains exactly four subarrays
      let arr = JSON.parse(twoDArray3);
      if (arr.length !== 4) {
        setTask5Result('Input must contain exactly four subarrays.');
        return;
      }

      // Calculate the sums of each subarray
      const subArraySums = arr.map((subArray: any[]) =>
        subArray.reduce((sum, num) => sum + num, 0)
      );

      // Calculate the maximum product of the subarray sums
      const maxProduct = (nums: number[]): number =>
        Math.max(
          nums.sort((a, b) => b - a)[0] * nums[1] * nums[2],
          nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
        );

      // Set the results using provided functions
      setTask5Result(maxProduct(subArraySums));
      setTask5ResultSubArr(subArraySums);
    } catch (error: any) {
      setTask5Result('Error parsing JSON: ' + error.message);
    }
  };

  const t1Code = (
    <pre>{`maximumArray.sort((a: any, b: any) => a - b);
// Calculate the product of the three largest numbers
const n = maximumArray.length;
const option1 = maximumArray[n - 1] * maximumArray[n - 2] * maximumArray[n - 3];
// Calculate the product of the two smallest numbers (which could be negative) and the largest number
const option2 = maximumArray[0] * maximumArray[1] * maximumArray[n - 1];
// Return the maximum of the two options
setTask1Result(Math.max(option1, option2));`}</pre>
  );
  const t2Code = (
    <pre>{`const inputArray = e.target.value.slice(1, -1).split(',').map(Number);
setMinimumArray(inputArray);
console.log({ minimumArray });`}</pre>
  );
  const t3Code = (
    <pre>{`let arr = JSON.parse(twoDArray);
console.log(arr);

let largestSubArray: number[] = [];
let largestProduct = -Infinity;
let output = arr.map((sub_arr: number[]) => {
  console.log(sub_arr);
  let product = sub_arr.reduce((acc, num) => acc * num, 1);

  // Check if the current sub-array has a larger product than the previously found largest product
  if (product > largestProduct) {
    largestProduct = product;
    largestSubArray = sub_arr.slice(); // Make a copy of the current sub-array
  }
  console.log('Product of the Largest Sub-Array:', largestProduct);
  console.log('The largest sub array:', largestSubArray);

  setTask3Result(largestProduct);
};`}</pre>
  );
  const t4Code = (
    <pre>{`let arr = JSON.parse(twoDArray2);
console.log(arr);

let largestNumbers: number[] = [];

// Step 1: Find the largest number in each sub-array
arr.forEach((sub_arr: number[]) => {
  console.log(sub_arr);

  // Use Math.max to find the largest number in the sub-array
  let largestNumber = Math.max(...sub_arr);

  largestNumbers.push(largestNumber);
});

// Step 2: Calculate the median of the array of largest numbers
largestNumbers.sort((a, b) => a - b); // Sort the array in ascending order

let median;
const length = largestNumbers.length;

if (length % 2 === 0) {
  // If the length is even, take the average of the two middle numbers
  median =
    (largestNumbers[length / 2 - 1] + largestNumbers[length / 2]) / 2;
} else {
  // If the length is odd, take the middle number
  median = largestNumbers[Math.floor(length / 2)];
}

setTask4Result(median);`}</pre>
  );
  const t5Code = (
    <pre>{`let arr = JSON.parse(twoDArray3);
if (arr.length !== 4) {
  setTask5Result('Input must contain exactly four subarrays.');
  return;
}

// Calculate the sums of each subarray
const subArraySums = arr.map((subArray: any[]) =>
  subArray.reduce((sum, num) => sum + num, 0)
);

// Calculate the maximum product of the subarray sums
const maxProduct = (nums: number[]): number =>
  Math.max(
    nums.sort((a, b) => b - a)[0] * nums[1] * nums[2],
    nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
  );

// Set the results using provided functions
setTask5Result(maxProduct(subArraySums));`}</pre>
  );

  console.log({ twoDArray });
  console.log({ task3ResultSubArr });

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
            <Button onClick={maximumProduct} mt="sm" mr="lg">
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
            <Button onClick={minimumProduct} mt="sm" mr="lg">
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
              label="Enter a 2D array"
              onChange={(e: any) => setTwoDArray(e.target.value)}
            />
            <Button onClick={handleChangeTask3} mt="sm" mr="lg">
              Maximum number of subarray
            </Button>
            <p className="mt-3">
              Largest Sub-Array: {task3ResultSubArr.join(', ')}
            </p>
            <p className="mt-3">Largest Product: {task3Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 4</h2>
            <p>Median of Sub Array</p>
            <Code>{t4Code}</Code>
            <TextInput
              label="Enter a 2D array"
              onChange={(e: any) => setTwoDArray2(e.target.value)}
            />
            <Button onClick={handleChangeTask4} mt="sm" mr="lg">
              Median of subarray
            </Button>
            <p className="mt-3">
              Largest Sub-Array: {task4ResultSubArr.join(', ')}
            </p>
            <p className="mt-3">Median: {task4Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 5</h2>
            <p>Maximum Product of Sums</p>
            <Code>{t5Code}</Code>
            <TextInput
              label="Enter a 2D array"
              onChange={(e: any) => setTwoDArray3(e.target.value)}
            />
            <Button onClick={handleChangeTask5} mt="sm" mr="lg">
              Maximum Product of Sums
            </Button>
            <p className="mt-3">
              Sum Sub-Array: {task5ResultSubArr.join(', ')}
            </p>
            <p className="mt-3">Maximum Product: {task5Result}</p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default WeekThree;
