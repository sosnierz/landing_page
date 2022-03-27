import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Content.css';
import Authors from './subcomponents/Authors';
import Opinons from './subcomponents/Opinions';
import Specyfication from './subcomponents/Specyfication';
import Info from './subcomponents/Info';
import LeftContent from './subcomponents/LeftContent';


const Content = () => {
  
 

  return (
    <section className='content'>
      <h1>Niezbędnik nauczyciela WF 2022/2023</h1>
      <div className='content-wrapper'>
        <LeftContent />
        <article className='middle'>
          <Carousel />
        </article>
        <article className='right'>
          <div className='container'>
            <nav className='menu'>
                <ul className='main-menu'>
                    <li className={isActive ? 'active' : ''} isActiveonClick={handleInfo}>Co nowego?</li>
                    <li className={isActive ? 'active' : ''} onClick={handleSpecyfication}>Specyfikacja</li>
                    <li className={isActive ? 'active' : ''} onClick={handleAuthors}>Autorzy</li>
                    <li className={isActive ? 'active' : ''} onClick={handleOpinions}>Opinie</li>
                </ul>
            </nav>
            <div className='right-wrapper'>         
                <Info infoVisible={infoVisible}/>
                <Specyfication specyficationVisible = {specyficationVisible} />
                <Authors authorsVisible = {authorsVisible}/>
                <Opinons opinionsVisible = {opinionsVisible}/>
            </div>
          </div> 
        </article>
      </div>
    </section>
  );
};

export default Content;
