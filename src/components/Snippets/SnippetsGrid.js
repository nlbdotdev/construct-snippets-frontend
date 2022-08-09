import { SimpleGrid, Container, Card, Text, Group, useMantineTheme, Button, Stack, Center, ActionIcon, UnstyledButton, Box } from '@mantine/core'
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
    desc: 'Convert a number into a currency formated string. Accepts custom symbols. More text here that will be cut off because the description is too long.',
    // Will need to escape escape chars, should do so algorithmically
    clipboard: `{"is-c3-clipboard-data":true,"type":"events","items":[{"functionName":"Function8","functionDescription":"","functionCategory":"","functionReturnType":"none","functionIsAsync":false,"functionParameters":[],"eventType":"function-block","conditions":[],"actions":[{"id":"log","objectClass":"Browser","parameters":{"type":"log","message":"\\"hello\\""}}]}]}`
  }
]


export default function SnippetsGrid() {

  const theme = useMantineTheme()
  let item = data[0]

  const testCard =
    <Card shadow="sm" p="lg"
      onClick={() => console.log('card pressed')}
      sx={(theme) => ({
        '&:hover': {
          backgroundColor: theme.colors.gray[1],
          cursor: 'pointer',
        },
      })}
    >

      {/* Top */}
      <Group
        position="left"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
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
      <Text size="md" align='left' my='sm' lineClamp={3}>{item.desc}</Text>
      <Stack spacing='0' my='md'>
        <Text size="sm" align='left'>Author: {item.author}</Text>
        <Text size="sm" align='left'>Updated: {item.updated}</Text>
        <Text size="sm" align='left'>Uploaded: {item.uploaded}</Text>
      </Stack>

      {/* Bottom */}
      <Group position='right'>
        <Button
          onClick={(event) => {
            console.log('button pressed')
            event.stopPropagation()
            navigator.clipboard.writeText(item.clipboard);
          }}
        >
          <Copy size={24} />
        </Button>
      </Group>

    </Card>

  const newCard =
    <Card shadow="sm" p="lg"
      onClick={() => console.log('new card pressed')}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': {
          backgroundColor: theme.colors.gray[1],
          cursor: 'pointer',
        },
      })}
    >
      <CirclePlus size={96} strokeWidth={2} />
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