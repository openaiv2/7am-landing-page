## Checkbox

### Usage

```
import { Checkbox } from "@fusionpay/design-system"

export default function App(){

    return (
        <div className="App">
            <Checkbox label="Hello world" />
        </div>
    )
}

```

### API

| Property | Description                            | Type                     | Default | Version |
| -------- | -------------------------------------- | ------------------------ | ------- | ------- |
| checked  | Checked state of the component         | boolean                  | false   |         |
| disabled | Disabled state of component            | boolean                  | false   |         |
| label    | Set label for the component            | ReactNode                | -       |         |
| onChange | Set the handler to handle change event | (event: boolean) => void | -       |         |
