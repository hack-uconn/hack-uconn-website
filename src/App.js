import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const aboutRef = useRef(null);
  const sponsorsRef = useRef(null);
  const faqRef = useRef(null);

  const [page, setPage]= useState(useLocation());
  let location = useLocation();

  useEffect(() => {
    setPage(location.pathname);
    window.scrollTo({top:0, left:0, behavior:"smooth"});
  }, [location.pathname]);

  const executeScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

  return (
    <main className="w-max-screen-2xl">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={4000}>
          <Switch>
            <Route path='/hack-uconn-website' render={(props) => <Home {...props} aboutRef={aboutRef} sponsorsRef={sponsorsRef} faqRef={faqRef} page={page} executeScroll={(ref) => {executeScroll(ref)}}/>}/>
            <Route component={Error}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

export default App;
