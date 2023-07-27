import Link from 'next/link'
import { styled } from '../stitches.config'
import { Title } from './Title'

export default function Footer() {
  const links = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/4llves',
      icon: {
        name: 'ri-twitter-fill',
        primaryColor: 'primary  ',
        secondaryColor: 'secondary',        
      }      
    },
    {
      title: 'GitHub',
      url: 'https://github.com/4llves',
      icon: {
        name: 'ri-github-line',
        primaryColor: 'secondary',
        secondaryColor: 'secondary',
      }
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/4llves',
      icon: {
        name: 'ri-linkedin-line',
        primaryColor: 'secondary',
        secondaryColor: 'secondary',
      }
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/4llves_',
      icon: {
        name: 'ri-instagram-line',
        primaryColor: 'secondary',
        secondaryColor: 'secondary',
      }
    },
    {
      title: 'Rocketseat',
      url: 'https://app.rocketseat.com.br/me/4llves',
      icon: {
        name: 'ri-rocket-line',
        primaryColor: 'secondary',
        secondaryColor: 'secondary',
      }
    },
  ]

  const renderAnchor = (link, index) => {
    return (
      <Link
        key={index}
        href={link.url}
        passHref        
        {...(link.url.startsWith('http') ? { target: '_blank' } : {})}
      >
      <Anchor>
        <LinksFooter {...link}/>
        <Icon className={link.icon.name} />
      </Anchor>
    </Link>)
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
  '&:hover': {
    color: '$primary',    
  },
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

const LinksFooter = styled(Title, {
  display: 'none',
  '@bp2': { display: 'block' },
  fontSize: '15px',
  lineHeight: '24px',
  fontWeight: '100',
  fontFamily: 'var(--fonts-body)',
  marginBottom: '0px'
})