import React from 'react';
import { 
  Typography, 
  Button, 
  HorizontalNavigation, 
  Badge, 
  Divider,
  Dropdown 
} from '@fusionpay/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faBell, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Beispiel 1: Einfacher Header mit Logo-Text
export const SimpleHeader = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header style={{ 
      padding: '16px 20px',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo als Text */}
        <Typography 
          newVariant="headline1" 
          color="brand.primary"
          style={{ fontWeight: 'bold' }}
        >
          7AM.io
        </Typography>

        {/* Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography newVariant="body2">Dark Mode</Typography>
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

// Beispiel 2: Header mit Logo und Navigation
export const HeaderWithNavigation = ({ isDarkMode, setIsDarkMode }) => {
  const navigationItems = [
    { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
    { label: 'Events', onClick: () => console.log('Events clicked') },
    { label: 'Analytics', onClick: () => console.log('Analytics clicked') },
    { label: 'Support', onClick: () => console.log('Support clicked') },
  ];

  return (
    <header style={{ 
      padding: '16px 20px',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo mit Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography 
            newVariant="headline1" 
            color="brand.primary"
            style={{ fontWeight: 'bold' }}
          >
            7AM.io
          </Typography>
          <Badge color="info" size="small">Pro</Badge>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <HorizontalNavigation 
            items={navigationItems}
            variant="default"
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography newVariant="body2">Dark Mode</Typography>
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

// Beispiel 3: Vollständiger Header mit Aktionen
export const FullHeader = ({ isDarkMode, setIsDarkMode }) => {
  const navigationItems = [
    { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
    { label: 'Events', onClick: () => console.log('Events clicked') },
    { label: 'Analytics', onClick: () => console.log('Analytics clicked') },
    { label: 'Support', onClick: () => console.log('Support clicked') },
  ];

  return (
    <header style={{ 
      padding: '16px 20px',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Sektion */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography 
              newVariant="headline1" 
              color="brand.primary"
              style={{ fontWeight: 'bold' }}
            >
              7AM.io
            </Typography>
            <Badge color="success" size="small">Enterprise</Badge>
          </div>
        </div>

        {/* Navigation - versteckt auf mobilen Geräten */}
        <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
          <HorizontalNavigation 
            items={navigationItems}
            variant="button"
          />
        </div>

        {/* Aktionen */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Benachrichtigungen */}
          <div style={{ position: 'relative' }}>
            <Button
              variant="outlined"
              size="small"
              iconOnly
              startIcon={<FontAwesomeIcon icon={faBell} />}
              onClick={() => console.log('Benachrichtigungen')}
            />
            <Badge 
              color="error" 
              size="small" 
              style={{ 
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                minWidth: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px'
              }}
            >
              3
            </Badge>
          </div>

          {/* Einstellungen */}
          <Button
            variant="outlined"
            size="small"
            iconOnly
            startIcon={<FontAwesomeIcon icon={faGear} />}
            onClick={() => console.log('Einstellungen')}
          />

          {/* Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography newVariant="body2">Dark</Typography>
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
          </div>

          {/* Benutzer Profil */}
          <Button
            variant="filled"
            size="small"
            startIcon={<FontAwesomeIcon icon={faUser} />}
            onClick={() => console.log('Profil')}
          >
            Profil
          </Button>
        </div>
      </div>
    </header>
  );
};

// Beispiel 4: Zwei-Zeilen Header
export const TwoRowHeader = ({ isDarkMode, setIsDarkMode }) => {
  const navigationItems = [
    { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
    { label: 'Events', onClick: () => console.log('Events clicked') },
    { label: 'Analytics', onClick: () => console.log('Analytics clicked') },
    { label: 'Support', onClick: () => console.log('Support clicked') },
  ];

  return (
    <header style={{ 
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
    }}>
      {/* Erste Zeile: Logo und Aktionen */}
      <div style={{ 
        padding: '16px 20px',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Typography 
              newVariant="title1" 
              color="brand.primary"
              style={{ fontWeight: 'bold' }}
            >
              7AM.io Ticketing Platform
            </Typography>
            <Badge color="warning" size="small">Beta</Badge>
          </div>

          {/* Aktionen */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="outlined"
              size="small"
              iconOnly
              startIcon={<FontAwesomeIcon icon={faBell} />}
            />
            <Button
              variant="outlined"
              size="small"
              iconOnly
              startIcon={<FontAwesomeIcon icon={faGear} />}
            />
            <Button
              variant="filled"
              size="small"
              startIcon={<FontAwesomeIcon icon={faUser} />}
            >
              Admin
            </Button>
          </div>
        </div>
      </div>

      {/* Zweite Zeile: Navigation */}
      <div style={{ padding: '12px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HorizontalNavigation 
            items={navigationItems}
            variant="default"
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography newVariant="body2">Dark Mode</Typography>
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

// Beispiel 5: Logo mit Grafik (simuliert)
export const LogoWithGraphic = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header style={{ 
      padding: '16px 20px',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo mit "Grafik" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Simuliertes Logo Icon */}
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#007bff',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            7A
          </div>
          
          <Typography 
            newVariant="headline1" 
            color="brand.primary"
            style={{ fontWeight: 'bold' }}
          >
            7AM.io
          </Typography>
          
          <Badge color="info" size="small">Pro</Badge>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography newVariant="body2">Dark Mode</Typography>
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

export default {
  SimpleHeader,
  HeaderWithNavigation,
  FullHeader,
  TwoRowHeader,
  LogoWithGraphic
}; 