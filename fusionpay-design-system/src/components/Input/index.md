## Input

### Usage

```jsx
import { Input } from "@fusionpay/design-system";

export default function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <Input onChange={handleChange} placeholder="Enter text here..." />
    </div>
  );
}
```

### API

| Property         | Description                                                                 | Type                                 | Default   | Version |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------ | --------- | ------- |
| allowClear       | Show cancel icon at the end of input to clear input value                   | boolean                              | false     |         |
| containerClasses | Add css class to the container of the input                                 | string                               | -         |         |
| disabled         | Disabled state of input                                                     | boolean                              | false     |         |
| endIcon          | Add Icon to input after it text                                             | ReactNode                            | -         |         |
| endText          | Add text to replace endIcon                                                 | string                               | -         |         |
| helperText       | Set input helper text for feedback on success, error, warning or info state | boolean                              | false     |         |
| label            | Add a label to the top of the input                                         | string                               | -         |         |
| rootClasses      | Add css class to the root div of the input                                  | string                               | -         |         |
| search           | Set input state to search, to have a search icon at startIcon position      | boolean                              | false     |         |
| shape            | Set shape of the input                                                      | `angular`, `rounded`                 | `angular` |         |
| size             | Set the size of the input                                                   | `small`, `normal`,`large`            | `normal`  |         |
| startIcon        | Add Icon to input before it text                                            | ReactNode                            | -         |         |
| status           | Set input current status                                                    | `success`, `error`,`warning`, `info` | `default` |         |
| variant          | Set variant of input                                                        | `filled`,`outlined`                  | `filled`  |         |
| onClear          | Set the handler to handle clear event when allowClear is set to true        | () => void                           | -         |         |

The component accepts all props which native input support.

### Important props note

**id:** When you pass id to the props, the component automatically pass id to the label and helperText element,
with [id]-label and [id]-helperText respectively.

**status:** The active status controls the input current border and helperText color
