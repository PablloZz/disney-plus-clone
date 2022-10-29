import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import db from "../firebase"

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  
  useEffect(() => {
    // Grab movie info from DB
    db.collection("movies")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          // save the movie data
          console.log("Movie is", movie)
          setMovie(doc.data())
          console.log(doc.data())
        } else {
          // redirect to home page
        }
      })
    console.log(db.collection("movies").doc(id).get())
    // eslint-disable-next-line
  }, [])
    

  return (
    <Container>
      {
        movie &&
          <>
            <Background>
              <img src={movie.data.backgroundImg} alt="images"/>
            </Background>
            <ImageTitle>
              <img src={movie.data.titleImg} alt="images"/>
            </ImageTitle>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="button"/>
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="button"/>
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="button"/>
              </GroupWatchButton>
            </Controls>
            <SubTitle>{movie.data.subtitle}</SubTitle>
            <Description>
              {movie.data.description}
            </Description>
          </>
      }
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-heiht: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  height: 56px;
  padding: 0px 24px;
  margin-right: 22px;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`
