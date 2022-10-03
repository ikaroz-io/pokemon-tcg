/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Pokeball.svg';
import './App.css';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <header className="App-header w-1/2 mx-auto text-left p-12">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <h1 sx={{fontSize: '26px'}}>Hi, OPN Team, </h1>
        <p>When I was received the assignment, I was  so thrilling joy, I'm a big fan of Pokemon TCG too, now, let see what I have done,</p>
        <h1 sx={{fontSize: '26px', my:'20px'}}>Techstack</h1>
        <h2 sx={{fontSize: '20px', my:'10px'}}>#React JS</h2>

          <p>- I decide to jump back to ReactJS after a while since you are using React in your company anyway, so It's good time to catch up with new React update</p>
          <p>- I choose React v18 which is a latest version</p>
          <p>- since the design didn't use many form element and not complicated, so I decide to not use the UI component Library (such as MaterialUI) this time, since it'll add a lot complexity to our project and difficult to customize.</p>

        <h2 sx={{fontSize: '20px', my:'20px'}}>#Theme UI</h2>
        <p>- The UI library I interest for a long time a but never have a chance to try it, I was intent to have a `dark theme` toggle button to switch the theme mode, but, sadly I didn't make it in time.</p>

        <h2 sx={{fontSize: '20px', my:'20px'}}>#Tailwind Css</h2>
        <p>- A Powerful css library which reduce a lot of time to managing the layout, and reduce many line of code.</p>

        <h2 sx={{fontSize: '20px', my:'20px'}}>#Architecture</h2>
        <p>- I tried to embrace the <a href="https://medium.com/ssense-tech/domain-driven-design-everything-you-always-wanted-to-know-about-it-but-were-afraid-to-ask-a85e7b74497a">'Domain-driven design' </a> I have use previously in Vue project to my React project, the concept is ship everything related to the same domain name path together, and splitted other out to make it easier to maintain the code.</p>
        <p>- Typescript: I never use Typescript with my React project before, It's a great chance to try something new.</p>
        <p>- Sass: Simple is the best, even we have ThemeUI and tailwindcss to help me in the styling things, it's still need plain css to change something more specific that library didn't support, I choose Sass, the pre-process css library which I think it make the code far better than normal css.</p>
        <br/>
        <p>Alright, I thing that's pretty much it, Let visit my  <Link to='/store/cards' className="App-link">Pokemon TCG store</Link>, Hope you enjoy (please leave a feedback to my <a href="chula.mak@gmail.com">email</a> if you don't.)</p>

  
        
      </header>
    </div>
  );
}

export default App;
