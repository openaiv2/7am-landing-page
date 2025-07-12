## Select

The select component depends on the [react-select](https://react-select.com/home) library. The library styles has been
customized to conform with @fusionpay UI standard

### Usage

Check the [react-select](https://react-select.com/home) library for more usage.

```jsx
import React, { useState } from "react";
import { Select } from "@fusionpay/design-system";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
```

### API

| Property    | Description                                                                  | Type                                 | Default   | Version |
| ----------- | ---------------------------------------------------------------------------- | ------------------------------------ | --------- | ------- |
| rootClasses | Add css class to the root div of the select                                  | string                               | -         |         |
| disabled    | Disabled state of select                                                     | boolean                              | false     |         |
| helperText  | Set select helper text for feedback on success, error, warning or info state | boolean                              | false     |         |
| label       | Add a label to the top of the select                                         | string                               | -         |         |
| shape       | Set shape of the select                                                      | `angular`, `rounded`                 | `angular` |         |
| size        | Set the size of the select                                                   | `small`, `normal`,`large`            | `normal`  |         |
| status      | Set select current status                                                    | `success`, `error`,`warning`, `info` | `default` |         |
| variant     | Set variant of select                                                        | `filled`,`outlined`                  | `filled`  |         |

The component accepts all props which [react-select](https://react-select.com/home) support excluding `classNames`
, `unstyled` and `id`.

### Important props note

**id:** When you pass id to the props, the component automatically pass id to the label and helperText element,
with [id]-label and [id]-helperText respectively.

**status:** The active status controls the select current border and helperText color
