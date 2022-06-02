import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imdb.png'
import IMG2 from '../../assets/slack.png'
import IMG3 from '../../assets/puzzle.png'
import IMG4 from '../../assets/imgur.png'
import IMG5 from '../../assets/sudoku.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt='IMDB' />
          </div>
          <h3>Imdb Clone</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/IMDB_Clone" className='btn' target='_blank'>Github</a>
            <a href="http://elisenimdb.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt='IMDB' />
          </div>
          <h3>Slack Clone</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Slack_Clone" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt='IMDB' />
          </div>
          <h3>Image Puzzle</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Image_Puzzle" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG4} alt='IMDB' />
          </div>
          <h3>Imgur Frontend</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Imgur_Frontend" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG5} alt='IMDB' />
          </div>
          <h3>Sudoku Solver</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Sudoku" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio