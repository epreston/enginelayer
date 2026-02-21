import './css/reset.css';
import './css/style.css';

import favIconUrl from './img/favicon.svg';

//

document.querySelector('#app').innerHTML = `
  <a href="https://github.com/epreston/enginelayer" target="_blank">
    <img src="${favIconUrl}" class="logo" alt="favourite icon" />
  </a>
  <h1>Let's Go !</h1>
  <a href="https://github.com/epreston/enginelayer" target="_blank">EngineLayer</a>
`;
