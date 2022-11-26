import Parcel from "single-spa-react/parcel"
import GameContainer from "./components/game-container"

import './root.component.css'

const AppTitle: React.FC<any> = () => {
  return (
    <div className="title" style={{
      color: 'white',
      margin: '30px 0 30px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>
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
  return (
    <div className="root-container">
      <AppTitle />
      <GameContainer />
      <div style={{ color: 'white' }}>
        <Parcel
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
