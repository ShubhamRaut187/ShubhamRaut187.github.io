// import { createTheme, ThemeOptions } from "@mui/material/styles";

// const themeOptions: ThemeOptions = createTheme({
//     palette: {
//         mode: "dark", // Recommended if your app has a dark background
//         text: {
//             primary: "#FFFFFF",
//             secondary: "rgba(255, 255, 255, 0.7)",
//             disabled: "rgba(255, 255, 255, 0.5)",
//         },
//     },
//     typography: {
//       fontFamily: [
//         '"Inter"',
//         'serif',
//       ].join(','),
//     },
//   });

// const theme = createTheme(themeOptions);  

// export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255,255,255,0.7)",
    },
  },
  typography: {
    fontFamily: ['"Inter"', "sans-serif"].join(","),
  },
});

export default theme;