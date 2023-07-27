import { styled } from "../stitches.config"

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
})

export const Title = ({ primaryColor = 'primary', secondaryColor = 'secondary', title, ...rest }) => {
  return <GradientTitle
    css={{
      backgroundImage: `linear-gradient(
    135deg,
    $${primaryColor} 0%,
    $${secondaryColor} 100%
  );`,
    }}
    {...rest}
  >
    {title}
  </GradientTitle>
}