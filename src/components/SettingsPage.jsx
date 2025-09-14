import { useContext } from "react";
import { ThemeProviderContext } from "./ThemeProvider";
import { Switch } from "./ui/switch";

const SettingsPage = () => {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Theme Settings</h2>
        <div className="flex items-center justify-between">
          <p className="text-lg">Enable Dark Mode</p>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
