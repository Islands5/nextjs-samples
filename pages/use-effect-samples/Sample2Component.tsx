import { useEffect, useState, useRef } from "react"

type HogeProps = {
  item: {
    hoge: string;
    propFunction: () => void;
  }
}

const func1 = () => {
  console.log('func1')
}

const Sample2Component = ({ item }: HogeProps) => {

  const [counter, setCounter] = useState(0)
  const ref = useRef(true);

  const func2 = () => {
    console.log('func2')
  }

  useEffect(() => {
    if(ref.current) return

    func1()
  }, [func1])

  useEffect(() => {
    if(ref.current) return

    func2()
  }, [func2])

  useEffect(() => {
    if(ref.current) {
      ref.current = false
      return
    }

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

export { Sample2Component }