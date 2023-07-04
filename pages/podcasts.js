import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { ListGroup } from '../components/ListGroup'
import ListItem from '../components/ListItem'
import { SpaceSquad } from '../data/podcasts'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Alves Jhonata',
    tagline: 'Ideias. Pensamentos. Opiniões.',
    image: '/static/images/podcasts-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: { ...meta }, revalidate: 60 }
}

function Podcasts(props) {
  const renderFeatured = items => {
    const featured = [
      'Open Source Lessons Learned on The Changelog',
      'Creating Dracula PRO with Blood, Sweat, and Tears on Sustain OSS',
      'Habits of Highly Productive Developers on Junior to Senior',
    ]

    return items
      .filter(item => featured.includes(item.title))
      .map((item, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            href={item.url}
            title={item.title}
            date={item.date}
          />
        )
      })
  }

  const renderEpisode = items => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={index}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      )
    })
  }

  const { title, image } = props
  const description = `O áudio é um meio poderoso e uma ótima maneira de <strong>debater ideias</strong>.`


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://4llves.dev/podcasts" property="og:url" />
        <meta content={`https://4llves.dev${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Podcasts</h2>
        <ListGroup>{renderFeatured(SpaceSquad)}</ListGroup>

        <h2>SpaceSquad</h2>
        <ListGroup>{renderEpisode(SpaceSquad)}</ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

Podcasts.Layout = Base

export default Podcasts
