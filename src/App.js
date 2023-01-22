import './App.css';
import {useState, useEffect} from 'react'
import React from 'react';

const Slideshow = ({imgs}) => {
  const [index, setIndex] = useState()

  useEffect(() =>{
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return <div className="slideshow">
    <img className="mainImg" src={imgs[index]} />
    <div className="actions">
      <button onClick={prev}>⬅</button>
      <button onClick={next}>➡</button>
    </div>
  </div>
}

function App() {
  
  return (
    <body>

      <div>
        <img className="pic" src="https://images.rawpixel.com/image_200/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 300w, https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 600w, https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 800w, https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 1400w, https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 2900w, https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 3600w, https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMDI5LWYuanBn.jpg 4000w"/>

      </div>

      <div className="headers">
        <div className="hello">
          <a>Hello,</a>
        </div>
        
        <div class="intro">
          <a>This is Kyle Addrianne P. San Antonio</a>

        </div>
      </div>

      <div className="info">
        <a>Languages</a>
        <ul className="infolist">
          <li>HTML & CSS</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>Kotlin</li>
        </ul>
      </div>

      <div className="slide">
        <a>Hobbies:</a>
        <div className="slideinfo">
          <a>-In my free time, I will Research and Practice coding</a>
            <div><a>-Some of my work pens used in our class</a></div>
            <div><a>-lastly, i ride my bike with my friends to get</a></div>
            <div>
              <a> some fresh air after long hours of coding/work.</a>
            </div>
        </div>
        
        <Slideshow 
          imgs={[
            'https://pbs.twimg.com/media/FnFTmM5acAMF0Hj?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFVbSyaEAU6N9Z?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFVbSjaUAA6YrR?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFYvPPaAAEJMCp?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFVbSkaUAIlxXp?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFVbSyacAATF8R?format=jpg&name=small',
            'https://pbs.twimg.com/media/FnFILoHagAYRrou?format=jpg&name=small',
        ]}/>
      </div>
      
      
    </body>
  );
}

export default App;
