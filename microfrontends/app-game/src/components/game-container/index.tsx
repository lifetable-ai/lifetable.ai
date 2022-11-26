import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import './index.css'
import { addGameItem, getGameList } from '../../api'

const GameContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [gameList, setGameList] = useState([])
  const [gameName, setGameName] = useState('')

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    getGame()
  }, [])

  const getGame = async () => {
    const { data } = await getGameList()
    const success = data.hasOwnProperty('success')
    if (success && !data.success) {
      alert('Loading Game Error... Maybe u should re-login.')
    }
    setGameList(data)
  }

  const addGame = async () => {
    const { data } = await addGameItem({ name: gameName })
    const success = data.hasOwnProperty('success')
    if (success && !data.success) {
      alert('Add Game Error... Maybe u should re-login.')
    }
    const email = localStorage.getItem('email')
    // @ts-ignore
    window.Sentry.captureMessage(`[App] ${email} Added a Game: ${gameName}`, 'log')
    closeModal()
    getGame()
  }

  return (
    <div className="p-2">
      <div className='home-container card-effect'>
        <div>
          <h2 className="container-title">
            <span><b>You played over <i style={{ color: 'red' }}>1606</i> games.
              owned <i style={{ color: 'red' }}>104</i> PlayStation Disc,
              <i style={{ color: 'red' }}>234</i> Switch Card,
              <i style={{ color: 'red' }}>1000+</i> Virtual Games.
            </b></span>
          </h2>
          <div style={{ position: 'absolute', right: 40, top: 10 }}>
            <button className='bottom-button disabled-button' disabled>GOG</button>
            <button className='bottom-button disabled-button' disabled>Steam</button>
            <button className='bottom-button disabled-button' disabled>Epic</button>
            <button className='bottom-button disabled-button' disabled>...</button>
          </div>
        </div>

        <div className='game-op-container'>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Add A Game
          </button>
        </div>

        <div className="cards">
          {
            gameList.length ? gameList?.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-img img-1"></div>
                <h3 className="title">{item?.name}</h3>
                <p className="author">Played At: {item?.created_time}</p>
                <div className="progress">
                  <div className="progress-bar bar-10"></div>
                </div>
                <div className="rating">10/10</div>
              </div>
            )) : <div style={{
              paddingLeft: '40px',
              fontWeight: 'bold'
            }}>U have not add a game yet. Please Add It Now.</div>
          }
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      What u just played, buy or rented?
                    </Dialog.Title>
                    <div className="mt-2">
                      <input
                        type="text"
                        autoFocus
                        placeholder='Input a name here.'
                        value={ gameName }
                        onChange={(e) => {
                          setGameName(e.target.value)
                        }}
                        style={{
                          paddingLeft: 10,
                          border: '2px #0061c6b5',
                          borderStyle: 'dashed'
                        }}
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => { addGame() }}
                      >
                        Add it!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  )
}

export default GameContainer
