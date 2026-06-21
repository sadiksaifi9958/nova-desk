import { Button } from "@/components/ui/button";
import { useApp } from "../context/AppContext";
function Settings() {
  const { state, dispatch } = useApp();

  function handleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <div>
      <Button onClick={handleTheme}>Change Theme</Button>
      <p>Current theme: {state.theme}</p>
    </div>
  );
}

export default Settings;
