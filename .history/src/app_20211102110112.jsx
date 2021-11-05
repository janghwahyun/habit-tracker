import './app.css';

function App() {
  return (
    <>
      <h1>never giveup </h1>
      {['🐱', '🐭'].map(i => (
        <h1>{i}</h1>
      ))}
    </>
  );
}

export default App;
