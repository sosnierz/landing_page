import React from 'react';


const Authors = ({ authorsVisible }) => {
    return ( 
    <div className={authorsVisible ? 'authors show' : 'authors hide'}>
        <h3>Nasi autorzy</h3>
        <p>Tworząc aktualną edycję zaangażowaliśmy najlepszych specjalistów i dosiadczonych praktywków, którzy podzielili się swoją pasją i przygotowali pomysłowe materiały oraz patenty wzbogacające treści kształcenia.</p>
        <ul>
          <li>Dawidk Nitka</li>
          <li>Irmina Krawczyk</li>
          <li>Mariusz Rokita</li>
          <li>Daria Puszka</li>
        </ul>
      </div> );
}
 
export default Authors;
