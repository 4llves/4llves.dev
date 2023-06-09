import Link from 'next/link'
import { styled } from '../stitches.config'
import rocketIcon from '../public/static/svg/rocket.svg'

export default function Footer() {
  const links = [
    // {
    //   title: 'Email',
    //   url: '/contact',
    //   icon: 'ri-mail-line',
    // },
    {
      title: 'Twitter',
      url: 'https://twitter.com/4llves',
      icon: 'ri-twitter-fill',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/4llves',
      icon: 'ri-github-line',
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/4llves',
      icon: 'ri-linkedin-line',
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/4llves_',
      icon: 'ri-instagram-line',
    },
    {
      title: 'Rocketseat',
      url: 'https://app.rocketseat.com.br/me/4llves',
      // icon: rocketIcon,
    },
  ]

  const renderAnchor = (link, index) => {
    if (link.url.startsWith('http')) {
      return <Anchor key={index} href={link.url} target="_blank">
        <Title>{link.title}</Title>
        <Icon className={link.icon} />
      </Anchor>
    }

    return <Link key={index} href={link.url} passHref>
      <Anchor>
        <Title>{link.title}</Title>
        <Icon className={link.icon} />
      </Anchor>
    </Link>
  }

  return (
    <Container>
      {links.map(renderAnchor)}
    </Container>
  )
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '24px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const Anchor = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1,
  },
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
