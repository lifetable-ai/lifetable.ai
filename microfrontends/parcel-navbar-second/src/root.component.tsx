import { useEffect } from 'react'
import './root.component.css'

const AppNavbar: React.FC = (props: any) => {
  const toLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/'
  }

  useEffect(() => {
    console.log('!!!props', props)
  }, [])

  return (
    <div className='app-navbar-container'>
      <div className="app-navbar card-effect">
        <div className='left-container'>
          { props.leftArr.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`bottom-button ${item.disable && 'disabled-button'}`}
                  disabled={item.disable}
                >{item.name}</button>
              )
          }) }

          <button className='bottom-button'>+</button>
        </div>
        <div className='right-container'>
          { props.rightArr.map((item, index) => {
            return (
              <button
              key={index}
                className={`bottom-button ${item.disable && 'disabled-button'}`}
                disabled={item.disable}
              >{item.name}</button>
            )
          }) }

          <button className='bottom-button' onClick={() => { toLogout() }}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default AppNavbar
