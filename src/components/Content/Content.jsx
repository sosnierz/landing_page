import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Content.css';
import Authors from './subcomponents/Authors';
import Opinons from './subcomponents/Opinions';
import Specyfication from './subcomponents/Specyfication';
import Info from './subcomponents/Info';

const Content = () => {
  const handleButtonBuy = (e) => {
    e.preventDefault();
    window.location.href =
      'https://sklep.semantika.pl/niezbednik-nauczyciela-wychowania-fizycznego-2021-2022';
  };

  return (
    <section>
      <article>
        <h1>Niezbędnik nauczyciela WF 2022/2023</h1>
        <h2>praktyczny, nowoczesny, niezniszczalny</h2>
        <p>ulubieniec Wuefistów juz od 7 lat</p>
        <button type="button" onClick={handleButtonBuy}>
          Kup teraz
        </button>
      </article>
      <article>
        <Carousel />
      </article>
      <article>
        <div>
          <nav>
            <ul>
              <li>Co nowego?</li>
              <li>Specyfikacja</li>
              <li>Autorzy</li>
              <li>Opinie</li>
            </ul>
          </nav>
        </div>
        <Info />
        <Specyfication />
        <Authors />
        <Opinons />
      </article>
    </section>
  );
};

export default Content;
