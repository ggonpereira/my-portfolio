import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import * as S from '../styles/pages/Home.styles'

const Home = () => {
  return (
    <S.Container>
      <Header />

      <div style={{ flex: 1 }} />

      <Footer />
    </S.Container>
  )
}

export default Home
