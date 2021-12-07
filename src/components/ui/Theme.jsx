import { grey } from "@material-ui/core/colors"
import { createTheme } from "@material-ui/core/styles"

const baseTheme = createTheme({
  typography: {
    fontSize: 14,
  }
})

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#dc3545"
    },
    text:{
      primary: grey[200],
      secondary:grey[200]
    },
    background:{
        default:grey[100]
    }
  }
})