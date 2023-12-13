import React, { useState } from 'react'
import { Container, Grid, Card, Code, TextInput, Button } from '@mantine/core';

const WeekFour = () => {

    const [task2aTarget, setTask2aTarget] = useState<string>('')
    const [task2aArray, setTask2Array] = useState<string>('')
    const [task2aResult, setTask2aResult] = useState<number>()

    const [task2bTarget, setTask2bTarget] = useState<string>('')
    const [task2bArray, setTask2bArray] = useState<string>('')
    const [task2bResult, setTask2bResult] = useState<number>()

    const [task2cTarget, setTask2cTarget] = useState<string>('')
    const [task2cArray, setTask2cArray] = useState<string>('')
    const [task2cResult, setTask2cResult] = useState<number>()

    const formatArray = (arr: any) => {
      return arr.slice(1, -1).split(",").map(Number);
    }

    const formatNumber = (num: any) => {
      return parseInt(num, 10)
    }

    const binarySearch = () => {
      
      let left = 0;
      let right = formatArray(task2aArray).length - 1;
    
      while (left <= right) { 
        const mid = Math.floor((left + right) / 2);
    
        if (formatArray(task2aArray)[mid] === formatNumber(task2aTarget)) {
          console.log({mid})
          setTask2aResult(mid)
          return mid; 
        } else if (formatArray(task2aArray)[mid] < formatNumber(task2aTarget)) {
          left = mid + 1; 
        } else {
          right = mid - 1; 
        }
      }
      setTask2aResult(-1)
      return -1; 
    }

    const binarySearchFirstIndex = () => {
    
      let left = 0;
      let right = formatArray(task2bArray).length - 1;
      let resultIndex = -1;
    
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
    
        if (formatArray(task2bArray)[mid] === formatNumber(task2bTarget)) {
          resultIndex = mid;
          right = mid - 1;
        } else if (formatArray(task2bArray)[mid] < formatNumber(task2bTarget)) {
          left = mid + 1; 
        } else {
          right = mid - 1; 
        }
      }
      setTask2bResult(resultIndex)
      return resultIndex;
    }
 
    const countOccurrences = () => {
    
      let left = 0;
      let right = formatArray(task2cArray).length - 1;
      let count = 0;
    
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
    
        if (formatArray(task2cArray)[mid] === formatNumber(task2cTarget)) {
          
          count++;
          
          let leftPointer = mid - 1;
          let rightPointer = mid + 1;
    
          while (leftPointer >= 0 && formatArray(task2cArray)[leftPointer] === formatNumber(task2cTarget)) {
            count++;
            leftPointer--;
          }
    
          while (rightPointer < formatArray(task2cArray).length && formatArray(task2cArray)[rightPointer] === formatNumber(task2cTarget)) {
            count++;
            rightPointer++;
          }
          setTask2cResult(count)
          return count;
        } else if (formatArray(task2cArray)[mid] < formatNumber(task2cTarget)) {
          left = mid + 1; 
        } else {
          right = mid - 1;
        }
      }

      setTask2cResult(count)
      return count;
    }
    
    const t2Code = (
      <pre>{` const binarySearch = () => {
      
        let left = 0;
        let right = formatArray(task2aArray).length - 1;
      
        while (left <= right) { 
          const mid = Math.floor((left + right) / 2);
      
          if (formatArray(task2aArray)[mid] === formatNumber(task2aTarget)) {
            console.log({mid})
            setTask2aResult(mid)
            return mid; 
          } else if (formatArray(task2aArray)[mid] < formatNumber(task2aTarget)) {
            left = mid + 1; 
          } else {
            right = mid - 1; 
          }
        }
        setTask2aResult(-1)
        return -1; 
      }`}</pre>
    );

    const t3Code = (
      <pre>{` 
      const binarySearchFirstIndex = () => {
    
        let left = 0;
        let right = formatArray(task2bArray).length - 1;
        let resultIndex = -1;
      
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
      
          if (formatArray(task2bArray)[mid] === formatNumber(task2bTarget)) {
            resultIndex = mid;
            right = mid - 1;
          } else if (formatArray(task2bArray)[mid] < formatNumber(task2bTarget)) {
            left = mid + 1; 
          } else {
            right = mid - 1; 
          }
        }
        setTask2bResult(resultIndex)
        return resultIndex;
      }
      }`}</pre>
    );

    const t4Code = (
      <pre>{` 
      const countOccurrences = () => {
    
        let left = 0;
        let right = formatArray(task2cArray).length - 1;
        let count = 0;
      
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
      
          if (formatArray(task2cArray)[mid] === formatNumber(task2cTarget)) {
            
            count++;
            
            let leftPointer = mid - 1;
            let rightPointer = mid + 1;
      
            while (leftPointer >= 0 && formatArray(task2cArray)[leftPointer] === formatNumber(task2cTarget)) {
              count++;
              leftPointer--;
            }
      
            while (rightPointer < formatArray(task2cArray).length && formatArray(task2cArray)[rightPointer] === formatNumber(task2cTarget)) {
              count++;
              rightPointer++;
            }
            setTask2cResult(count)
            return count;
          } else if (formatArray(task2cArray)[mid] < formatNumber(task2cTarget)) {
            left = mid + 1; 
          } else {
            right = mid - 1;
          }
        }
  
        setTask2cResult(count)
        return count;
      }
      `}</pre>
    );
  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 4</h1>
      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>What is a Binary Search</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 2A</h2>
            <p>Find the target</p>
            <Code>{t2Code}</Code>
            <TextInput
              type='number'
              label="Enter the target"
              onChange={(e:any) => setTask2aTarget(e.target.value)}
            />
            <TextInput
              label="Enter the array"
              onChange={(e:any) => setTask2Array(e.target.value)}
            />
            <Button mt="sm" mr="lg" onClick={() => binarySearch()}>
              Find the index of the target
            </Button>
            <p className="mt-3">{task2aResult}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 3</h2>
            <p>First index of occurrence</p>
            <Code>{t3Code}</Code>
            <TextInput
              type='number'
              label="Enter the target"
              onChange={(e:any) => setTask2bTarget(e.target.value)}
            />
            <TextInput
              label="Enter a 2D array"
              onChange={(e:any) => setTask2bArray(e.target.value)}
            />
            <Button mt="sm" mr="lg" onClick={() => binarySearchFirstIndex()}>
              Find first index of occurance
            </Button>
            <p className="mt-3">
              {task2bResult}
            </p>
            <p className="mt-3"></p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 4</h2>
            <p>Count of the occurrence </p>
            <Code>{t4Code}</Code>
            <TextInput
              type='number'
              label="Enter the target"
              onChange={(e:any) => setTask2cTarget(e.target.value)}
            />
            <TextInput
              label="Enter a 2D array"
              onChange={(e:any) => setTask2cArray(e.target.value)}
            />
            <Button mt="sm" mr="lg" onClick={() => countOccurrences()}>
              Count of occurance
            </Button>
            <p className="mt-3">
              {task2cResult}
            </p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default WeekFour
