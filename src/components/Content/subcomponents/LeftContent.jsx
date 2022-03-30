import React from 'react';

const LeftContent = () => {

    const handleButtonBuy = (e) => {
        e.preventDefault();
        window.location.href =
          'https://sklep.semantika.pl/niezbednik-nauczyciela-wychowania-fizycznego-2021-2022';
      };
    
    return (  
<article className='left'>
    <h2>praktyczny, nowoczesny, niezniszczalny</h2>
    <p>Ulubieniec Wuefistów juz od 7 lat!</p>
    <div className='btn'>
        <button type="button" onClick={handleButtonBuy}>
         Kup teraz
        </button>
    </div>
    <div className='attention'>
      <h3>Czym Was zaskoczymy w tym roku?</h3>
      <h4>Nowa unikalna forma niezbędnika jakiego nie było!</h4>
      <p className='attention-wrapper'> 
          Uwaga! Tym razem Niezbędnik <span>w zupełnie nowej odsłonie i specjalnej formie.</span> Zwiększyliśmy objętność treści, gotowych materiałów i niezbędnych informacji, które przydadzą się podczas prowadzenia codziennych zajęć w roku szkolnym.
      </p>
   </div>
</article> );
}
 
export default LeftContent;
