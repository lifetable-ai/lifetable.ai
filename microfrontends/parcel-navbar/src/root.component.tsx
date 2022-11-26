import { useEffect, useState } from 'react'
import './root.component.css'

const AppNavbar: React.FC = (props: any) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('')

  const toLogout = () => {
    const email = localStorage.getItem('email')
    if (email) {
      // @ts-ignore
      window.Sentry.captureMessage(`[Logout] ${email}`, 'log')
    }
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/'
  }

  useEffect(() => {
    const _ = (color) => {
      setBackgroundColor(color)
    }
    // @ts-ignore
    window.Evt.AppNavbar?.on('backgroundColor', _)
  }, [])

  return (
    <>
      <div className='app-navbar-container'>
        <div className="app-navbar card-effect" style={{ backgroundColor: backgroundColor }}>
          <div className='left-container'>
            { props.leftArr.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`bottom-button ${item.disable && 'disabled-button'}`}
                    disabled={item.disable}
                    data-event-name={`AppNav-${item.name}`}
                    onClick={() => {
                      window.location.href = `/app/${item.name.toLocaleLowerCase()}`
                    }}
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
                  data-event-name={`AppNav-${item.name}`}
                  className={item.disable ? 'bottom-button disabled-button' : 'bottom-button'}
                  disabled={item.disable}
                >{item.name}</button>
              )
            }) }
  
            <button
              className='bottom-button'
              onClick={() => { toLogout() }}
            >Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppNavbar
