import { useNavigate } from 'react-router-dom';
import GameJS from '../../GameJS/GameJS';

export default function JSPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <>
      <button onClick={onClick}>Home</button>
      <div className="App">
        <GameJS></GameJS>
      </div>
    </>
  );
}
