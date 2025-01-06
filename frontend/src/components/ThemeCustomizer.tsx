import { Settings } from 'lucide-react';
import { Theme } from '../types/profile';

interface ThemeCustomizerProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeCustomizer({ theme, onThemeChange }: ThemeCustomizerProps) {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="relative group">
        <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Settings className="w-6 h-6" />
        </button>
        
        <div className="absolute bottom-full right-0 mb-2 p-4 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="font-medium mb-3">Customize Theme</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Primary Color</label>
              <input
                type="color"
                value={theme.primary}
                onChange={(e) => onThemeChange({ ...theme, primary: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Secondary Color</label>
              <input
                type="color"
                value={theme.secondary}
                onChange={(e) => onThemeChange({ ...theme, secondary: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Background Color</label>
              <input
                type="color"
                value={theme.background}
                onChange={(e) => onThemeChange({ ...theme, background: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Text Color</label>
              <input
                type="color"
                value={theme.text}
                onChange={(e) => onThemeChange({ ...theme, text: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}