
import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter'
import Theme from './components/Theme'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.ThemeReducer);

  return (

    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <h2>Project</h2>
      <h1>Redux Builder</h1>
    <Theme />
    <Counter />
    </div>
  )
}

export default App
