import { useAppSelector } from './store/hooks';
import Signup from './components/Signup';
import MainScreen from './pages/MainScreen';

function App() {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="min-h-screen min-w-screen bg-codeleap-light-gray">
      {!username ? ( <Signup /> ) : (
        <MainScreen/>
      )}
    </div>
  );
}

export default App;