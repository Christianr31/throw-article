import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Loginpage from './pages/loginpage.jsx'
import Signuppage from './pages/signuppage.jsx'


function App() {

    

    return (
        <Router>
            <Routes>
               <Route path="/"element ={<Home/>}/>
               <Route path="/loginpage" element ={<Loginpage/>}/>
               <Route path="/signuppage" element ={<Signuppage/>}/>

            </Routes>
        </Router>
    // <Home/>
    )


}

export default App
