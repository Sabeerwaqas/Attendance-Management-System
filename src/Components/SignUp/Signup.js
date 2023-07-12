import React from "react";
import "./signup.css";
import { Box, TextField } from "@mui/material";

const Signup = () => {
  return (
    <>
      <div className="signup-box">
        <Box
          sx={{
            marginLeft: "20%",

            marginTop: "10%",
          }}
        >
          <form>
            <TextField
              variant="standard"
              label="Email"
              sx={{
                marginTop: "10%",
              }}
            />
            <TextField
              variant="standard"
              label="Password"
              sx={{
                marginTop: "10%",
              }}
            />
          </form>
          <button className="signup-btn">SignUp</button>
        </Box>
      </div>
    </>
  );
};

export default Signup;
