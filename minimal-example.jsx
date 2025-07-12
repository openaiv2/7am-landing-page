import React from 'react';
import { ThemeProvider } from 'styled-components';

// Nur die grundlegenden Komponenten importieren, die keine Pro-Icons benötigen
import { createBaseTheme } from '@fusionpay/design-system';

// Einfaches Beispiel ohne Pro-Icon-Abhängigkeiten
const MinimalExample = () => {
  const theme = createBaseTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>FusionPay Design System - Minimal Setup</h1>
        <p>Das Design System wurde erfolgreich installiert!</p>
        
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f0f9ff', 
          border: '1px solid #0ea5e9',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <h3>✅ Installation erfolgreich!</h3>
          <p>Das FusionPay Design System ist installiert und bereit zur Verwendung.</p>
          <p><strong>Version:</strong> 3.20.15</p>
        </div>

        <div style={{ marginTop: '24px' }}>
          <h2>Verfügbare Komponenten:</h2>
          <ul>
            <li>Button (verschiedene Varianten)</li>
            <li>Input & Form-Komponenten</li>
            <li>Typography</li>
            <li>Modal</li>
            <li>Badges & Notifications</li>
            <li>Dropdown & Navigation</li>
            <li>Date/Time Picker</li>
            <li>Und viele mehr...</li>
          </ul>
        </div>

        <div style={{ marginTop: '24px' }}>
          <h2>Nächste Schritte:</h2>
          <ol>
            <li>Für vollständige Funktionalität: FontAwesome Pro Token in .npmrc einrichten</li>
            <li>Komponenten einzeln importieren und verwenden</li>
            <li>Theme anpassen (Light/Dark Mode)</li>
            <li>Siehe available-components.md für vollständige Übersicht</li>
          </ol>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MinimalExample; 