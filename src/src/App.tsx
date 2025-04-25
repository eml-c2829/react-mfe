import './App.css'
import Header from './header/header'
import LeftSidePanel from './left-side-panel/left-side-panel'

function App() {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <div className="flex w-2xs">
          <LeftSidePanel />
        </div>
        <div className="flex bg-amber-400 w-full h-full">
          Remote content
        </div>
      </div>
    </>
  )
}

export default App
