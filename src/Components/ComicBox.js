import styled from 'styled-components'

export const ComicBox = ({image}) => {
  return (
    <Container>
      <img src={image} alt="hey" />
    </Container>
  )
}

const Container = styled.div`
  grid-column: span 1;
  img{
    border-radius: 0.3em;
    width: 100%;
  }
`