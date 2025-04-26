import RemoteComponent from 'remoteApp/RemoteComponent'
import './App.css'
import BreadCum from './bread-cum/bread-cum'
import Header from './header/header'
import LeftSidePanel from './left-side-panel/left-side-panel'



function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex w-2xs">
          <LeftSidePanel />
        </div>
        <div className="w-full pt-2 pl-4">
          <BreadCum />
          <div id="remote-container" className="bg-primary-color w-full">
            <RemoteComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
