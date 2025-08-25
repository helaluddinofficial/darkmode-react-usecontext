import { DarkModeProvider } from './hooks/DarkModeProvider';
import Container from './components/Container';
import Header from './components/Header';

const App = () => {
  return (
    <DarkModeProvider>
      <Header/>
        {' '}
        <Container />{' '}
      
    </DarkModeProvider>
  );
};

export default App;
