## Button

### Usage

```
import { Button } from "@fusionpay/design-system"

export default function App(){

    return (
        <div className="App">
            <Button>Hello world</Button>
        </div>
    )
}

```

### API

| Property  | Description                               | Type                                                                        | Default   | Version |
| --------- | ----------------------------------------- | --------------------------------------------------------------------------- | --------- | ------- |
| color     | Set button color                          | `primary`, `success`, `warning`,`error`, `info`,`dark`,`grey`,`transparent` | `primary` |         |
| disabled  | Disabled state of button                  | boolean                                                                     | false     |         |
| endIcon   | Add Icon to button after it text          | ReactNode                                                                   |           |         |
| fullWidth | Set button to full width of the container | boolean                                                                     | false     |         |
| shape     | Set shape of the button                   | `angular`, `rounded`                                                        | `angular` |         |
| size      | Set button size                           | `small`, `normal`,`large`                                                   | `normal`  |         |
| startIcon | Add Icon to button before it text         | ReactNode                                                                   | -         |         |
| variant   | Set variant of button                     | `filled`,`outlined`                                                         | `filled`  |         |
| onClick   | Set the handler to handle click event     | (event: MouseEvent) => void                                                 | -         |         |

The component accepts all props which native buttons support.
