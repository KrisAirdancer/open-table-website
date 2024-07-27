import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import CharacterSheet from './components/CharacterSheet'
import Characters from './components/Characters'
import Fuku from './components/character_pages/Fuku'
import PhineasFilth from './components/character_pages/PhineasFilth'


function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character-sheet" element={<CharacterSheet />} />
        <Route path="/characters">
        <Route index element={<Characters />} />
          <Route path="fuku" element={<Fuku />} />
          <Route path="phineas-filth" element={<PhineasFilth />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
