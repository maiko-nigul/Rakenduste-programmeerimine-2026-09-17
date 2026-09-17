import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import './App.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <TaskCard />
      </main>
    </>
  );
}

export default App;