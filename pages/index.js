import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { PostContainer, PostContent, PostMain } from '../components/Post'
import ShortcutHome from '../components/ShortcutHome'
import { Wrapper } from '../components/Wrapper'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  return {
    props: {
      tagline: 'Alves Jhonata',
      title: 'Alves Jhonata',
      description: 'Desvendando problemas e criando soluções através da tecnologia.',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'pink',
      secondaryColor: 'purple',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://4llves.dev/" property="og:url" />
        <meta content={`https://4llves.dev${image}`} property="og:image" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div style={{ display: 'flex' }}>
              <div>
                <h1>{title}</h1>
                <p>
                  <strong>Desenvolvedor Front-end | RPA{' '}
                  </strong><br />
                  {description}
                </p>
                <ShortcutHome />
              </div>
            </div>

          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})
