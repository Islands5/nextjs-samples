import { useEffect, useState } from "react"

type HogeProps = {
  item: {
    hoge: string;
    propFunction: () => void;
  }
}

const func1 = () => {
  console.log('func1')
}

const SampleComponent = ({ item }: HogeProps) => {

  const [counter, setCounter] = useState(0)

  const func2 = () => {
    console.log('func2')
  }

  useEffect(() => {
    func1()
  }, [func1])

  useEffect(() => {
    func2()
  }, [func2])

  useEffect(() => {
    item.propFunction()
  }, [item.propFunction])
  
  return (
    <>
      <h1>hoge</h1>
      { item.hoge }
      <button onClick={() => setCounter(counter + 1)} >+1</button>
    </>
  )
}

export { SampleComponent }