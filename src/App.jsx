import {useState, useMemo} from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {CssBaseline, styled} from "@mui/material";
import { green, purple } from "@mui/material/colors";
import customThemes from "./customThemes";
function App() {
	const [mode, setMode] = useState("light");

	const CustomButton = styled(Button)(({theme}) => ({
		backgroundColor: "#ab9"
	}));

	const [customMode, setCustomMode] = useState("light");
	const theme = createTheme({
		palette: customThemes[customMode]
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="xs">
			<CustomButton>CustomButton</CustomButton>
			<Button variant="contained">Button 2</Button>
			<Typography sx={{textDecoration: "underline"}}>underlined text</Typography>
			<Typography variant="h3">
				aaaa
			</Typography>
			<Typography variant="h3" xs={{color: "text.secondary", textDecoration: "underline"}}>
				bbb
			</Typography>
			<Divider />
			<Checkbox />
			{/* <Button variant="contained" onClick={e=>{setMode(mode === "light" ? "dark" : "light")}}>Hello World!</Button> */}
			<Divider />

			{/* <Button onClick={e => setCustomMode("light")}>
				Light Theme
			</Button>
			<Button onClick={e => setCustomMode("dark")}>
				Dark Theme
			</Button>
			<Button onClick={e => setCustomMode("potato")}>
				Potato Theme
			</Button> */}
			<FormControl>
				<InputLabel id="themeLabel">Theme</InputLabel>
				<Select label="Theme" labelId="themeLabel" value={customMode} onChange={e => setCustomMode(e.target.value)}>
					<MenuItem value="light">Light</MenuItem>
					<MenuItem value="dark">Dark</MenuItem>
					<MenuItem value="potato">Potato</MenuItem>
					<MenuItem value="carrot">Carrot</MenuItem>
				</Select>
			</FormControl>
				<Box>a</Box>
			<Typography sx={{color: {xs: "red", sm: "blue"}}}>
				Shrink the page to change my color!
			</Typography>
			</Container>
		</ThemeProvider>
	);
}

export default App;
