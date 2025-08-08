  import { useEffect } from 'react';
import './Home.css';
  import './index.css'
  import './index.js'

function Home () {
  

    return (
        <>

        {/* //header gives us some feature site will have */}
        <div className="Header">
            <h1>Throw-Article</h1>
            <ol>
                <p>login/logout</p>
                <p>settings</p>
                <p>chats</p>
                <p>about</p>
            </ol>

        </div>

        
    <div className="search-content">
            <button>Random</button>
    </div>
    
    
    </>

    )
}

export default Home
