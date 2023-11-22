import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Grid
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  let navigate = useNavigate();
  const onClickWeek1 = () => {
    console.log('changePage');

    navigate('/week1');
  };
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          {' '}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Week 1: FizzBuzz</Text>
              <Badge color="green" variant="light">
                Done
              </Badge>
            </Group>
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              onClick={onClickWeek1}>
              Check out the solution
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Cards;
