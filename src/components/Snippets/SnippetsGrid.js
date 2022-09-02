import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SimpleGrid, Container, Card, Text, Group, useMantineTheme, Button, Stack, Center, ActionIcon, UnstyledButton, Box } from '@mantine/core'
import { Star, Copy, MathFunction, Download, CirclePlus } from 'tabler-icons-react';
import axiosAPI from '../../util/axiosAPI';
import SnippetCard from './SnippetCard';

export default function SnippetsGrid(props) {

  const { view } = props
  let [hasData, setHasData] = useState(false)
  let [snippets, setSnippets] = useState([{}])
  let route = '/snippets'

  // Fetch snippets from server
  useEffect(() => {
    if (view === 'mine') { route = '/snippets/my-snippets' }
    axiosAPI.get(route)
      .then(response => {
        if (response.status === 200) {
          console.log('SUCCESS:', response.data)
          setSnippets(response.data.payload)
          setHasData(true)
        } else {
          console.log('fetch error')
        }
      })
      .catch(error => {
        console.log('fetch error', error)
      })
  }, [])

  // New snippet button
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
      <Link to={'/new'} key={'new'}>
        <CirclePlus size={96} strokeWidth={2} />
      </Link>
    </Card>

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >

      {/* If user is in their own collection, show add card */}
      {view === 'mine' && newCard}

      {hasData && snippets.map((snippet, i) => {
        return <SnippetCard snippet={snippet} key={`snippet-${i}`} />
      })}

    </SimpleGrid>
  )
}