import React, { useState } from 'react';
import { Container, Grid, Card, TextInput, Button, Checkbox, Slider } from '@mantine/core';

const WeekOne: React.FC = () => {

    const [password, setPassword] = useState<string>('')
    const [passwordLength, setPasswordLength] = useState<number>(0)
    const [isUppercase, setIsUppercase] = useState<boolean>(false);
    const [isLowercase, setIsLowercase] = useState<boolean>(false);
    const [isNumber, setIsNumber] = useState<boolean>(false);
    const [isSymbol, setIsSymbol] = useState<boolean>(false);

    console.log({passwordLength});
    
    console.log({isNumber});


    const generatePassword = () => {

      const random = (min,max) => {
        // Function to generate a random number between min and max (inclusive)
        // ...
      };
      
      const randomLower = () => {
        // Function to generate a random lowercase letter
        // ...
      };
      
      const randomUpper = () => {
        // Function to generate a random uppercase letter
        // ...
      };
      
      const randomSymbol = () => {
        // Function to generate a random symbol
        // ...
      };
  
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        let choice = random(0, 3);
        if (isLowercase && choice === 0) {
          password += randomLower();
        } else if (isUppercase && choice === 1) {
          password += randomUpper();
        } else if (isSymbol && choice === 2) {
          password += randomSymbol();
        } else if (isNumber && choice === 3) {
          password += random(0, 9);
        } else {
          i--;
        }
      }
      setPassword(password);
    };
    

    return (
    <Container size="sm">
      <h1 className="title mt-5">Password Generator</h1>
      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <form>
          <Slider
      color="blue"
      max={20}
      marks={[
        { value: 0, label: '0' },
        { value: 10, label: '10' },
        { value: 20, label: '20' },
      ]}
      value={passwordLength} onChange={setPasswordLength}
    />
              <Checkbox 
                radius = 'xl'
                label = 'Uppercase letters'
                onChange={(event) => setIsUppercase(event.currentTarget.checked)}
              />
              <Checkbox
                radius = 'xl'
                label = 'Lowercase letters'
                onChange={(event) => setIsLowercase(event.currentTarget.checked)}
              />
              <Checkbox
                radius = 'xl'
                label = 'Symbols'
                onChange={(event) => setIsSymbol(event.currentTarget.checked)}
              />
              <Checkbox
                radius = 'xl'
                label = 'Numbers'
                onChange={(event) => setIsNumber(event.currentTarget.checked)}
              />
              <Button
                mt="sm"
              >
                Generate Password
              </Button>
            </form>
            <p id="w1t1" className="mt-3">
              {}
            </p>
          </Card>
        </Grid.Col>
       
      </Grid>
    </Container>
  );
};

export default WeekOne;
