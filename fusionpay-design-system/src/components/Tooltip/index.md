## ToolTip

The Tooltip component depends on the [floating-UI](https://floating-ui.com/) library. The library styles has been
customized to conform with @fusionpay UI standard

### Usage

```jsx
import React, { useState } from "react";
import { Tooltip } from "./Tooltip";

export default function App() {
  return (
    <div className="App">
      <Tooltip
        title={"Toggletip Title"}
        multiline={true}
        href={"#"}
        linkComponent={"a"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Duis in velit at ultrices. Diam purus cursus pulvinar enim et semper. A consequat eget purus volutpat."
        }
        linkText={"Link"}
      >
        <FontAwesomeIcon icon={faCircleInfo} fontSize={14} color={""} />
      </Tooltip>
    </div>
  );
}
```

### API

| Property      | Description                                | Type            | Default | Version |
| ------------- | ------------------------------------------ | --------------- | ------- | ------- |
| title         | Add tool tip title                         | ReactNode       | -       |         |
| content       | Add information on tooltip                 | ReactNode       | -       |         |
| placement     | Add position of the tooltip when displayed | string          | `top`   |         |
| href          | Redirect link activated on Click           | string          | -       |         |
| miltiline     | Use multi line toop tips                   | boolean         | false   |         |
| config        | Floating position references               | string          | -       |         |
| trigger       | Tool tip trigger                           | `hover`,`click` | `hover` |         |
| children      | Custom trigger component                   | ReactNode       | -       |         |
| infoIcon      | Add variable to use default info icon      | boolean         | false   |         |
| linkText      | Link serving text                          | string          | -       |         |
| linkComponent | Custom link component                      | ReactNode       | -       |         |
