## Checkbox

### Usage

```
import { Switch } from "@fusionpay/design-system"

export default function App(){

    return (
        <div className="App">
            <Switch label="Hello world" />
        </div>
    )
}

```

### API

| Property       | Description                             | Type                     | Default | Version |
| -------------- | --------------------------------------- | ------------------------ | ------- | ------- |
| checked        | Switch state of the component           | boolean                  | false   |         |
| defaultChecked | Default switched state of the component | boolean                  | false   |         |
| disabled       | Disabled state of the component         | boolean                  | false   |         |
| label          | Set label for the component             | ReactNode                | -       |         |
| onChange       | Set the handler to handle change event  | (event: boolean) => void | -       |         |
