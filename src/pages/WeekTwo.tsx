import React, { useState } from 'react';
import { Container, Grid, Card, TextInput, Button, Tooltip } from '@mantine/core';
import { DateInput } from '@mantine/dates';

const WeekTwo: React.FC = () => {
  //Task1
  const [task1Result, setTask1Result] = useState<string>('');
  const [date, setDate] = useState<any>()
  const formatDate = () => {
    setTask1Result(date.toISOString().slice(0, 10));
  }
  console.log(date);
  
  //Task2
  const [correctFormat, setCorrectFormat] = useState<any>()
  const [task2Result, setTask2Result] = useState<any>()
  //Detect what type of date it is
  function isValidDateFormat() {
    // Regular expression for the date string format: "23rd October 2023"
    const dateFormatRegex = /^(\d{1,2})(st|nd|rd|th)?\s+(\w+)\s+(\d{4})$/;
    
    // Test if the input string matches the format
    const match = correctFormat.match(dateFormatRegex);

    console.log(!!match);
    

    return !!match; // Returns true if the format is correct, otherwise false
}

function isValidDateNumberFormat() {
  // Regular expression for the date string format: "2023-10-23"
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  
  // Test if the input string matches the format
  console.log(dateFormatRegex.test(correctFormat));
  
  return dateFormatRegex.test(correctFormat);
}

function convertToISOFormat() {
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // Split the input string into day, month, and year
  const [day, monthName, year] = correctFormat.split(' ');

  // Find the index of the month in the array
  const monthIndex = months.indexOf(monthName);

  // Check if the date components are valid
  if (monthIndex === -1 || isNaN(day) || isNaN(year)) {
      console.error("Invalid date format");
      return null;
  }

  // Create a Date object and format it to ISO string
  const isoDate = new Date(year, monthIndex, parseInt(day)).toISOString().split('T')[0];

  setTask2Result(isoDate)
  return isoDate;
}
function convertToCustomFormat() {
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // Create a Date object from the ISO string
  const dateObject = new Date(correctFormat);

  // Get day, month, and year from the Date object
  const day = dateObject.getDate();
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();

  // Format the date components to the desired format
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}

const convertIntoOpposite = () => {
  if(!isValidDateFormat()){
    setTask2Result('Not a valid format.')
  }

  if(!isValidDateNumberFormat()){
    setTask2Result('Not a valid format.')
  }

  if(isValidDateFormat()){
    setTask2Result(convertToISOFormat())
    console.log({task2Result});
  }
  if(isValidDateNumberFormat()){
    setTask2Result(convertToCustomFormat())
      console.log({task2Result});
    }

  }

  return (
<Container size="sm">
      <h1 className="title mt-5">Week 2</h1>

      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>Convert Date Format</p>
            <form>
            <DateInput
              value={date}
              onChange={setDate}
              label="Date input"
              placeholder=
              "Date input"
              />
             <Button   mt="sm"
                onClick={(e) => {
                  formatDate();
                  e.preventDefault();
                }}>Convert</Button>
            </form>
            <p  className="mt-3">
              {task1Result}
            </p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 2</h2>
            <p>Convert Date Format</p>
            <form>
            <TextInput
              value={correctFormat}
              onChange={(e) => setCorrectFormat(e.target.value)}
              label="Date input"
              placeholder=
              "Date input"
              />
             <Button   mt="sm"
                onClick={(e) => {
                  convertIntoOpposite();
                  e.preventDefault();
                }}>Convert</Button>
            </form>
            <p  className="mt-3">
              {task2Result}
            </p>
          </Card>
        </Grid.Col>
    
      </Grid>
    </Container>
  );
};

export default WeekTwo;
