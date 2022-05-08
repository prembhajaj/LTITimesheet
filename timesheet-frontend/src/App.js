import Timesheet from './components/timesheet'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Timesheet />
    </Router>
    
    // <>Hello</>
  );
}

export default App;
