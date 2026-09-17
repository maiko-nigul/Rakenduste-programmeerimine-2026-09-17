import './TaskCard.css';

export function TaskCard() {
  const taskTitle = 'Õpi JSX-i ja komponente';
  const isCompleted = true;

  return (
    <div className="task-card">
      <h3>{taskTitle}</h3>
      <p>Olek: {isCompleted ? 'Tehtud' : 'Tegemata'}</p>
    </div>
  );
}