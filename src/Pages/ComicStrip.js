import styled from 'styled-components'
import { ComicBox } from '../Components/ComicBox'

export const ComicStrip = () => {
  return (
    <Container>
      <h1>Title</h1>
      <h4>Names and Introductions</h4>
      <section className='comic-grid'>
        <ComicBox image={"TestImage.webp"}/>
        <ComicBox image={"TestImage.webp"}/>
        <ComicBox image={"TestImage.webp"}/>
        <ComicBox image={"TestImage.webp"}/>
        <ComicBox image={"TestImage.webp"}/>
        <ComicBox image={"TestImage.webp"}/>
      </section>
      <p>Description Block</p>
    </Container>
  )
}

const Container = styled.div`
  h1{
    font-size: 2.5em;
  }
  h4{
    font-size: 1.25em;
  }
  p{
    padding: 0 1.25em 2.5em 1.25em;
    @media screen and (min-width: 40em){
      padding: 0 2.5em 2.5em 2.5em;
    }
  }
  h1, h4{
    display: inline-flex;
    width: 100%;
    justify-content: center;
  }
  .comic-grid{
    display: grid;
    grid-column-gap: 2.5em;
    grid-row-gap: 2em;
    grid-template-columns: 1fr;
    padding: 2.5em 1.25em;
    width: 100%;
  }
  @media screen and (min-width: 40em){
    .comic-grid{
      grid-template-columns: repeat(2, 1fr);
      padding: 2.5em 2.5em;
    }
  }
`