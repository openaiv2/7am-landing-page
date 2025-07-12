## DatePicker

The DatePicker component depends on the [react-date-picker](https://projects.wojtekmaj.pl/react-date-picker/) library.
The
library styles
has been
customized to conform with @fusionpay UI standard

### Usage

Check the [react-date-picker](https://projects.wojtekmaj.pl/react-date-picker/) library for more usage.

```jsx
import { DatePicker } from "@fusionpay/design-system";

export default function App() {
  return (
    <div className="App">
      <DatePicker
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}
```

### API

| Property    | Description                                                                      | Type                                 | Default   | Version |
| ----------- | -------------------------------------------------------------------------------- | ------------------------------------ | --------- | ------- |
| rootClasses | Add css class to the root div of the DatePicker                                  | string                               | -         |         |
| disabled    | Disabled state of DatePicker                                                     | boolean                              | false     |         |
| helperText  | Set DatePicker helper text for feedback on success, error, warning or info state | boolean                              | false     |         |
| label       | Add a label to the top of the DatePicker                                         | string                               | -         |         |
| shape       | Set shape of the DatePicker                                                      | `angular`, `rounded`                 | `angular` |         |
| size        | Set the size of the DatePicker                                                   | `small`, `normal`,`large`            | `normal`  |         |
| status      | Set DatePicker current status                                                    | `success`, `error`,`warning`, `info` | `default` |         |
| variant     | Set variant of DatePicker                                                        | `filled`,`outlined`                  | `filled`  |         |

The component accepts all props which [react-date-picker](https://projects.wojtekmaj.pl/react-date-picker/) support
excluding `classNames`
, `unstyled` and `id`.

### Important props note

**id:** When you pass id to the props, the component automatically pass id to the label and helperText element,
with [id]-label and [id]-helperText respectively.

**status:** The active status controls the DatePicker current border and helperText color
