import type { NextPage } from 'next'
import { SampleComponent } from './SampleComponent'

const Home: NextPage = () => {
  const item = {
    hoge: 'hello',
    propFunction: (): void => {
      console.log('propFunction')
    }
  }

  return (
    <SampleComponent { ...item } />
  )
}

export default Home
