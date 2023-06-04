import nightwind from "nightwind/helper"

function App() {
  return (
    <>
      <div className="bg-primary-600 text-secondary-300">Hello</div>
      <button onClick={() => nightwind.toggle()}>Mode</button>
    </>
  )
}

export default App
