import React, { useState, useEffect } from "react";

interface Settings {
  sources: string[];
  categories: string[];
}

interface PersonalizationSettingsProps {
  initialSettings: Settings;
  onSave: (settings: Settings) => void;
}

const PersonalizationSettings: React.FC<PersonalizationSettingsProps> = ({
  initialSettings,
  onSave,
}) => {
  const [sources, setSources] = useState<string[]>(initialSettings.sources);
  const [categories, setCategories] = useState<string[]>(
    initialSettings.categories
  );

  useEffect(() => {
    setSources(initialSettings.sources);
    setCategories(initialSettings.categories);
  }, [initialSettings]);

  const handleSourceChange = (source: string) => {
    setSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    onSave({ sources, categories });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="mb-4">
        <h3 className="font-medium mb-2">Sources</h3>
        {["NYT", "NewsAPI", "NewsData"].map((source) => (
          <label key={source} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={sources.includes(source)}
              onChange={() => handleSourceChange(source)}
              className="mr-2"
            />
            {source}
          </label>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Categories</h3>
        {["Business", "Technology", "Sports", "Entertainment"].map(
          (category) => (
            <label key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          )
        )}
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Save Preferences
      </button>
    </div>
  );
};

export default PersonalizationSettings;
