import type { NextPage } from 'next'
import { Sample2Component } from './Sample2Component'

const Home: NextPage = () => {
  const item = {
    hoge: 'hello',
    propFunction: (): void => {
      console.log('propFunction')
    }
  }

  return (
    <Sample2Component item={ item } />
  )
}

export default Home

