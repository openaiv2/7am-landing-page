# FusionPay Design System - Verfügbare Komponenten

## 🎨 Theme System
- `createBaseTheme(mode)` - Erstellt ein Theme ('light' oder 'dark')
- `ThemeProvider` - Wrapper-Komponente für das Theme (aus styled-components)

## 📝 Form Komponenten
- `Input` - Text-Input mit verschiedenen Varianten
- `InputContainer` - Container für custom Input-Komponenten
- `Textarea` - Mehrzeiliger Text-Input
- `Select` - Dropdown-Auswahl
- `DatePicker` - Datum-Auswahl
- `TimePicker` - Zeit-Auswahl
- `CustomDatePicker` - Erweiterte Datum-Auswahl
- `Checkbox` - Checkbox-Komponente
- `Switch` - Toggle-Switch
- `RadioButton` - Radio-Button
- `OtpInput` - OTP/Code-Eingabe

## 🔘 Button Komponenten
- `Button` - Primary Button-Komponente
  - Varianten: `filled`, `outlined`
  - Farben: `primary`, `success`, `warning`, `error`, `info`, `dark`, `grey`, `transparent`
  - Größen: `small`, `normal`, `large`

## 📄 Typography
- `Typography` - Text-Komponente mit vielen Varianten:
  - `hero-title`, `hero-title-bold`
  - `title1`, `title1-bold`, `title2`, `title2-bold`, etc.
  - `headline1`, `headline2`, `headline3` (mit semiBold/medium)
  - `body1`, `body2` (mit semiBold/medium)
  - `caption`, `link1`, `link2`, `link3`
  - `button-large`, `button-medium`, `button-small`

## 🪟 Layout Komponenten
- `Modal` - Modal-Dialog
- `Divider` - Trennlinie (horizontal/vertikal)
- `Backdrop` - Hintergrund-Overlay

## 🔔 Feedback Komponenten
- `FlashMessage` - Benachrichtigungen
  - Status: `success`, `warning`, `error`, `brand`, `neutral-01`
- `Badge` - Status-Badges
  - Farben: `success`, `warning`, `error`, `info`
  - Größen: `small`, `normal`, `large`
- `Notification` - Benachrichtigungs-Indikator
- `MiniToast` - Kleine Toast-Nachrichten

## 📋 Navigation & Menüs
- `Dropdown` - Dropdown-Container
- `DropdownMenu` - Dropdown-Menü
- `DropdownListItem` - Dropdown-Menü-Item
- `DropdownMenuHeaderSearch` - Suchfeld im Dropdown-Header
- `DropdownMenuHeaderTitle` - Titel im Dropdown-Header
- `HorizontalNavigation` - Horizontale Navigation
- `Tooltip` - Tooltip-Komponente

## 🎭 Spezial Komponenten
- `InfoCard` - Informations-Karten
- `EventDateLocation` - Event-Datum und -Ort
- `LanguageSelect` - Sprach-Auswahl
- `MediaHover` - Media-Hover-Effekte
- `Article` - Artikel-Anzeige
- `RemoteIcon` - Remote-Icon-Loader

## 🎨 Farb-System
Das Design System enthält ein umfassendes Farb-System mit:
- `neutral` - Neutrale Farben (00-08)
- `brand` - Brand-Farben (B2B & B2C)
- `success`, `warning`, `error`, `info` - Status-Farben
- Light/Dark Theme Support

## 🔧 Utility Funktionen
- `$getIconByName(name)` - Icon nach Name abrufen
- `$searchIconByName(query)` - Icon-Suche
- `$currencyFormatterHelper()` - Währungs-Formatierung

## 📦 Verwendung

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  createBaseTheme, 
  Button, 
  Input, 
  Typography,
  Modal,
  // ... weitere Komponenten
} from '@fusionpay/design-system';

const App = () => {
  const theme = createBaseTheme('light'); // oder 'dark'
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography newVariant="hero-title">
          Meine App
        </Typography>
        <Button variant="filled" color="primary">
          Klick mich!
        </Button>
      </div>
    </ThemeProvider>
  );
};
```

## 📋 Abhängigkeiten
- React 18.3.1+
- styled-components 5+
- @fortawesome/fontawesome-svg-core 6.4.0+
- @fortawesome/react-fontawesome 0.2.0+

## 🎯 Wichtige Hinweise
1. **Theme Provider:** Alle Komponenten müssen in einem `ThemeProvider` gewrappt werden
2. **FontAwesome:** Pro-Icons werden unterstützt, aber Free-Icons funktionieren auch
3. **TypeScript:** Vollständig typisiert mit ausführlichen Definitionen
4. **Responsive:** Komponenten sind responsive-ready
5. **Accessibility:** Komponenten folgen Accessibility-Standards 