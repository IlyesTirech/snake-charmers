import React, { useState } from 'react'
import { Container, Grid, Card, Code, TextInput, Button } from '@mantine/core';

const WeekFour = () => {

    const [task2aTarget, setTask2aTarget] = useState<number>(0)
    const [task2aArray, setTask2Array] = useState<number[]>([])

    console.log({task2aArray});

    const findTarget = () => {
        let left = 0;
        let right = task2aArray.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (task2aArray[mid] === task2aTarget) {
                return mid;
            } else if (task2aArray[mid] < task2aTarget) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
    }

    return -1;
    }
    
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
            <Code></Code>
            <TextInput
              label="Enter the target"
              id="b"
              onChange={(e:any) => setTask2aTarget(e.target.value)}
            />
            <TextInput
              label="Enter the array"
              id="b"
              onChange={(e:any) => setTask2Array(e.target.value)}
            />
            <Button mt="sm" mr="lg">
              Find the index of the target
            </Button>
            <p className="mt-3"></p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 3</h2>
            <p>Largest Sub Array</p>
            <Code></Code>
            <TextInput
              label="Enter a 2D array"
            />
            <Button mt="sm" mr="lg">
              Maximum number of subarray
            </Button>
            <p className="mt-3">
         
            </p>
            <p className="mt-3"></p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 4</h2>
            <p>Median of Sub Array</p>
            <Code></Code>
            <TextInput
              label="Enter a 2D array"
            />
            <Button mt="sm" mr="lg">
              Median of subarray
            </Button>
            <p className="mt-3">

            </p>
            <p className="mt-3"></p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 5</h2>
            <p>Maximum Product of Sums</p>
            <Code></Code>
            <TextInput
              label="Enter a 2D array"
            />
            <Button mt="sm" mr="lg">
              Maximum Product of Sums
            </Button>
            <p className="mt-3">
            </p>
            <p className="mt-3"></p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default WeekFour
