import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import * as S from '../styles/pages/Home.styles'

const Home = () => {
  return (
    <S.Container>
      <Header />

      <MainContent />

      <Footer />
    </S.Container>
  )
}

export default Home
