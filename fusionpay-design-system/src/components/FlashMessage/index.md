## FlashMessage

### Usage

```jsx
import { FlashMessage } from "@fusionpay/design-system";

export default function App() {
  return (
    <div className="App">
      <FlashMessage message={"Congratulation!"} />
    </div>
  );
}
```

### API

| Property    | Description                           | Type                                 | Default   | Version |
| ----------- | ------------------------------------- | ------------------------------------ | --------- | ------- |
| closeable   | Show close button                     | boolean                              | `false`   |         |
| status      | Set FlashMessage color                | `success`, `warning`,`error`, `info` | `success` |         |
| description | Add description to component          | ReactNode                            | -         |         |
| icon        | Add Custom Right Icon to component    | ReactNode                            | -         |         |
| message     | Add message title to the component    | ReactNode                            | -         |         |
| onClose     | Set the handler to handle click event | (event: MouseEvent) => void          | -         |         |
