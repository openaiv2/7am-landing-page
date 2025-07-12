## TimePicker

The TimePicker component depends on the [react-time-picker](https://projects.wojtekmaj.pl/react-time-picker/) library.
The
library styles
has been
customized to conform with @fusionpay UI standard

### Usage

Check the [react-time-picker](https://projects.wojtekmaj.pl/react-time-picker/) library for more usage.

```jsx
import { TimePicker } from "@fusionpay/design-system";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <TimePicker
        onChange={(value) => {
          setValue(value);
        }}
        value={value}
      />
    </div>
  );
}
```

### API

| Property    | Description                                                                      | Type                                 | Default   | Version |
| ----------- | -------------------------------------------------------------------------------- | ------------------------------------ | --------- | ------- |
| rootClasses | Add css class to the root div of the TimePicker                                  | string                               | -         |         |
| disabled    | Disabled state of TimePicker                                                     | boolean                              | false     |         |
| helperText  | Set TimePicker helper text for feedback on success, error, warning or info state | boolean                              | false     |         |
| label       | Add a label to the top of the TimePicker                                         | string                               | -         |         |
| shape       | Set shape of the TimePicker                                                      | `angular`, `rounded`                 | `angular` |         |
| size        | Set the size of the TimePicker                                                   | `small`, `normal`,`large`            | `normal`  |         |
| status      | Set TimePicker current status                                                    | `success`, `error`,`warning`, `info` | `default` |         |
| variant     | Set variant of TimePicker                                                        | `filled`,`outlined`                  | `filled`  |         |

The component accepts all props which [react-time-picker](https://projects.wojtekmaj.pl/react-time-picker/) support
excluding `classNames`
, `unstyled` and `id`.

### Important props note

**id:** When you pass id to the props, the component automatically pass id to the label and helperText element,
with [id]-label and [id]-helperText respectively.

**status:** The active status controls the component current border and helperText color
