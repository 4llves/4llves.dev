import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { ListGroup } from '../components/ListGroup'
import ListItem from '../components/ListItem'
import { voice } from '../data/podcasts'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Alves Jhonata',
    tagline: 'Ideas. Thoughts. Opinions.',
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
  const description = `Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called ByteTalk.`

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
        <ListGroup>{renderFeatured(voice)}</ListGroup>

        <h2>Voice</h2>
        <p>
          Testando.
        </p>
        <ListGroup>{renderEpisode(voice)}</ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

Podcasts.Layout = Base

export default Podcasts
