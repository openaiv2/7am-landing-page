## RemoteIcon

### Usage

```
import { RemoteIcon } from "@fusionpay/design-system"

export default function App(){

    return (
        <div className="App">
            <CustomRemoteIcon
              iconName={"shirt"}
              iconColor={"#000000"}
              iconFontSize={24}>
            </CustomRemoteIcon>
        </div>
    )
}

```

### API

| Property     | Description    | Type   | Default | Version |
| ------------ | -------------- | ------ | ------- | ------- |
| iconName     | Icon name      | string | -       |         |
| iconColor    | Icon color     | string | false   |         |
| iconFontSize | Icon Font Size | number |         |         |

For a complete list of icon names look at `proSolidIcons.ts`
