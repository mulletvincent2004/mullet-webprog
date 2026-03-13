import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="BISENTE">
      <header className="mullet-client">
        <h1>Great day welcome to TEALIVE!</h1>
        <p>
          Name: [Vincent Mullet]<br />
          Email: [mulletvincent0@gmail.com]<br />
          Other Personal Info:
          <a href="https://github.com/mulletvincent2004/mullet-webrog">https://github.com/mulletvincent2004/mullet-webrog</a>
        </p>
      </header>
     
    </div>
  );
}

export default App;
