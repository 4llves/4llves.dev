import { styled } from '../stitches.config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { Title } from '../components/Title'

export default function Base({ children }) {
  const { title, tagline, primaryColor, ...rest } = children.props

  return (
    <Wrapper>
      <Navbar />
      <PostMain
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000',
          },
        }}
      >
        <PostContent>
          <PostContainer>
            <Title title={tagline || title} primaryColor={primaryColor} {...rest} />
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  )
}
