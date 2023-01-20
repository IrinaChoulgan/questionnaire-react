import { useNavigate } from 'react-router-dom';
import GameReact from '../../GameReact/GameReact';

export default function ReactPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <>
      <button onClick={onClick} className="btn">
        Home
      </button>
      <div className="App">
        <GameReact />
      </div>
    </>
  );
}
