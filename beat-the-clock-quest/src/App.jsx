import Player from './components/Player'
import TimerChalenge from './components/TimerChalenge/TimerChalenge'
import './App.css'

function App() {
  return (
    <>
    <Player></Player>
    <div id="challenges">
      <TimerChalenge title="Easy" targetTime="1" />
      <TimerChalenge title="Not Easy" targetTime="5" />
      <TimerChalenge title="Getting Tough" targetTime="10" />
      <TimerChalenge title="Pros Only" targetTime="15" />
    </div>
    </>
  )
}

export default App
