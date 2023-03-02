import React from 'react'
import { Hello } from '../components/layouts/pages/Hello/Hello'

const HelloPage = () => {
  return <Hello />
}

export default HelloPage

export async function getStaticProps() {
  return {
    props: {},
  }
}
