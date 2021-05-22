import './index.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-body h-screen">
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/advice">{/* <Users /> */}</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
