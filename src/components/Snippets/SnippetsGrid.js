import { SimpleGrid, Container, Card, Text, Group, useMantineTheme, Button, Stack, Center, ActionIcon, Box } from '@mantine/core'
import { Star, Copy, MathFunction, Download, CirclePlus } from 'tabler-icons-react';

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

  const testCard =
    <Card shadow="sm" p="lg">

      {/* Top */}
      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Stack>
          <Container
            size="xs" p="xs"
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[3],
              borderRadius: '100px',
            })}
          >
            <MathFunction
              size={32}
            />
          </Container>
        </Stack>

        <Stack spacing='xs'>

          <Group>
            <Text weight={500}>{item.title}</Text>
          </Group>

          <Group>
            <Group spacing='5px'>
              <Star size={24} />
              {item.rating}
            </Group>

            <Group spacing='5px'>
              <Download size={24} />
              {item.downloads}
            </Group>
          </Group>

        </Stack>
      </Group>


      {/* Body */}
      <Stack spacing='0' my='md'>
        <Text size="sm" align='left'>Author: {item.author}</Text>
        <Text size="sm" align='left'>Updated: {item.updated}</Text>
        <Text size="sm" align='left'>Uploaded: {item.uploaded}</Text>
      </Stack>

      {/* Bottom */}
      <Group position='right'>
        <Button>
          <Copy size={24} />
        </Button>
      </Group>

    </Card>

  const newCard =
    <Card shadow="sm" p="lg"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      <ActionIcon size="xxl" radius="lg">
        <CirclePlus size={96} strokeWidth={2} />
      </ActionIcon>

    </Card>


  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >

      {newCard}
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