import React, { useState } from 'react';
import { 
  Typography, 
  Button, 
  Badge
} from '@fusionpay/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faCrown,
  faRocket,
  faSparkles,
  faCalculator,
  faBars,
  faTimes
} from '@fortawesome/pro-solid-svg-icons';

const ProfessionalHeader = ({ isDarkMode, setIsDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header style={{ 
        padding: '20px',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
        position: 'sticky',
        top: 0,
        backgroundColor: isDarkMode ? 'rgba(26,26,26,0.95)' : 'rgba(255,255,255,0.95)',
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Section - Simplified */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              position: 'relative'
            }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '16px' }} />
              <div style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '6px',
                height: '6px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                border: '1px solid white'
              }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography 
                newVariant="headline2" 
                color="brand.primary"
                style={{ fontWeight: 'bold' }}
              >
                7AM.io
              </Typography>
              <Badge color="primary" size="small">
                <FontAwesomeIcon icon={faSparkles} style={{ marginRight: '4px', fontSize: '8px' }} />
                Shopify of Ticketing
              </Badge>
            </div>
          </div>

          {/* Desktop Actions - Minimal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            
            {/* Simple Navigation - Desktop Only */}
            <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' }, gap: '20px', alignItems: 'center' }} className="desktop-nav">
              <button
                onClick={() => scrollToSection('calculator')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  cursor: 'pointer',
                  color: isDarkMode ? '#ffffff' : '#666666',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#ffffff' : '#666666'}
              >
                Calculator
              </button>
              
              <button
                onClick={() => scrollToSection('pricing')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  cursor: 'pointer',
                  color: isDarkMode ? '#ffffff' : '#666666',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#ffffff' : '#666666'}
              >
                Pricing
              </button>
            </div>

            {/* Main CTA - Always Visible */}
            <Button
              variant="filled"
              color="primary"
              size="small"
              startIcon={<FontAwesomeIcon icon={faCrown} />}
              onClick={() => scrollToSection('cta')}
              style={{ 
                whiteSpace: 'nowrap',
                fontSize: '14px',
                padding: '8px 16px'
              }}
            >
              Join Founding 75
            </Button>

            {/* Mobile Menu Button - Minimal */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: `1px solid ${isDarkMode ? '#444' : '#e5e5e5'}`,
                borderRadius: '6px',
                padding: '8px',
                cursor: 'pointer',
                color: isDarkMode ? '#ffffff' : '#333333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px'
              }}
              className="mobile-menu-btn"
            >
              <FontAwesomeIcon 
                icon={mobileMenuOpen ? faTimes : faBars} 
                style={{ fontSize: '12px' }} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Simplified Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '77px', // Height of header
          left: 0,
          width: '100%',
          height: 'calc(100vh - 77px)',
          backgroundColor: isDarkMode ? 'rgba(26,26,26,0.98)' : 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          {/* Mobile Navigation - Simplified */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => scrollToSection('calculator')}
              style={{
                background: 'none',
                border: `1px solid ${isDarkMode ? '#444' : '#e5e5e5'}`,
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                color: isDarkMode ? '#ffffff' : '#333333',
                textAlign: 'left',
                fontSize: '16px'
              }}
            >
              <FontAwesomeIcon icon={faCalculator} style={{ marginRight: '12px', color: '#007bff' }} />
              See Your Savings
            </button>
            
            <button
              onClick={() => scrollToSection('pricing')}
              style={{
                background: 'none',
                border: `1px solid ${isDarkMode ? '#444' : '#e5e5e5'}`,
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                color: isDarkMode ? '#ffffff' : '#333333',
                textAlign: 'left',
                fontSize: '16px'
              }}
            >
              <FontAwesomeIcon icon={faCrown} style={{ marginRight: '12px', color: '#ffc107' }} />
              Founding Member Pricing
            </button>
          </div>

          {/* Mobile CTAs - Focused */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            <Button
              variant="filled"
              color="primary"
              size="large"
              fullWidth
              startIcon={<FontAwesomeIcon icon={faCrown} />}
              onClick={() => scrollToSection('cta')}
            >
              Join the Founding 75
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              startIcon={<FontAwesomeIcon icon={faRocket} />}
              onClick={() => scrollToSection('white-label')}
            >
              See White-Label Demo
            </Button>
          </div>

          {/* Simple Footer */}
          <div style={{ 
            marginTop: 'auto',
            paddingTop: '20px', 
            borderTop: `1px solid ${isDarkMode ? '#444' : '#e5e5e5'}`,
            textAlign: 'center'
          }}>
            <Typography newVariant="body2" style={{ opacity: 0.6 }}>
              The Shopify of Ticketing • 47 spots remaining
            </Typography>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProfessionalHeader; 