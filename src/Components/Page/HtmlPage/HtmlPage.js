import { useNavigate } from 'react-router-dom';
import GameHtml from '../../GameHtml/GameHtml';

export default function HtmlPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <>
      <button onClick={onClick}>Home</button>
      <div className="App">
        <GameHtml />
      </div>
    </>
  );
}