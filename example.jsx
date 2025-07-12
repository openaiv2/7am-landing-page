import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  createBaseTheme, 
  Button, 
  Input, 
  Typography, 
  Modal, 
  Checkbox, 
  Switch,
  Badge,
  FlashMessage,
  Divider
} from '@fusionpay/design-system';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // Theme erstellen
  const theme = createBaseTheme('light'); // oder 'dark'

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Typography Beispiele */}
        <Typography newVariant="hero-title" style={{ marginBottom: '16px' }}>
          FusionPay Design System
        </Typography>
        
        <Typography newVariant="body1" style={{ marginBottom: '24px' }}>
          Das Design System ist erfolgreich installiert und funktioniert!
        </Typography>

        {/* Flash Message */}
        <FlashMessage 
          status="success" 
          message="Installation erfolgreich!" 
          description="Das FusionPay Design System wurde korrekt installiert."
          style={{ marginBottom: '24px' }}
        />

        {/* Button Beispiele */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <Button 
            variant="filled" 
            color="primary" 
            size="normal"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Primary Button
          </Button>
          
          <Button 
            variant="outlined" 
            color="success" 
            size="normal"
            startIcon={<FontAwesomeIcon icon={faCheck} />}
          >
            Success Button
          </Button>
          
          <Button 
            variant="filled" 
            color="warning" 
            size="small"
            onClick={() => setIsModalOpen(true)}
          >
            Modal öffnen
          </Button>
        </div>

        {/* Input Beispiele */}
        <div style={{ marginBottom: '24px' }}>
          <Input 
            label="Beispiel Input"
            placeholder="Gib etwas ein..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            startIcon={<FontAwesomeIcon icon={faUser} />}
            helperText="Das ist ein Hilfstext"
            style={{ marginBottom: '16px' }}
          />
        </div>

        {/* Toggle Komponenten */}
        <div style={{ marginBottom: '24px' }}>
          <Checkbox 
            label="Checkbox Beispiel"
            checked={isChecked}
            onChange={setIsChecked}
            style={{ marginBottom: '12px' }}
          />
          
          <Switch 
            label="Switch Beispiel"
            checked={isChecked}
            onChange={setIsChecked}
            color="primary"
          />
        </div>

        {/* Badge Beispiele */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Badge color="success" size="normal">Erfolgreich</Badge>
          <Badge color="warning" size="normal">Warnung</Badge>
          <Badge color="error" size="normal">Fehler</Badge>
          <Badge color="info" size="normal">Info</Badge>
        </div>

        {/* Divider */}
        <Divider style={{ margin: '24px 0' }} />

        {/* Modal */}
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Beispiel Modal"
          subtitle="Das ist ein Beispiel für das Modal-Komponente"
          okText="OK"
          cancelText="Abbrechen"
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        >
          <Typography newVariant="body1">
            Das ist der Inhalt des Modals. Hier können weitere Komponenten 
            und Inhalte platziert werden.
          </Typography>
        </Modal>

        {/* Weitere Typography Varianten */}
        <div>
          <Typography newVariant="headline1" style={{ marginBottom: '8px' }}>
            Headline 1
          </Typography>
          <Typography newVariant="headline2" style={{ marginBottom: '8px' }}>
            Headline 2
          </Typography>
          <Typography newVariant="body1" style={{ marginBottom: '8px' }}>
            Body Text - Das Design System enthält viele weitere Komponenten wie:
          </Typography>
          <ul style={{ marginLeft: '20px' }}>
            <li>DatePicker & TimePicker</li>
            <li>Select Dropdown</li>
            <li>Tooltip</li>
            <li>Dropdown Menu</li>
            <li>OTP Input</li>
            <li>Event Components</li>
            <li>Language Select</li>
            <li>Und viele mehr!</li>
          </ul>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default ExampleComponent; 