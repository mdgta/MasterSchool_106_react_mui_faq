# FAQ

## Installation
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