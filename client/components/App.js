
import Gist from './Gist'
import '../assets/App.css'


const App = ({ gists }) =>

  <article>
    <header>
      <h1>Render Gists</h1>
    </header>

    <div className="gists">

      { gists.map((gist, i) =>
        <Gist key={i} {...gist} />)
      }

    </div>
  </article>


App.displayName = 'App'
export default App
