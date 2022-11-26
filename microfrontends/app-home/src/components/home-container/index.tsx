import * as React from 'react'
// @ts-ignore
// import { Button } from "@ningowood/util-styleguide";

import './index.css'

const HomeContainer: React.FC = () => {
  const [title] = React.useState<string>('Welcome back! Here is what u missed.')

  return (
    <div className="p-2">
      <div className='home-container card-effect'>
        <div>
          <h2 className="container-title">
            <span><b>{title}</b></span>
          </h2>
          <div style={{ position: 'absolute', right: 40, top: 10 }}>
            <button className='bottom-button disabled-button' disabled>i18n</button>
            <button className='bottom-button disabled-button' disabled>Light +</button>
            <button className='bottom-button disabled-button' disabled>Panels +</button>
          </div>
        </div>

        <div className='container-content'>
          <div className="card-carousel">
            <div className='card-carousel-left-arrow-container'>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div className='card-carousel-left-arrow'>&lt;</div>
              </div>
            </div>
            <div className="card-carousel-content"></div>
            <div className='card-carousel-right-arrow-container'>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div className='card-carousel-right-arrow'>&gt;</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p>Numbers of the game you owned: 1500</p>
            <p>Numbers of the film you watched: 500</p>
            <p>Numbers of the time U track in past week: 20h</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <div className="gradient-border" id="box">
              Third party API support is on the way.<br />
              <p style={{ fontSize: 20 }}>AirTable, Notion, Strapi, IMDB, LetterboxD, GOG, Steam, Github, Zapier, Dropbox... and more!</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <h1 style={{ fontSize: 30 }}>What else can we Track?</h1>
            <p>Application, Shortcut, Financial, Notes, People, Social Activity, Medical,</p>
            <p>Photos, Food, Fitness, eshop, link, article, book, ppt, demand, place, theater, ..., and more!</p>
          </div>

          {/* <div>
            <p><Button></Button></p>
          </div> */}

          {/* <div className="card-main">
            <div className="card-main-left">
              <div className='chart-container'>
                <div className="chart-1"></div>
                <div className="chart-2"></div>
              </div>
              <div className='card-photos'></div>
            </div>
            <div className="card-main-right">
              <div className=''></div>
            </div>
          </div> */}

          {/* <div className="card-main">
            <div className="card-main-left">
              <div>
                <img src="https://pbs.twimg.com/media/FKqYN9JWUAY1waJ.jpg:large" alt="" />
              </div>
              <div className='card-news'></div>
            </div>
            <div className="card-main-right">
              <div className=''></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
