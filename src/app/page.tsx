import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </>
  );
}
