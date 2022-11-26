import { useEffect, useState } from 'react'
import { loginUser, postLoginUser, postRegisterUser, registerUser } from './api'
import PopupModal from './components/popup-modal'
// import styles from './root.component.css'
import './root.component.less'

const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
type LoginMode = typeof LOGIN | typeof REGISTER

const RootLogin: React.FC = (props) => {
  const [loginMode, setLoginMode] = useState<LoginMode>(REGISTER)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<string>('')
  const [modalContent, setModalContent] = useState<string>('')

  const [emailInput, setEmailInput] = useState<string>('')
  const [usernameInput, setUserInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [rePasswordInput, setRePasswordInput] = useState<string>('')

  useEffect(() => {
    const iconDom = document.createElement('link')
    iconDom.rel = 'icon'
    iconDom.href = '/ningowood.png'
    document.getElementsByTagName('head')[0].appendChild(iconDom)
  }, [])

  useEffect(() => {
    openModal(
      'Hola. Welcome to Ningowood! Web 3.0 is coming.',
      '\
        This is a very first demo preview of Ningowood. \
        After online registration, ur data starts to be collected in the Ningo Cloud. \
        Register with ur real email to receive further updates! \
        (Only email will remain in the first stable release.) \
      '
    )
  }, [])

  useEffect(() => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    if (email?.length || password?.length) {
      openModal('Hi', 'U already login')
      window.location.href = '/app/home'
    }
  }, [])

  const openModal = (title, content) => {
    setModalTitle(title)
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const changeLoginMode = () => {
    setLoginMode(loginMode === LOGIN ? REGISTER : LOGIN)
  }

  const onFormSubmit = async () => {
    (loginMode === REGISTER) && toRegisterUser();
    (loginMode === LOGIN) && toLoginUser();
  }

  const toRegisterUser = async () => {
    const postData: postRegisterUser = {
      email: emailInput,
      username: usernameInput,
      password: passwordInput,
      rePassword: rePasswordInput,
    }
    const emailRegx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!emailRegx.test(postData.email)) {
      openModal('Email Error', '')
      return
    }
    if (postData.username.length < 3 || postData.username.length > 18) {
      openModal('Username Error', 'please input 3~18 character.')
      return
    }
    if (postData.password.length < 6 || postData.password.length > 18) {
      openModal('Password Error', 'please input 6~18 character.')
      return
    }
    if (postData.rePassword !== postData.password) {
      openModal('RePassword Error', 'please equal to password')
      return
    }
    try {
      const { data }: any = await registerUser(postData)
      if (data) {
        // @ts-ignore
        window.Sentry.captureMessage(`[Register] ${emailInput}`, 'log')
        toLoginUser()
      }
    } catch {
      openModal(`${loginMode} Error`, 'please double-check (Maybe email or username is already taken).')
    }
  }

  const toLoginUser = async () => {
    const postData: postLoginUser = {
      email: emailInput,
      password: passwordInput,
    }
    try {
      const { data } = await loginUser(postData)
      const { success } = data
      if (success) {
        // @ts-ignore
        window.Sentry.captureMessage(`[Login] ${emailInput}`, 'log')

        openModal('Login Success!', 'Welcome to Ningowood')
        localStorage.setItem('email', emailInput)
        localStorage.setItem('password', passwordInput)
        window.location.href = '/app/home'
      } else {
        throw ''
      }
    } catch {
      openModal(`${loginMode} Error!`, 'Did u forget register? Or your email / password is wrong. For more, please contact Wechat: Hylerrix.')
    }
  }

  return (
    <div className='root-login'>
      <div className="left-container">
      </div>
      <div className="right-container">
        <div className="right-background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form>
          <h3 className="text-3xl font-bold underline">
            { loginMode === REGISTER ? 'Register' : 'Login' } Here
          </h3>

          <h4 style={{ textAlign: 'center', marginTop: '10px' }}>- Time is a Gift -</h4>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" value={emailInput} onInput={(e: any) => setEmailInput(e.target.value)} />

          {
            loginMode === REGISTER &&
              <>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" value={usernameInput} onInput={(e: any) => setUserInput(e.target.value)} />
              </>
          }

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={passwordInput} onInput={(e: any) => setPasswordInput(e.target.value)} />

          {
            loginMode === REGISTER &&
              <>
                <label htmlFor="repassword">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" id="repassword" value={rePasswordInput} onInput={(e: any) => setRePasswordInput(e.target.value)} />
              </>
          }

          <button
            className='submit'
            onClick={(e) => {
              onFormSubmit()
              e.preventDefault()
            }}
          >
            { loginMode === LOGIN ? 'Login' : 'Register' }
          </button>
          <div style={{ textAlign: 'right', fontSize: '20px', textDecoration: 'underline' }}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => { changeLoginMode() }}
            >
              <b>or { loginMode === LOGIN ? 'Register' : 'Login' } now -&gt; </b>
            </span>
          </div>
          <div className="social">
            <button className="go" style={{ cursor: 'not-allowed' }} disabled>Github</button>
            <button className="fb" style={{ cursor: 'not-allowed' }} disabled>Google</button>
            <button className="fb" style={{ cursor: 'not-allowed' }} disabled>Wechat</button>
          </div>
        </form>
      </div>

      <div className='bottom-container'>
        <span>@2023 www.ningowood.com. All right reserved. </span>
        <span>v0.1.0.build-20221126. </span>
        <a target="_blank" href="https://github.com/hylerrix" style={{ color: 'white' }}>More features coming soon...</a>
      </div>

      <PopupModal
        title={modalTitle}
        content={modalContent}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  )
}

export default RootLogin
