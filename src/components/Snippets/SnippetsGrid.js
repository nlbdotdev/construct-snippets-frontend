import { SimpleGrid, Card, Badge, Text, Group, useMantineTheme, Image, Button, Stack } from '@mantine/core'
import React from 'react'

const data = [
  {
    title: 'Currency Formatting',
    rating: 4.5,
    downloads: 1232,
    author: 'MyNameJeff',
    updated: '6/12',
    uploaded: '6/10/22',
    type: 'function',
    tags: ['money', 'essential', 'strings'],
    desc: 'This is my description',
    clipboard: '{"is-c3-clipboard-data":true,"type":"events","items":[{"functionName":"String_FormatMoney","functionDescription":"","functionCategory":"String","functionReturnType":"any","functionIsAsync":false,"functionParameters":[{"name":"money","type":"number","initialValue":"0","comment":""},{"name":"symbol","type":"string","initialValue":"$","comment":""}],"eventType":"function-block","conditions":[],"actions":[],"children":[{"eventType":"variable","name":"temp","type":"number","initialValue":"0","comment":"","isStatic":false,"isConstant":false},{"eventType":"variable","name":"temptext","type":"string","initialValue":"","comment":"","isStatic":false,"isConstant":false},{"eventType":"block","conditions":[],"actions":[{"id":"set-eventvar-value","objectClass":"System","parameters":{"variable":"temptext","value":"\"\""}},{"id":"set-eventvar-value","objectClass":"System","parameters":{"variable":"temp","value":"int(Money)"}}]'
  }
]


export default function SnippetsGrid() {

  const theme = useMantineTheme()
  let item = data[0]

  const testCard = <Card shadow="sm" p="lg">

    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
      <Stack>
        ICON
      </Stack>

      <Stack>


        <Text weight={500}>{item.title}</Text>
        <Group>

          X {item.rating}
          V {item.downloads}
        </Group>

      </Stack>
    </Group>

    <Stack>
    </Stack>


    <Text size="sm" align='left'>Author: {item.author}</Text>
    <Text size="sm" align='left'>Updated: {item.updated}</Text>
    <Text size="sm" align='left'>Uploaded: {item.uploaded}</Text>


    {/* <Text size="sm">
      With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway
    </Text>

    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
      Book classic tour now
    </Button>

    <Badge color="pink" variant="light">
      On Sale
    </Badge> */}



  </Card>

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
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
