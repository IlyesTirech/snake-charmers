import React, { useState } from 'react';
import { Container, Grid, Card, TextInput, Button, Code } from '@mantine/core';
import { DateInput } from '@mantine/dates';

const WeekTwo: React.FC = () => {
  // Task 1
  const [task1Result, setTask1Result] = useState<string>('');
  const [date, setDate] = useState<any>();

  const formatDate = () => {
    setTask1Result(date.toISOString().slice(0, 10));
  };

  // Task 2
  const [correctFormat, setCorrectFormat] = useState<string>('');
  const [task2Result, setTask2Result] = useState<string | null>(null);
  const [task3aResult, setTask3aResult] = useState<string>('');
  const [task3bResult, setTask3bResult] = useState<string>('');
  const [task3cResult, setTask3cResult] = useState<string>('');

  function detectAndConvertFormat() {
    // Regular expression for the date string format: "23rd October 2023"
    const dateFormatRegex = /^(\d{1,2})(st|nd|rd|th)?\s+(\w+)\s+(\d{4})$/;

    // Check if the input string matches the custom format
    const isCustomFormat = dateFormatRegex.test(correctFormat);

    if (isCustomFormat) {
      setTask2Result(convertToISOFormat());
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(correctFormat)) {
      setTask2Result(convertToCustomFormat());
    } else {
      setTask2Result('Not a valid format.');
    }
  }
  function convertToISOFormat() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    // Split the input string into day, month, and year
    const [day, monthName, year] = correctFormat.split(' ');

    // Find the index of the month in the array
    const monthIndex = months.indexOf(monthName);

    // Check if the date components are valid
    if (monthIndex === -1 || isNaN(parseInt(day)) || isNaN(parseInt(year))) {
      console.error('Invalid date format');
      return null;
    }

    // Create a Date object and format it to ISO string
    const isoDate = new Date(parseInt(year), monthIndex, parseInt(day))
      .toISOString()
      .split('T')[0];

    setTask2Result(isoDate);
    return isoDate;
  }
  function convertToCustomFormat() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
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

  // const t1Code = `  const formatDate = () => {
  //   setTask1Result(date.toISOString().slice(0, 10));
  // };`
  // const t2Code = <pre>{`
  // function detectAndConvertFormat() {
  // const dateFormatRegex = /^(\d{1,2})(st|nd|rd|th)?\s+(\w+)\s+(\d{4})$/;

  // const isCustomFormat = dateFormatRegex.test(correctFormat);

  //   if (isCustomFormat) {
  //     setTask2Result(convertToISOFormat());
  //   } else if (/^\d{4}-\d{2}-\d{2}$/.test(correctFormat)) {
  //     setTask2Result(convertToCustomFormat());
  //   } else {
  //     setTask2Result('Not a valid format.');
  //   }
  // }`}</pre>
  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 2</h1>

      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>Convert Date Format</p>
            {/* <Code>
              {t1Code}
            </Code> */}
            <form>
              <DateInput
                value={date}
                onChange={setDate}
                label="Date input"
                placeholder="Date input"
              />
              <Button
                mt="sm"
                onClick={(e) => {
                  formatDate();
                  e.preventDefault();
                }}>
                Convert
              </Button>
            </form>
            <p className="mt-3">{task1Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 2</h2>
            <p>Convert Date Format</p>
            {/* <Code>
              {t2Code}
            </Code> */}
            <form>
              <TextInput
                value={correctFormat}
                onChange={(e) => setCorrectFormat(e.target.value)}
                label="Date input"
                placeholder="Date input"
              />
              <Button
                mt="sm"
                onClick={(e) => {
                  detectAndConvertFormat();
                  e.preventDefault();
                }}>
                Convert
              </Button>
            </form>
            <p className="mt-3">{task2Result}</p>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 3</h2>
            <p>Performing operations using a Date and Time API</p>
            <Card withBorder>
              <h3>Task a: Instantiate the current date</h3>
              <p>
                This can be achieved in Typescript using the following code:
              </p>
              <Code>const currentDate = new Date();</Code>
              <p>Click the button to try it out:</p>
              <Button
                onClick={() => {
                  const currentDate = new Date();
                  setTask3aResult('Current Date: ' + currentDate);
                  // You can perform any other actions with the currentDate object as needed.
                }}>
                Get Current Date
              </Button>
              <p className="mt-3">{task3aResult}</p>
              <p className="mt-3">
                In software development, you often need to log events, record
                timestamps, or work with time-sensitive data. Instantiating the
                current date provides an accurate timestamp for activities, such
                as logging when an event occurred or tracking the time of user
                interactions. For example, when debugging, you might log the
                current date and time to identify when specific actions or
                errors occurred.
              </p>
            </Card>
            <Card withBorder>
              <h3>Task B: Compare two dates</h3>
              <p>
                To compare two dates and see which one is larger (further in the
                future), you can use the following code:
              </p>
              <Code>
                <pre>{`const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 7); // Add 7 days for example

if (currentDate < futureDate) {
  console.log('Future date is larger:', futureDate);
} else if (currentDate > futureDate) {
  console.log('Current date is larger:', currentDate);
} else {
  console.log('Dates are equal.');`}</pre>
              </Code>
              <p>Click the button to compare dates:</p>
              <Button
                onClick={() => {
                  const currentDate = new Date();
                  const futureDate = new Date(currentDate);
                  futureDate.setDate(currentDate.getDate() + 7);

                  if (currentDate < futureDate) {
                    setTask3bResult('Future date is larger: ' + futureDate);
                  } else if (currentDate > futureDate) {
                    setTask3bResult('Current date is larger: ' + currentDate);
                  } else {
                    setTask3bResult('Dates are equal.');
                  }
                }}>
                Compare Dates
              </Button>
              <p className="mt-3">{task3bResult}</p>
              <p className="mt-3">
                In applications dealing with scheduling, deadlines, or
                time-sensitive events, comparing two dates is crucial. For
                instance, in project management software, you might use date
                comparison to determine if a task or milestone is overdue or to
                sort and filter events based on their occurrence. Date
                comparison is also valuable when handling subscriptions, trial
                periods, or any scenario where you need to assess the
                relationship between two points in time.
              </p>
            </Card>
            <Card withBorder>
              <div>
                <h3>Task C: Get only the current day</h3>
                <p>
                  To get only the current day from the current date, you can use
                  the following code:
                </p>
                <Code>
                  <pre>{`const currentDate = new Date();
const currentDay = currentDate.getDate();`}</pre>
                </Code>
                <p>Click the button to get the current day:</p>
                <Button
                  onClick={() => {
                    const currentDate = new Date();
                    const currentDay = currentDate.getDate();
                    setTask3cResult('Current Day: ' + currentDay);
                  }}>
                  Get Current Day
                </Button>
                <p className="mt-3">{task3cResult}</p>
                <p className="mt-3">
                  Extracting the current day is handy when dealing with tasks
                  that are specific to a particular day, such as generating
                  daily reports, setting reminders, or implementing features
                  like a calendar view. For example, you might use the current
                  day to filter and display events that are relevant to the user
                  on the current day in a calendar application. It's also useful
                  when implementing features like "Today's Highlights" or daily
                  statistics.
                </p>
              </div>
            </Card>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default WeekTwo;
