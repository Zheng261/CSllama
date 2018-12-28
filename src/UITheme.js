
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightblue from '@material-ui/core/colors/lightBlue';
import lightgreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';

const Theme = createMuiTheme({
  palette: {
    primary: lightblue,
    secondary: lightgreen,
  },
  status: {
    danger: orange,
  },
});

export default Theme