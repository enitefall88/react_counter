import React, {useState} from 'react'

function App() {
  let [counter, setCounter] = useState(0)

  return <div>
    <Button type={"info"} onClick={() =>
        setCounter(counter -= 1)
    }>
      -
    </Button>
    {"   "}
    <span className="badge badge-light"><h6>{counter}</h6></span>
    {"   "}
    <Button type={"info"} onClick={() =>
        setCounter(counter += 1)
    }>
      +
    </Button>

  </div>

}

function Button({type, children, onClick}) {
  return <button onClick={onClick} type="button" className={`btn btn-${type}`}>
    {children}
  </button>
}

export default App;
