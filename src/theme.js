import {createTheme} from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#69e",
			light: "#bdf"
		},
		text: {
			primary: "#fcc",
			secondary: "#edc",
			disabled: "#cff"
		},
		customColor: {
			priary: "red",
			secondary: "orange"
		},
		action: {
			active: "xxx",
			hover: "xxx",
			selected: "xxx",
			disabled: "xxx",
			disabledBackground: "xxx"
		},
		background: {
			default: "#fafafa",
			paper: "#ccc"
		},
		divider: "#2e47aa"
	},
	typography: {
		fontFamily: "Arial, Helvetica, sans-serif"
	}
});