import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import useWindowDimensions from '../hooks/useWindowDimensions'
import * as S from '../styles/pages/Home.styles'

const Home = () => {
  const { width } = useWindowDimensions()

  if (!width) return null

  return (
    <S.Container>
      <Header />

      <MainContent />

      {width > 414 && <Footer />}
    </S.Container>
  )
}

export default Home
