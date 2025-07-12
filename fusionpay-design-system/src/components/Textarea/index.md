## Input

The select component depends on the [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)
library. The library styles has been
customized to conform with @fusionpay UI standard

### Usage

Check the [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize) library for more usage.

```jsx
import { Textarea } from "@fusionpay/design-system";

export default function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <Textarea
        onChange={handleChange}
        placeholder="Enter text here..."
        minRows={4}
        maxRows={6}
      />
    </div>
  );
}
```

### API

| Property         | Description                                                                 | Type                                 | Default   | Version |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------ | --------- | ------- |
| containerClasses | Add css class to the container of the input                                 | string                               | -         |         |
| disabled         | Disabled state of input                                                     | boolean                              | false     |         |
| helperText       | Set input helper text for feedback on success, error, warning or info state | boolean                              | false     |         |
| label            | Add a label to the top of the input                                         | string                               | -         |         |
| rootClasses      | Add css class to the root div of the input                                  | string                               | -         |         |
| search           | Set input state to search, to have a search icon at startIcon position      | boolean                              | false     |         |
| shape            | Set shape of the input                                                      | `angular`, `rounded`                 | `angular` |         |
| size             | Set the size of the input                                                   | `small`, `normal`,`large`            | `normal`  |         |
| status           | Set input current status                                                    | `success`, `error`,`warning`, `info` | `default` |         |
| variant          | Set variant of input                                                        | `filled`,`outlined`                  | `filled`  |         |

The component accepts all props which [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)
support
excluding `classNames`
, `unstyled` and `id`.

### Important props note

**id:** When you pass id to the props, the component automatically pass id to the label and helperText element,
with [id]-label and [id]-helperText respectively.

**status:** The active status controls the input current border and helperText color
