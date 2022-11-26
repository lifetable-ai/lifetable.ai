import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import './index.css'
import { addOscItem, getOscList } from '../../api'

const OscContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [oscList, setOscList] = useState([])
  const [oscName, setOscName] = useState('')

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    getOsc()
  }, [])

  const getOsc = async () => {
    const { data } = await getOscList()
    const success = data.hasOwnProperty('success')
    if (success && !data.success) {
      alert('Loading Osc Error... Maybe u should re-login.')
    }
    setOscList(data)
  }

  const addOsc = async () => {
    const { data } = await addOscItem({ name: oscName })
    const success = data.hasOwnProperty('success')
    if (success && !data.success) {
      alert('Add Osc Error... Maybe u should re-login.')
    }
    const email = localStorage.getItem('email')
    // @ts-ignore
    window.Sentry.captureMessage(`[App] ${email} Added a OSC: ${oscName}`, 'log')
    closeModal()
    getOsc()
  }

  return (
    <div className="p-2">
      <div className='home-container card-effect'>
        <div>
          <h2 className="container-title">
            <span>You participated over <i style={{ color: 'red' }}>{oscList.length}</i> activitys.</span>
          </h2>
          <div style={{ position: 'absolute', right: 40, top: 10 }}>
            <button className='bottom-button disabled-button' disabled>IMDB</button>
            <button className='bottom-button disabled-button' disabled>Letterboxd</button>
            <button className='bottom-button disabled-button' disabled>...</button>
          </div>
        </div>

        <div className='movie-op-container'>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Add An Osc
          </button>
        </div>

        <div className="cards">
          {
            oscList.length ? oscList?.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-img img-1"></div>
                <h3 className="title">{item?.name}</h3>
                <p className="author">Participated Time: {item?.created_time}</p>
                <div className="progress">
                  <div className="progress-bar bar-10"></div>
                </div>
                <div className="rating">10/10</div>
              </div>
            )) : <div style={{
              paddingLeft: '40px',
              fontWeight: 'bold'
            }}>U have not add a osc yet. Please Add It Now.</div>
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
                      What u just watched, buy or rented?
                    </Dialog.Title>
                    <div className="mt-2">
                      <input
                        type="text"
                        autoFocus
                        placeholder='Input a name here.'
                        value={ oscName }
                        onChange={(e) => {
                          setOscName(e.target.value)
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
                        onClick={() => { addOsc() }}
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

export default OscContainer
