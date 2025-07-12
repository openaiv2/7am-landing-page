import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  createBaseTheme, 
  Typography,
  Button,
  Badge,
  Input,
  Select,
  FlashMessage,
  Textarea,
  Checkbox
} from '@fusionpay/design-system';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, faUser, faEnvelope, faPhone, faHome, faRocket, 
  faChartLine, faTicket, faBolt, faShield, faUsers, faCalendar, 
  faCreditCard, faArrowRight, faHandshake, faQuestionCircle,
  faTimes, faStar, faGift, faUserFriends, faDollarSign, faRecycle,
  faShoppingCart, faChartBar, faCrown, faFire, faClock, faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const theme = createBaseTheme('light');
  
  // Landing Page State
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showCalcSuccessMessage, setShowCalcSuccessMessage] = React.useState(false);
  
  // Contact Form State
  const [contactForm, setContactForm] = React.useState({
    venueName: '',
    name: '',
    email: '',
    currentPlatform: '',
    monthlyVolume: '',
    preferredDomain: '',
    terms: false,
    newsletter: false
  });
  
  // Calculator State
  const [calculator, setCalculator] = React.useState({
    monthlyTickets: 1000,
    avgPrice: 25,
    currentPlatform: 'eventbrite'
  });

  // Form Options
  const currentPlatforms = [
    { value: 'eventbrite', label: 'Eventbrite' },
    { value: 'trybooking', label: 'TryBooking' },
    { value: 'ticketek', label: 'Ticketek' },
    { value: 'ticketmaster', label: 'Ticketmaster' },
    { value: 'humanitix', label: 'Humanitix' },
    { value: 'other', label: 'Other' },
    { value: 'none', label: 'No platform currently' }
  ];

  const monthlyVolumes = [
    { value: '0-100', label: '0-100 tickets/month' },
    { value: '100-500', label: '100-500 tickets/month' },
    { value: '500-1000', label: '500-1,000 tickets/month' },
    { value: '1000-2500', label: '1,000-2,500 tickets/month' },
    { value: '2500+', label: '2,500+ tickets/month' }
  ];

  // Calculator Logic
  const calculateSavings = () => {
    const { monthlyTickets, avgPrice, currentPlatform } = calculator;
    const monthlyRevenue = monthlyTickets * avgPrice;
    
    const competitorFees = {
      eventbrite: { rate: 0.0535, fixed: 1.19, name: 'Eventbrite' },
      trybooking: { rate: 0.025, fixed: 0.50, name: 'TryBooking' },
      ticketek: { rate: 0.035, fixed: 1.20, name: 'Ticketek' },
      ticketmaster: { rate: 0.031, fixed: 1.50, name: 'Ticketmaster' },
      humanitix: { rate: 0.029, fixed: 0.99, name: 'Humanitix' },
      other: { rate: 0.03, fixed: 1.00, name: 'Other Platform' }
    };

    const competitor = competitorFees[currentPlatform] || competitorFees.eventbrite;
    const competitorMonthlyCost = (monthlyRevenue * competitor.rate) + (monthlyTickets * competitor.fixed);
    const sevenAmMonthlyCost = 99; // $99/month + 0% processing for 3 years
    const monthlySavings = competitorMonthlyCost - sevenAmMonthlyCost;
    const threeYearSavings = monthlySavings * 36;
    
    return { 
      monthlyRevenue, 
      competitorMonthlyCost, 
      sevenAmMonthlyCost, 
      monthlySavings, 
      threeYearSavings,
      competitorName: competitor.name
    };
  };

  const savings = calculateSavings();

  // Form Handlers
  const handleContactSubmit = () => {
    setShowSuccessMessage(true);
    setContactForm({
      venueName: '', name: '', email: '', currentPlatform: '', 
      monthlyVolume: '', preferredDomain: '', terms: false, newsletter: false
    });
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, checked) => {
    setContactForm(prev => ({ ...prev, [field]: checked }));
  };

  const handleCalcChange = (field, value) => {
    setCalculator(prev => ({ ...prev, [field]: value }));
  };

  const showCalculatorSuccess = () => {
    setShowCalcSuccessMessage(true);
    setTimeout(() => setShowCalcSuccessMessage(false), 4000);
  };

  // Countdown to March 31st, 2025
  const getTimeToDeadline = () => {
    const deadline = new Date('2025-03-31T23:59:59');
    const now = new Date();
    const diff = deadline - now;
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };

  const timeLeft = getTimeToDeadline();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        
        {/* Success Messages */}
        {showSuccessMessage && (
          <FlashMessage 
            status="success" 
            message="Your Founding Member Spot is Reserved!" 
            description="We'll contact you within 24 hours to finalize your white-label platform setup."
          />
        )}
        
        {showCalcSuccessMessage && (
          <FlashMessage 
            status="info" 
            message="Amazing Savings + Complete Brand Control!" 
            description="Lock in these savings before March 31st, 2025 deadline."
          />
        )}

        {/* Header */}
        <div style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 100,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          padding: '16px 0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img 
                  src="/src/assets/Theme=Light Colored.svg" 
                  alt="7AM.io"
                  style={{ height: '40px' }}
                />
                <Badge color="warning" size="normal">Complete White-Label Platform</Badge>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Typography newVariant="body1" style={{ color: '#666' }}>Platform</Typography>
                <Typography newVariant="body1" style={{ color: '#666' }}>Pricing</Typography>
                <Typography newVariant="body1" style={{ color: '#666' }}>Apps</Typography>
                <Button 
                  variant="filled" 
                  color="primary"
                  size="small"
                  startIcon={<FontAwesomeIcon icon={faCrown} />}
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Lock in Founding Price
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '120px 20px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* White-Label Badge */}
            <div style={{ marginBottom: '32px' }}>
              <Badge color="warning" size="large" style={{ marginBottom: '16px' }}>
                COMPLETE WHITE-LABEL PLATFORM
              </Badge>
              <br />
              <Typography newVariant="body1" style={{ color: '#666' }}>
                Your brand, your domain, your customers + Full app ecosystem included
              </Typography>
            </div>
            
            <Typography newVariant="hero-title-bold" style={{ marginBottom: '24px', fontSize: '52px', lineHeight: '1.1', color: '#1a1a1a' }}>
              Revolutionary for Australian Venues:<br/>
              $99/Month + 0% Processing Fees for 3 Years
            </Typography>
            
            <Typography newVariant="title1" style={{ marginBottom: '32px', fontSize: '20px', color: '#666' }}>
              Complete white-label ticketing platform with modular app ecosystem.<br/>
              Own your brand, choose your features, predictable pricing.<br/>
              <strong>First 75 venues lock in founding pricing for 3 years.</strong>
            </Typography>

            {/* Exclusive Offer Box */}
            <div style={{ 
              backgroundColor: '#ffffff',
              borderRadius: '16px', 
              padding: '32px',
              marginBottom: '40px',
              border: '2px solid #e5e5e5',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <Badge color="error" size="large" style={{ marginBottom: '16px' }}>
                FOUNDING MEMBER PRICING
              </Badge>
              <Typography newVariant="headline2" style={{ marginBottom: '12px', color: '#1a1a1a' }}>
                Available until March 31st, 2025
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <Typography newVariant="title2-bold" style={{ fontSize: '28px', color: '#1a1a1a' }}>$99/month</Typography>
                  <Typography newVariant="body1" style={{ color: '#666' }}>locked for 3 years</Typography>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Typography newVariant="title2-bold" style={{ fontSize: '28px', color: '#1a1a1a' }}>0% processing</Typography>
                  <Typography newVariant="body1" style={{ color: '#666' }}>fees for 3 years</Typography>
                </div>
              </div>
              <Typography newVariant="body2" style={{ color: '#666' }}>
                {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes remaining
              </Typography>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Button 
                variant="filled" 
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon={faCrown} />}
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                style={{ fontSize: '18px', padding: '16px 32px' }}
              >
                Lock in Founding Price
              </Button>
              
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                startIcon={<FontAwesomeIcon icon={faChartLine} />}
                onClick={() => {
                  document.getElementById('calculator-section').scrollIntoView({ behavior: 'smooth' });
                  showCalculatorSuccess();
                }}
              >
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div style={{ padding: '120px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px', color: '#1a1a1a' }}>
                Stop Building Someone Else's Brand<br/>While They Take Your Profits
              </Typography>
              <Typography newVariant="body1" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', fontStyle: 'italic', color: '#666' }}>
                "Every ticket you sell through Eventbrite is free marketing for them, paid for by you. Your customers never learn your venue's name."
              </Typography>
            </div>
            
            {/* Split Screen Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
              
              {/* Left Side - Competitor Problems */}
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#fff5f5',
                borderRadius: '16px',
                border: '2px solid #fecaca'
              }}>
                <Typography newVariant="headline2" style={{ marginBottom: '24px', textAlign: 'center', color: '#dc2626' }}>
                  Building THEIR Brand
                </Typography>
                
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>Eventbrite</strong> plasters THEIR logo on YOUR tickets (5.35% + $1.19 fees)
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>TryBooking</strong> gets credit for YOUR events (2.5% + $0.50 fees)
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      Your customers think they bought from <strong>Eventbrite</strong>, not you
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      You're marketing for <strong>THEIR</strong> brand while paying them fees
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      Zero customization = zero brand building for your venue
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>1,300+ Australian venues closed</strong> - every dollar to competitors hurts
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Right Side - White-Label Solution */}
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f0fdf4',
                borderRadius: '16px',
                border: '2px solid #bbf7d0'
              }}>
                <Typography newVariant="headline2" style={{ marginBottom: '24px', textAlign: 'center', color: '#16a34a' }}>
                  Building YOUR Brand
                </Typography>
                
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>YOUR logo</strong> on every ticket, email, and page
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>YOUR domain</strong> (tickets.yourvenue.com.au)
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      Customers know they're buying from <strong>YOUR venue</strong>
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>YOU own</strong> all customer data and relationships
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      Complete customization = strong venue brand building
                    </Typography>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a', marginTop: '4px' }} />
                    <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>
                      <strong>$99/month + 0% processing</strong> - keep every dollar
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <Typography newVariant="headline2" style={{ marginBottom: '12px', color: '#1a1a1a' }}>
                "With Eventbrite, you're an event organizer.<br/>With 7AM.io, you're a venue brand."
              </Typography>
            </div>
          </div>
        </div>

        {/* Solution: Complete White-Label Platform */}
        <div style={{ padding: '120px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px', color: '#1a1a1a' }}>
                Finally: Your Platform, Your Brand, Your Way
              </Typography>
              <Typography newVariant="body1" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: '#666' }}>
                The complete white-label ticketing platform built like modular e-commerce - extensible, customizable, predictable.
              </Typography>
            </div>
            
            {/* 3-Column Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
              
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff',
                borderRadius: '16px', 
                textAlign: 'center',
                border: '1px solid #e5e5e5',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '24px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px', color: '#1a1a1a' }}>MODULAR E-COMMERCE PLATFORMS</Typography>
                <div style={{ display: 'grid', gap: '12px', textAlign: 'left' }}>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Choose apps you need</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Your brand front and center</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Predictable monthly pricing</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff',
                borderRadius: '16px', 
                textAlign: 'center',
                border: '3px solid #4f46e5',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <FontAwesomeIcon icon={faTicket} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '24px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px', color: '#1a1a1a' }}>7AM FOR TICKETING</Typography>
                <div style={{ display: 'grid', gap: '12px', textAlign: 'left' }}>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Choose apps for your venue needs</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Complete white-label branding</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}><strong>✅ $99/month + 0% processing (3 years)</strong></Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff',
                borderRadius: '16px', 
                textAlign: 'center',
                border: '1px solid #e5e5e5',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <FontAwesomeIcon icon={faRocket} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '24px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px', color: '#1a1a1a' }}>EXTENSIBLE PLATFORM</Typography>
                <div style={{ display: 'grid', gap: '12px', textAlign: 'left' }}>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Add features as you grow</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ Custom development available</Typography>
                  <Typography newVariant="body1" style={{ color: '#1a1a1a' }}>✅ API access for integrations</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White-Label Showcase */}
        <div style={{ padding: '120px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Your Brand vs. Their Brand: See the Difference
              </Typography>
            </div>
            
            {/* Side-by-Side Visual Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              
              {/* LEFT SIDE - Building Their Brand */}
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '2px solid #e5e5e5'
              }}>
                <Typography newVariant="headline2" style={{ marginBottom: '24px', textAlign: 'center' }}>
                  "Building Their Brand"
                </Typography>
                
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">Eventbrite logo on checkout</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">"Powered by Eventbrite" footer</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">Eventbrite.com in the URL</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">Their colors, their fonts</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">Customer gets Eventbrite receipt</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">They own customer data</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#dc2626' }} />
                    <Typography newVariant="body1">You're just a "event organizer"</Typography>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Building YOUR Brand */}
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f0fdf4',
                borderRadius: '16px',
                border: '2px solid #bbf7d0'
              }}>
                <Typography newVariant="headline2" style={{ marginBottom: '24px', textAlign: 'center' }}>
                  "Building YOUR Brand"
                </Typography>
                
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOUR logo</strong> everywhere</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOUR domain</strong> (tickets.yourvenue.com.au)</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOUR colors</strong> and fonts throughout</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOUR branded</strong> email receipts</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOU own</strong> all customer data</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>YOUR Google Analytics</strong> tracking</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#16a34a' }} />
                    <Typography newVariant="body1"><strong>You are THE brand</strong> customers remember</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <div id="calculator-section" style={{ padding: '120px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Calculate Your Savings vs. Branded Platforms
              </Typography>
              <Typography newVariant="body1" style={{ fontSize: '18px', color: '#666' }}>
                See your 3-year savings + complete brand control
              </Typography>
            </div>
            
            <div style={{ 
              padding: '40px', 
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e5e5'
            }}>
              <div style={{ display: 'grid', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <Typography newVariant="body1" style={{ marginBottom: '8px' }}>Monthly Volume:</Typography>
                    <input 
                      type="range" 
                      min="100" 
                      max="10000" 
                      step="100"
                      value={calculator.monthlyTickets}
                      onChange={(e) => handleCalcChange('monthlyTickets', parseInt(e.target.value))}
                      style={{ width: '100%', marginBottom: '8px' }}
                    />
                    <Typography newVariant="body2" style={{ color: '#666' }}>{calculator.monthlyTickets.toLocaleString()} tickets/month</Typography>
                  </div>
                  
                  <Input 
                    label="Average Ticket Price ($)"
                    type="number"
                    value={calculator.avgPrice}
                    onChange={(e) => handleCalcChange('avgPrice', parseFloat(e.target.value) || 0)}
                  />
                </div>
                
                <Select 
                  label="Current Platform"
                  value={calculator.currentPlatform}
                  onChange={(value) => handleCalcChange('currentPlatform', value)}
                  options={currentPlatforms}
                />
              </div>
              
              {/* Results */}
              <div style={{ padding: '32px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                <Typography newVariant="headline2" style={{ marginBottom: '24px', textAlign: 'center' }}>Your Savings Breakdown</Typography>
                
                <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography newVariant="body1">Monthly Revenue:</Typography>
                    <Typography newVariant="body1" style={{ fontWeight: 'bold' }}>${savings.monthlyRevenue.toLocaleString()}</Typography>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography newVariant="body1">{savings.competitorName} (with their branding):</Typography>
                    <Typography newVariant="body1" style={{ color: '#dc2626', fontWeight: 'bold' }}>${savings.competitorMonthlyCost.toFixed(0)}/month</Typography>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography newVariant="body1">7AM.io White-Label:</Typography>
                    <Typography newVariant="body1" style={{ fontWeight: 'bold' }}>${savings.sevenAmMonthlyCost}/month + $0 processing</Typography>
                  </div>
                  
                  <div style={{ height: '2px', backgroundColor: '#e5e5e5', margin: '8px 0' }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography newVariant="headline3">Monthly Savings:</Typography>
                    <Typography newVariant="headline3" style={{ color: '#16a34a', fontWeight: 'bold' }}>${savings.monthlySavings.toFixed(0)}</Typography>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#16a34a', borderRadius: '8px' }}>
                    <Typography newVariant="headline2" style={{ color: '#ffffff' }}>YOUR 3-YEAR SAVINGS:</Typography>
                    <Typography newVariant="hero-title-bold" style={{ color: '#ffffff', fontSize: '32px' }}>${savings.threeYearSavings.toLocaleString()}</Typography>
                  </div>
                  
                  <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <Typography newVariant="headline3" style={{ color: '#16a34a' }}>+ Complete Brand Control</Typography>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <Button 
                  variant="filled" 
                  color="primary" 
                  size="large"
                  startIcon={<FontAwesomeIcon icon={faCrown} />}
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Lock in These Savings Before March 31st
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* App Ecosystem */}
        <div style={{ padding: '120px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Choose Your Apps from Our Integrated Ecosystem
              </Typography>
              <Typography newVariant="body1" style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
                All Included at $99/Month
              </Typography>
              <Badge color="success" size="large">Modular App Store - Build What You Need</Badge>
            </div>
            
            {/* App Store Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faGift} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>VENUE BENEFITS APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Create VIP experiences, loyalty programs</Typography>
                  <Typography newVariant="body1">• Add value beyond just ticket sales</Typography>
                  <Typography newVariant="body1">• Build repeat customer relationships</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faUserFriends} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>AFFILIATE SALES APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Turn fans into sales ambassadors</Typography>
                  <Typography newVariant="body1">• Track performance, manage commissions</Typography>
                  <Typography newVariant="body1">• Grow through word-of-mouth marketing</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>SMART PROMOTIONS APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Dynamic discounts and campaigns</Typography>
                  <Typography newVariant="body1">• Target specific customer segments</Typography>
                  <Typography newVariant="body1">• Automated promotional workflows</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faRecycle} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>CUSTOMER SELF-SERVICE APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Let customers swap/transfer tickets</Typography>
                  <Typography newVariant="body1">• Reduce admin workload by 60%</Typography>
                  <Typography newVariant="body1">• Improve satisfaction scores</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>REVENUE RECOVERY APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Automatically recover abandoned purchases</Typography>
                  <Typography newVariant="body1">• Re-engage customers with smart sequences</Typography>
                  <Typography newVariant="body1">• Turn lost sales into conversions</Typography>
                </div>
              </div>
              
              <div style={{ 
                padding: '32px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5'
              }}>
                <FontAwesomeIcon icon={faChartBar} style={{ fontSize: '48px', color: '#4f46e5', marginBottom: '20px' }} />
                <Typography newVariant="headline2" style={{ marginBottom: '16px' }}>ADVANCED ANALYTICS APP</Typography>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <Typography newVariant="body1">• Deep customer insights and behavior</Typography>
                  <Typography newVariant="body1">• Predictive capacity planning</Typography>
                  <Typography newVariant="body1">• Revenue optimization recommendations</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Member Benefits */}
        <div style={{ padding: '120px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Lock in Complete Platform Access for 3 Years
              </Typography>
            </div>
            
            <div style={{ 
              padding: '48px', 
              backgroundColor: '#4f46e5',
              borderRadius: '20px',
              color: '#ffffff',
              marginBottom: '40px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Typography newVariant="hero-title-bold" style={{ marginBottom: '16px', color: '#ffffff', fontSize: '36px' }}>
                  FOUNDING MEMBER BENEFITS
                </Typography>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>$99/month locked for 3 years (future price: $149+)</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>0% processing fees for 3 years (then 2.5%)</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Complete app ecosystem included</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Full white-label customization</Typography>
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Priority feature development</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Australian Stripe + Pin Payments setup</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Free migration assistance</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                    <Typography newVariant="body1" style={{ color: '#ffffff' }}>Dedicated onboarding specialist</Typography>
                  </div>
                </div>
              </div>
            </div>

            <FlashMessage 
              status="error" 
              message="Founding prices end March 31st, 2025" 
              description="After: Standard pricing $149/month + 2.5% processing fees"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-section" style={{ padding: '120px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Reserve Your White-Label Platform
              </Typography>
              <Typography newVariant="body1" style={{ fontSize: '18px', color: '#666' }}>
                Lock in founding member pricing before March 31st, 2025
              </Typography>
              <div style={{ marginTop: '16px' }}>
                <Badge color="error" size="large">{timeLeft.days} days, {timeLeft.hours}h {timeLeft.minutes}m remaining</Badge>
              </div>
            </div>
            
            <div style={{ 
              padding: '48px', 
              backgroundColor: '#f8f9fa',
              borderRadius: '20px',
              border: '1px solid #e5e5e5'
            }}>
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <Input 
                    label="Venue Name"
                    placeholder="Your venue name"
                    value={contactForm.venueName}
                    onChange={(e) => handleInputChange('venueName', e.target.value)}
                    startIcon={<FontAwesomeIcon icon={faHome} />}
                  />
                  
                  <Input 
                    label="Your Name"
                    placeholder="Contact person"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    startIcon={<FontAwesomeIcon icon={faUser} />}
                  />
                </div>
                
                <Input 
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={contactForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  startIcon={<FontAwesomeIcon icon={faEnvelope} />}
                />
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <Select 
                    label="Current Platform"
                    value={contactForm.currentPlatform}
                    onChange={(value) => handleInputChange('currentPlatform', value)}
                    options={currentPlatforms}
                    placeholder="Select current platform"
                  />
                  
                  <Select 
                    label="Monthly Ticket Volume"
                    value={contactForm.monthlyVolume}
                    onChange={(value) => handleInputChange('monthlyVolume', value)}
                    options={monthlyVolumes}
                    placeholder="Select volume range"
                  />
                </div>
                
                <Input 
                  label="Preferred Domain"
                  placeholder="tickets.yourvenue.com.au"
                  value={contactForm.preferredDomain}
                  onChange={(e) => handleInputChange('preferredDomain', e.target.value)}
                  startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                  helperText="Your custom white-label domain"
                />
                
                <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px' }}>
                  <Checkbox 
                    label="I agree to lock in 3-year founding member pricing ($99/month + 0% processing)"
                    checked={contactForm.terms}
                    onChange={(checked) => handleCheckboxChange('terms', checked)}
                  />
                  
                  <div style={{ marginTop: '12px' }}>
                    <Checkbox 
                      label="Keep me updated on white-label platform development"
                      checked={contactForm.newsletter}
                      onChange={(checked) => handleCheckboxChange('newsletter', checked)}
                    />
                  </div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <Button 
                    variant="filled" 
                    color="primary"
                    size="large"
                    startIcon={<FontAwesomeIcon icon={faCrown} />}
                    onClick={handleContactSubmit}
                    style={{ fontSize: '18px', padding: '16px 40px' }}
                  >
                    Lock in My Founding Price
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ padding: '120px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '44px' }}>
                Frequently Asked Questions
              </Typography>
            </div>
            
            <div style={{ display: 'grid', gap: '24px' }}>
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">How is this like Shopify for ticketing?</Typography>
                </div>
                <Typography newVariant="body1">
                  Modular apps, white-label branding, predictable pricing, and extensible platform that grows with you. Just like Shopify lets you build your e-commerce brand, 7AM.io lets you build your ticketing brand.
                </Typography>
              </div>
              
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">Do customers ever see 7AM.io branding?</Typography>
                </div>
                <Typography newVariant="body1">
                  Never. Complete white-label means your brand everywhere - emails, tickets, checkout, everything. Customers will only see your venue's brand.
                </Typography>
              </div>
              
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">What apps are included in $99/month?</Typography>
                </div>
                <Typography newVariant="body1">
                  All current apps (Benefits, Affiliate Sales, Smart Promotions, Self-Service, Revenue Recovery, Advanced Analytics) + all future app releases during your 3-year founding period.
                </Typography>
              </div>
              
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">Can I use my own domain?</Typography>
                </div>
                <Typography newVariant="body1">
                  Yes, complete custom domain setup included (tickets.yourvenue.com.au). We handle all the technical setup for you.
                </Typography>
              </div>
              
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">What happens after 3 years?</Typography>
                </div>
                <Typography newVariant="body1">
                  0% processing stays forever. Monthly fee adjusts to market rate ($149+). You'll always have the best processing fee structure in the industry.
                </Typography>
              </div>
              
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#4f46e5', fontSize: '24px' }} />
                  <Typography newVariant="headline3">How is migration handled?</Typography>
                </div>
                <Typography newVariant="body1">
                  White-glove migration service included - we handle everything. Your dedicated onboarding specialist will migrate all your data, set up your branding, and train your team.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ 
          backgroundColor: '#ffffff',
          padding: '120px 20px',
          textAlign: 'center',
          border: '1px solid #e5e5e5'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Typography newVariant="title1-bold" style={{ marginBottom: '24px', fontSize: '48px', color: '#1a1a1a' }}>
              Lock in Your 3-Year Founding Member Benefits<br/>Before March 31st
            </Typography>
            
            <Typography newVariant="body1" style={{ marginBottom: '32px', fontSize: '20px', color: '#666' }}>
              Only founding members get $99/month + 0% processing locked for 3 years.<br/>
              After March 31st: Standard pricing becomes $149/month + 2.5% processing fees immediately.
            </Typography>
            
            {/* Countdown Timer */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '24px', 
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#4f46e5', 
                borderRadius: '12px',
                minWidth: '100px',
                color: '#ffffff'
              }}>
                <Typography newVariant="hero-title-bold" style={{ color: '#ffffff', fontSize: '32px' }}>{timeLeft.days}</Typography>
                <Typography newVariant="body1" style={{ color: '#ffffff' }}>Days</Typography>
              </div>
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#4f46e5', 
                borderRadius: '12px',
                minWidth: '100px',
                color: '#ffffff'
              }}>
                <Typography newVariant="hero-title-bold" style={{ color: '#ffffff', fontSize: '32px' }}>{timeLeft.hours}</Typography>
                <Typography newVariant="body1" style={{ color: '#ffffff' }}>Hours</Typography>
              </div>
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#4f46e5', 
                borderRadius: '12px',
                minWidth: '100px',
                color: '#ffffff'
              }}>
                <Typography newVariant="hero-title-bold" style={{ color: '#ffffff', fontSize: '32px' }}>{timeLeft.minutes}</Typography>
                <Typography newVariant="body1" style={{ color: '#ffffff' }}>Minutes</Typography>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <Button 
                variant="filled" 
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon={faCrown} />}
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                style={{ fontSize: '20px', padding: '20px 40px' }}
              >
                Lock in 3-Year Benefits
              </Button>
              
              <Button 
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<FontAwesomeIcon icon={faPhone} />}
              >
                Questions? Book a 15-min call
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              <div>
                <img 
                  src="/src/assets/Theme=Dark Colored.svg" 
                  alt="7AM.io"
                  style={{ height: '40px', marginBottom: '20px' }}
                />
                <Typography newVariant="body1" style={{ color: '#666', marginBottom: '12px' }}>
                  Built for Australian venues
                </Typography>
                <Typography newVariant="body2" style={{ color: '#666' }}>
                  Complete White-Label Platform<br/>
                  Your Brand Everywhere<br/>
                  Integrated App Ecosystem<br/>
                  Founding Member Exclusivity
                </Typography>
              </div>
              
              <div>
                <Typography newVariant="headline3" style={{ marginBottom: '16px' }}>Platform</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>White-Label Ticketing</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>App Ecosystem</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>API Access</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Custom Development</Typography>
              </div>
              
              <div>
                <Typography newVariant="headline3" style={{ marginBottom: '16px' }}>Support</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Migration Assistance</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Onboarding Specialist</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Priority Development</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Australian Support</Typography>
              </div>
              
              <div>
                <Typography newVariant="headline3" style={{ marginBottom: '16px' }}>Contact</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>hello@7am.io</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>+61 2 8000 7000</Typography>
                <Typography newVariant="body2" style={{ color: '#666', marginBottom: '8px' }}>Sydney, Australia</Typography>
                <Typography newVariant="body2" style={{ color: '#4f46e5', marginTop: '12px' }}>
                  Founding Member Program<br/>March 31st, 2025 Deadline
                </Typography>
              </div>
            </div>
            
            <div style={{ height: '1px', backgroundColor: '#e5e5e5', margin: '40px 0' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography newVariant="body2" style={{ color: '#666' }}>
                © 2024 7AM.io. All rights reserved. • Complete White-Label Platform
              </Typography>
              <div style={{ display: 'flex', gap: '24px' }}>
                <Typography newVariant="body2" style={{ color: '#666' }}>Privacy</Typography>
                <Typography newVariant="body2" style={{ color: '#666' }}>Terms</Typography>
                <Typography newVariant="body2" style={{ color: '#4f46e5' }}>Founding Member Program</Typography>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </ThemeProvider>
  );
};

export default App; 