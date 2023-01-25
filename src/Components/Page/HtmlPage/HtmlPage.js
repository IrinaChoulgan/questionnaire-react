import { useNavigate } from 'react-router-dom';
import GameHtml from '../../GameHtml/GameHtml';

export default function HtmlPage() {
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
        <GameHtml />
      </div>
    </div>
  );
}
