import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages

// components

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path='' element={ff} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
