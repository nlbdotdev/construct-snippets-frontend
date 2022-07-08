import { SimpleGrid, Card, Badge, Text, Group, useMantineTheme, Image, Button } from '@mantine/core'
import React from 'react'



export default function SnippetsGrid() {

  const theme = useMantineTheme()


  const testCard = <Card shadow="sm" p="lg">



    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
      <Text weight={500}>Norway Fjord Adventures</Text>
      <Badge color="pink" variant="light">
        On Sale
      </Badge>
    </Group>

    <Text size="sm">
      With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway
    </Text>

    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
      Book classic tour now
    </Button>



  </Card>

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1400, cols: 2, spacing: 'sm' },
        { maxWidth: 1020, cols: 1, spacing: 'sm' },
      ]}

    >

      {testCard}
      {testCard}
      {testCard}
      {testCard}
      {testCard}
      {testCard}
      {testCard}
      {testCard}
      
    </SimpleGrid>
  )
}
