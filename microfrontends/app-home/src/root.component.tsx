import { useEffect, useRef, useState } from "react"
import Parcel from "single-spa-react/parcel"
import HomeContainer from "./components/home-container"

import './root.component.css'

const AppTitle: React.FC<any> = () => {
  return (
    <div className="title" style={{ color: 'white', margin: '30px 0 30px', textAlign: 'center' }}>
      <h1>
        <b><i>Ningowood, A brand new platform to build EVERY part of your daily life!</i></b>
      </h1>
      <h3>
        - Your Own Data Matters More -
      </h3>
    </div>
  )
}

const Root: React.FC<any> = (props) => {
  const [isFirstNavbar, setIsFirstNavbar] = useState<boolean>(true)
  const navbarParcelRef = useRef(null)
  const navbarParcelSecondRef = useRef(null)
  
  useEffect(() => {
    if (isFirstNavbar) {
      // @ts-ignore
      navbarParcelRef?.current?.parcel?.mount()
      navbarParcelSecondRef?.current?.parcel?.unmount()
    } else {
      // @ts-ignore
      navbarParcelRef?.current?.parcel?.unmount()
      navbarParcelSecondRef?.current?.parcel?.mount()
    }
  }, [navbarParcelRef, isFirstNavbar])

  return (
    <div className="root-container">
      <AppTitle />
      <HomeContainer />
      {/* <AppNavbar /> */}
      <div style={{
        color: 'white',
        width: '100%',
        textAlign: 'center',
      }}>
        <button
          style={{
            background: 'green',
            border: '2px solid #fff',
            marginLeft: '2px',
            padding: '0 5px'
          }}
          onClick={() => {
            // @ts-ignore
            window.Evt.AppNavbar?.emit('backgroundColor', '#91b956')
          }}
        >
          Set 1st Navbar Background [Event]
        </button>
        <button
          style={{
            background: 'red',
            border: '2px solid greenyellow',
            marginLeft: '2px',
            padding: '0 5px'
          }}
          onClick={() => { setIsFirstNavbar(!isFirstNavbar) }}
        >Toggle Mount Navbar! ({ isFirstNavbar ? '1st' : '2nd' }) [Parcel]</button>
        {/* <button
          style={{
            background: 'blue',
            border: '2px solid #fff',
            marginLeft: '2px',
            padding: '0 5px'
          }}
          onClick={() => {
            // @ts-ignore
            window.Evt.AppNavbar.emit('visible', !window.Store.AppNavbar.get('visible'))
          }}
          // @ts-ignore
        >{ window.Store.AppNavbar.get('visible') ? 'Hide' : 'Show' } 1st Navbar Visible</button> */}
      </div>
      <div style={{ color: 'white' }}>
        <Parcel
          ref={navbarParcelRef}
          // @ts-ignore
          config={() => System.import("@ningowood/parcel-navbar")}
          wrapWith="div"
          wrapStyle={{ color: 'red' }}
          handleError={(err) => alert(err)}
          parcelDidMount={() => { console.log('React Parcel Nav 1 Mounted') }}
          leftArr={[
            { name: 'Home', disable: false },
            { name: 'Film', disable: false },
            { name: 'Game', disable: false },
            { name: 'Football', disable: false },
            { name: 'OSC', disable: false },
            { name: 'Football', disable: false },
          ]}
          rightArr={[
            { name: 'About', disable: true },
            { name: 'Market', disable: true },
            { name: 'Explore', disable: true },
            { name: 'Basic', disable: true },
            { name: 'Build', disable: true },
          ]}
        />
        <Parcel
          ref={navbarParcelSecondRef}
          // @ts-ignore
          config={() => System.import("@ningowood/parcel-navbar-second")}
          wrapWith="div"
          wrapStyle={{ color: 'red' }}
          handleError={(err) => alert('err')}
          parcelDidMount={() => { console.log('React Parcel Nav 2 Mounted') }}
          leftArr={[
            { name: 'Resume', disable: true },
            { name: 'Blog', disable: true },
            { name: 'Company', disable: true },
            { name: 'University', disable: true },
            { name: 'OS Repo', disable: true },
            { name: 'Medical', disable: true },
          ]}
          rightArr={[
            { name: 'Analysis', disable: true },
            { name: '3RD', disable: true },
            { name: 'API', disable: true },
            { name: 'User', disable: true },
            { name: 'Application', disable: true },
          ]}
        />
      </div>
      <div className='bottom-container'>
        <span>@2023 www.ningowood.com. All right reserved. </span>
        <span>v0.1.0.build-20221126. </span>
        <a target="_blank" href="https://github.com/hylerrix" style={{ color: 'white' }}>More features coming soon...</a>
      </div>
    </div>
  )
}

export default Root
