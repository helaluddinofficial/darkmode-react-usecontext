import { UseMode } from "../hooks/DarkModeProvider";
import ToggleButton from "./ToggleButton";

// Container.jsx
const Container = ({ children }) => {
  const { darkMode } = UseMode();

  return (
    <div
      className={
        darkMode ? 'Container Container-dark' : 'Container Container-light'
      }
    >
      <ToggleButton />
      {children} {/* ✅ Projects page will appear here */}
    </div>
  );
};
export default Container