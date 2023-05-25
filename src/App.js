import {Switch, Route, Redirect} from 'react-router-dom'
import TouchTyping from './TouchTyping'
import TypingTest from './TypingTest'
import Lesson from './Lesson'
import NotFound from './NotFound'
import './App.css';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={TouchTyping} />
      <Route exact path="/typing-test" component={TypingTest} />
      <Route exact path="/typing-test/:lesson" component={Lesson} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
);

export default App;
