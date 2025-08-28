
import { DarkModeContext, UseMode } from '../hooks/DarkModeProvider';
import { Moon, Sun } from 'lucide-react'; // ✅ Import icons properly

const ToggleButton = () => {
  const {toggleDarkMode,darkMode}=UseMode()

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <button onClick={handleClick}>
      {darkMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ToggleButton;
