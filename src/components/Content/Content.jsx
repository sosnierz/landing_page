import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import './Content.css';
import Authors from './subcomponents/Authors';
import Opinions from './subcomponents/Opinions';
import Specyfication from './subcomponents/Specyfication';
import Info from './subcomponents/Info';
import LeftContent from './subcomponents/LeftContent';



const Content = () => {
  const [section, setSection] = useState('info');
  const [isActive, setIsActive] = useState(false)
 
  const toggleContent = (status) => {
    setSection(status);
    setIsActive(!isActive);
    console.log(section)
  }
  


  const switchContent = (value) => {
    switch (value) {
      case 'info':
        return <Info />;
      case 'specyfication':
        return <Specyfication />;
      case 'authors':
        return <Authors />
      case 'opinions':
        return <Opinions />;
      default:
        return null;
    }
  }


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
                    <li className={section ==='info' ? 'active' : null} onClick={() =>toggleContent('info')}>Co nowego?</li>
                    <li className={section ==='specyfication' ? 'active' : null} onClick={() =>toggleContent('specyfication')}>Specyfikacja</li>
                    <li className={section ==='authors' ? 'active' : null} onClick={() =>toggleContent('authors')}>Autorzy</li>
                    <li className={section ==='opinions' ? 'active' : null} onClick={() =>toggleContent('opinions')}>Opinie</li>
                </ul>
            </nav>
            <div className='right-wrapper'>         
                {switchContent(section)}
            </div>
          </div> 
        </article>
      </div>
    </section>
  );
};

export default Content;
