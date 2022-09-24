import { useEffect, useState } from "react"

type HogeProps = {
  hoge: string;
  propFunction: () => void;
}

const func1 = () => {
  console.log('func1')
}

const SampleComponent = (props: HogeProps) => {

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
    props.propFunction()
  }, [props.propFunction])
  
  return (
    <>
      <h1>hoge</h1>
      { props.hoge }
      <button onClick={() => setCounter(counter + 1)} >+1</button>
    </>
  )
}

export { SampleComponent }