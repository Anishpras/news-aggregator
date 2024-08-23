import React, { useState, useEffect } from "react";
import PersonalizationSettings from "../components/PersonalizationSettings";

interface Settings {
  sources: string[];
  categories: string[];
}

const Personalization: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    sources: [],
    categories: [],
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("newsPersonalizationSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSaveSettings = (newSettings: Settings) => {
    localStorage.setItem(
      "newsPersonalizationSettings",
      JSON.stringify(newSettings)
    );
    setSettings(newSettings);

    console.log("Saved settings:", newSettings);

  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Personalize Your News Feed</h1>
      <PersonalizationSettings
        initialSettings={settings}
        onSave={handleSaveSettings}
      />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Current Settings</h2>
        <p>Sources: {settings.sources.join(", ") || "None selected"}</p>
        <p>Categories: {settings.categories.join(", ") || "None selected"}</p>
      </div>
    </div>
  );
};

export default Personalization;
