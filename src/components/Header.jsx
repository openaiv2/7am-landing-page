import React from 'react';
import { 
  Typography, 
  Button, 
  HorizontalNavigation, 
  Badge, 
  Divider 
} from '@fusionpay/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faBell } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, setIsDarkMode }) => {
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
      position: 'sticky',
      top: 0,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              newVariant="headline1" 
              color="brand.primary"
              style={{ marginRight: '8px' }}
            >
              7AM.io
            </Typography>
            <Badge color="info" size="small">
              Pro
            </Badge>
          </div>
        </div>

        {/* Navigation - hidden on mobile */}
        <div style={{ display: 'none' }}>
          <HorizontalNavigation 
            items={navigationItems}
            variant="default"
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Notifications */}
          <div style={{ position: 'relative' }}>
            <Button
              variant="outlined"
              size="small"
              iconOnly
              startIcon={<FontAwesomeIcon icon={faBell} />}
              onClick={() => console.log('Notifications clicked')}
            />
            <Badge 
              color="error" 
              size="small" 
              style={{ 
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                minWidth: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}
            >
              3
            </Badge>
          </div>

          {/* Settings */}
          <Button
            variant="outlined"
            size="small"
            iconOnly
            startIcon={<FontAwesomeIcon icon={faGear} />}
            onClick={() => console.log('Settings clicked')}
          />

          {/* Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography newVariant="body2">Dark Mode</Typography>
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={(e) => setIsDarkMode(e.target.checked)}
              style={{ marginLeft: '8px' }}
            />
          </div>

          {/* User Profile */}
          <Button
            variant="filled"
            size="small"
            startIcon={<FontAwesomeIcon icon={faUser} />}
            onClick={() => console.log('Profile clicked')}
          >
            Profil
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 