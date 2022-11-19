# Description

A quick example for some of MUI's implementations as part of a group project. Nothing fancy or practical, just a proof-of-concept for some common FAQs.

# Installation (this repo)

```bash
npm i
```

To run:

```bash
npm run dev
```

# FAQ

## Installation (MUI)
```bash
npm install @mui/material @emotion/react @emotion/styled
```

## What's the difference between the different MUI libraries?

**Material UI** comes with default stylings and includes the [emotions](https://emotion.sh/docs/introduction) library, wherease **MUI Base** does not.

**Joy UI** shares much of **Material UI**'s functionality, but comes with a smaller set of components. It is also still in development stages.

**MUI X** adds some more advanced components (such as their [data grid](https://mui.com/x/react-data-grid/) table), some of which require licensing for commercial use.

## Can multiple themes be implemented?

Yes! Just like in the example the `mode` property in the `createTheme` was defined as a `useState` that can be toggled, the entire `palette` property can be defined using a `useState` to switch between a selection of custom themes.

## What's the `sx={ ... }` prop?
The **[`sx` prop](https://mui.com/system/getting-started/the-sx-prop/)** allows accessing the styling passed down to components nested inside a `<ThemeProvider />`. For example:

```jsx
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";

function App() {
	const myTheme = createTheme();
	myTheme.palette.text.secondary = "rebeccapurple";

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<Typography sx={{color: "text.secondary"}}>
				Secondary text color
			</Typography>
		</ThemeProvider>
	);
}

export default App;
```

It also allows custimizing CSS properties with non-MUI values, like we'd normally use `style={{ ... }}`:

```jsx
<Typography sx={{textDecoration: "underline"}}>underlined text</Typography>
```

## Responsive design

Can be achieved using `sx`. Instead of passing each property a string representing a CSS value/MUI palette theme, an entire object will be passed, where the keys as the different resolutions (the actual size of each resolution is created as part of the `createTheme`), and values are the values that will be used in each resolution:

```jsx
<Component sx={{display: {xs: "none", sm: "block"}}}>
	Content that will be hidden on extra-small resolutions (600px by default)
</Component>
```

## Layout components

**Container** is used as a generic container, and supports the `maxWidth` prop to limit its size to a specific breakpoint resolution. It also aligns itself to the center of the screen if the screen resolution is larger than its size.

**Box** is used as a container when adding custom styling is desired (it renders a `<div>` that doesn't have any styling of its own).
