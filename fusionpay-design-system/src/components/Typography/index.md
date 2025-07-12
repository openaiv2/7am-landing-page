## Typography

### Usage

```
import { Typography } from "@fusionpay/design-system"

export default function App(){

    return (
        <div className="App">
            <Typography>Hello world</Typography>
        </div>
    )
}

```

### Changing the semantic element

You can change the underlying element for a one-off situation with the component prop:

```
import { Typography } from "@fusionpay/design-system"
import { Link } from "react-router-dom"

export default function App(){
    return (
        <div className="App">
            <Typography component="span">Go home</Typography>
            <Typography component={Link} to="/app" variant="link1">Go home</Typography>
        </div>
    )
}

```

### API

| Property  | Description                       | Type                                         | Default     | Version |
| --------- | --------------------------------- | -------------------------------------------- | ----------- | ------- |
| color     | Set button color                  | [ColorTypes](/src/types/styles.ts)           | `neutra-04` |         |
| component | Set another underlying element    | `React.ElementType<P>` or `ComponentType<P>` | `neutra-04` |         |
| variant   | Set variant of the component      | `VariantTypes`                               | `body2`     |         |
| weight    | Set font weight for the component | `100`,`200`,`300`,`400`,`500`,`600`,`700`    | `500`       |         |

The component accepts all props which native text rendering element support.

```
type VariantTypes = "title"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hairline1"
    | "hairline2"
    | "hairline3"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2"
    | "caption3"
    | "p1"
    | "p2"
    | "link1"
    | "link2";
```
