# Arken Widget

![](https://i.imgur.com/cLtiTNY.png)

[![NPM](https://img.shields.io/npm/v/arken-widget.svg)](https://www.npmjs.com/package/arken-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save arken-widget
```

## Usage

```tsx
import React, { Component } from 'react'

import { ArkenWidget } from 'arken-widget'

class Example extends Component {
  render() {
    return (
      <ArkenWidget
        chain='bsc'
        mode={mode}
        themeColor='#7ed321'
        themeTextColor='#c41f1f'
        baseTokenAddress=''
        quoteTokenAddress='0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
        externalTopTokenAddress={['0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab']}
        graphRange={30}
        enableGraph
        containerStyle={{
          width: '100%',
          minHeight: 700
          // put container style here
        }}
      />
    )
  }
}
```

### Usage HTML
```html
<div
  id="arken-root"
  data-chain="bsc"
  data-mode="dark"
  data-theme_color="#7ed321"
  data-theme_text_color="#c41f1f"
  data-base_token_address=""
  data-quote_token_address="0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
  data-external_top_token_address="['0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab']"
  data-enable_graph="true"
  data-graph_range="30"
></div>
<script async src="https://widget.arken.finance/script.js"></script>
```

## License

MIT © [ArkenFinance](https://github.com/arkenfinance)
