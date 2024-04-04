import './App.css';
import TableSortAndSelection from './TableSortAndSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Table of StackOverflow tags:
        </p>
      </header>
      <main>
        <TableSortAndSelection />
      </main>
    </div>
  );
}

export default App;
