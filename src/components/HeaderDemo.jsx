import React, { useState } from 'react';
import ProfessionalHeader from './ProfessionalHeader';
import { 
  SimpleHeader, 
  HeaderWithNavigation, 
  FullHeader, 
  TwoRowHeader, 
  LogoWithGraphic 
} from './HeaderExamples';
import { Typography, Button, Divider } from '@fusionpay/design-system';

const HeaderDemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedExample, setSelectedExample] = useState('professional');

  const examples = {
    professional: ProfessionalHeader,
    simple: SimpleHeader,
    navigation: HeaderWithNavigation,
    full: FullHeader,
    twoRow: TwoRowHeader,
    graphic: LogoWithGraphic
  };

  const ExampleComponent = examples[selectedExample];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000'
    }}>
      {/* Header auswählen */}
      <div style={{ 
        padding: '20px', 
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
        backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography newVariant="headline1" style={{ marginBottom: '8px' }}>
            🎯 Professional Header Examples
          </Typography>
          <Typography newVariant="body1" style={{ marginBottom: '16px', opacity: 0.8 }}>
            Powered by the complete FusionPay Design System
          </Typography>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button
              variant={selectedExample === 'professional' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('professional')}
            >
              🚀 Enterprise
            </Button>
            <Button
              variant={selectedExample === 'simple' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('simple')}
            >
              Einfach
            </Button>
            <Button
              variant={selectedExample === 'navigation' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('navigation')}
            >
              Mit Navigation
            </Button>
            <Button
              variant={selectedExample === 'full' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('full')}
            >
              Vollständig
            </Button>
            <Button
              variant={selectedExample === 'twoRow' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('twoRow')}
            >
              Zwei Zeilen
            </Button>
            <Button
              variant={selectedExample === 'graphic' ? 'filled' : 'outlined'}
              size="small"
              onClick={() => setSelectedExample('graphic')}
            >
              Mit Grafik
            </Button>
          </div>
        </div>
      </div>

      {/* Ausgewählter Header */}
      <ExampleComponent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Inhalt */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography newVariant="title2" style={{ marginBottom: '16px' }}>
            {selectedExample === 'professional' && '🚀 Enterprise-Level Header'}
            {selectedExample === 'simple' && 'Einfacher Header'}
            {selectedExample === 'navigation' && 'Header mit Navigation'}
            {selectedExample === 'full' && 'Vollständiger Header'}
            {selectedExample === 'twoRow' && 'Zwei-Zeilen Header'}
            {selectedExample === 'graphic' && 'Header mit Logo-Grafik'}
          </Typography>
          
          <Typography newVariant="body1" style={{ marginBottom: '24px' }}>
            {selectedExample === 'professional' && 'Enterprise-Header mit vollständigem FusionPay Design System: Search-Dropdown, Notification-System, User-Menu mit Header/Footer, animierter HorizontalNavigation und professioneller Logo-Grafik.'}
            {selectedExample === 'simple' && 'Minimaler Header mit nur Logo-Text und Theme-Toggle.'}
            {selectedExample === 'navigation' && 'Header mit Logo, Badge und horizontaler Navigation.'}
            {selectedExample === 'full' && 'Vollständiger Header mit allen Funktionen: Logo, Navigation, Benachrichtigungen, Einstellungen und Benutzer-Profil.'}
            {selectedExample === 'twoRow' && 'Zwei-Zeilen Layout für mehr Platz: Logo oben, Navigation unten.'}
            {selectedExample === 'graphic' && 'Header mit simulierter Logo-Grafik und Text-Kombination.'}
          </Typography>

          {selectedExample === 'professional' && (
            <div style={{ 
              padding: '24px', 
              backgroundColor: isDarkMode ? '#1a2e1a' : '#f8fff9',
              borderRadius: '8px',
              border: '2px solid #28a745',
              marginBottom: '24px'
            }}>
              <Typography newVariant="headline3" style={{ marginBottom: '12px', color: '#28a745' }}>
                🎯 Enterprise Features:
              </Typography>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                <div>
                  <Typography newVariant="body2" style={{ fontWeight: 'bold' }}>Search Dropdown</Typography>
                  <Typography newVariant="caption">DropdownMenuHeaderSearch mit Live-Suche</Typography>
                </div>
                <div>
                  <Typography newVariant="body2" style={{ fontWeight: 'bold' }}>Smart Notifications</Typography>
                  <Typography newVariant="caption">Mit Notification-Dot und strukturiertem Layout</Typography>
                </div>
                <div>
                  <Typography newVariant="body2" style={{ fontWeight: 'bold' }}>User Profile Menu</Typography>
                  <Typography newVariant="caption">Header, Divider, Footer mit Sign-out</Typography>
                </div>
                <div>
                  <Typography newVariant="body2" style={{ fontWeight: 'bold' }}>Animated Navigation</Typography>
                  <Typography newVariant="caption">HorizontalNavigation mit smooth Indikator</Typography>
                </div>
              </div>
            </div>
          )}

          <div style={{ 
            padding: '24px', 
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`
          }}>
            <Typography newVariant="headline3" style={{ marginBottom: '12px' }}>
              Verwendete Komponenten:
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><Typography newVariant="body2">Typography - für Logo-Text mit newVariant system</Typography></li>
              <li><Typography newVariant="body2">Badge - für Status-Labels (Enterprise, Pro, Beta)</Typography></li>
              <li><Typography newVariant="body2">Button - für Aktionen mit verschiedenen Varianten</Typography></li>
              {selectedExample === 'professional' && (
                <>
                  <li><Typography newVariant="body2">HorizontalNavigation - mit animiertem Active Indicator</Typography></li>
                  <li><Typography newVariant="body2">Dropdown + DropdownMenu - für Search, Notifications, User</Typography></li>
                  <li><Typography newVariant="body2">DropdownListItem - für Menü-Einträge mit Icons</Typography></li>
                  <li><Typography newVariant="body2">DropdownMenuHeaderSearch/Title - für strukturierte Menüs</Typography></li>
                  <li><Typography newVariant="body2">Notification - für Badge-Dots und Alerts</Typography></li>
                  <li><Typography newVariant="body2">Divider - für Menü-Separation</Typography></li>
                </>
              )}
              {(selectedExample === 'navigation' || selectedExample === 'full' || selectedExample === 'twoRow') && (
                <li><Typography newVariant="body2">HorizontalNavigation - für Navigation</Typography></li>
              )}
              <li><Typography newVariant="body2">FontAwesome Icons - für professionelle Symbole</Typography></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo; 