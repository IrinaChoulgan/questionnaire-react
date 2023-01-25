import { useNavigate } from 'react-router-dom';
import GameJS from '../../GameJS/GameJS';

export default function JSPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <div className="wrapper">
      <button onClick={onClick} className="btn">
        Home
      </button>
      <div className="App">
        <GameJS></GameJS>
      </div>
    </div>
  );
}
