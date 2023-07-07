import { format, parseISO } from 'date-fns'
import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { Box } from '../components/Box'
import FeaturedTalk from '../components/FeaturedTalk'
import items from '../data/talks'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // 4llves',
    tagline: 'Talks, Meetups, Eventos.',
    image: '/static/images/talks-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Talks(props) {
  const renderFeatured = () => {
    const featured = ['NEJS Conf', 'Nordic.JS', 'SFHTML5']

    return items
      .map(item => {
        return item.talks.filter(talk => featured.includes(talk.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .map((item, index) => {
        return <FeaturedTalk key={index} talk={item[0]} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <p>{item.summary}</p>
          {item.talks.map((talk, tIndex) => {
            return <TalkItem key={tIndex} talk={talk} />
          })}
        </div>
      )
    })
  }

  const getTotalTalks = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].talks.length
    }

    return total
  }

  const { title, image } = props
  const description = `Aqui listo os eventos que participei e talks que palestrei ou irei palestrar 😉`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://4llves.dev/talks" property="og:url" />
        <meta content={`https://4llves.dev${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        {/* <h2>Todos os eventos</h2>
        <Box css={{ margin: '10px 0 0 -20px' }}>{renderFeatured()}</Box> */}

        <h2>Todos os eventos</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </>
  )
}

function TalkItem(props) {
  const { talk } = props

  return (
    <div>
      <h3>
        <a href={talk.url} target="_blank">
          {talk.title}
        </a>
      </h3>
      <ul>
        <li>
          <em>Quando:</em> {format(parseISO(talk.date), 'LLLL, d')}
        </li>
        <li>
          <em>Local:</em> {talk.where}
        </li>
        <li>
          <em>Tema:</em> {talk.theme}
        </li>
        {talk.attendees && (
          <li>
            <em>Attendees:</em> {talk.attendees}
          </li>
        )}
        {talk.presentations &&
          talk.presentations.map((presentation, pIndex) => {
            return (
              <li key={pIndex}>
                <em>Presentation:</em>{' '}
                <a href={presentation.url} target="_blank">
                  {presentation.title}
                </a>{' '}
                {presentation.video && (
                  <a href={presentation.video} target="_blank">
                    (Video)
                  </a>
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Talks.Layout = Base

export default Talks
