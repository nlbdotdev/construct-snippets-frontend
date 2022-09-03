import React from 'react'
import { Container, Card, Text, Group, useMantineTheme, Button, Stack } from '@mantine/core'
import { Star, Copy, MathFunction, Download } from 'tabler-icons-react';
import { parseISO, format } from 'date-fns'

let dummyData =
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

export default function SnippetCard(props) {

  const { snippet } = props
  const theme = useMantineTheme()
  
  return (
    <div>
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
              <Text weight={500}>{snippet.title}</Text>
            </Group>
            <Group>
              <Group spacing='5px'>
                <Star size={24} />
                {/* {snippet.rating} */}
                {dummyData.rating}
              </Group>
              <Group spacing='5px'>
                <Download size={24} />
                {/* {snippet.downloads} */}
                {dummyData.downloads}
              </Group>
            </Group>
          </Stack>
        </Group>

        {/* Body */}
        <Text size="md" align='left' my='sm' lineClamp={3}>{snippet.desc}</Text>
        <Stack spacing='0' my='md'>
          <Text size="sm" align='left'>Author: {snippet.authorName}</Text>
          <Text size="sm" align='left'>Updated:  {format(parseISO(snippet.createdAt), 'MMM d, yyyy')}</Text>
          <Text size="sm" align='left'>Uploaded:  {format(parseISO(snippet.updatedAt), 'MMM d, yyyy')}</Text>
        </Stack>

        {/* Bottom */}
        <Group position='right'>
          <Button
            onClick={(event) => {
              console.log('button pressed')
              event.stopPropagation()
              navigator.clipboard.writeText(snippet.clipboard);
            }}
          >
            <Copy size={24} />
          </Button>
        </Group>

      </Card>
    </div>
  )
}
