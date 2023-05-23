import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getUsers } from "../db/db";

function SignInside() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/home");
  };

  const routeChange1 = () => {
    navigate("/signup");
  };

  const theme = createTheme();

  const handleFormSubmit = async (event) => {
    console.log("l")
    event.preventDefault();
  
    // Kullanıcı verilerini oluştur
    console.log("x")
    const userData = {
      email,
      password
    };
  console.log("a");
    try {
      // Kayıtlı kullanıcıları al
      const users = await getUsers();
      console.log("b")
      // Giriş yapmak için kullanıcıyı kontrol et
      const authenticatedUser = users.find(
        (user) => user.email === userData.email
      );
      console.log("c")
      if (authenticatedUser) {
        // Kullanıcının girdiği şifreyi doğrula
        console.log("d")
        if (authenticatedUser.password === userData.password) {
          // Başarılı giriş sonrası yönlendirme
          console.log("e")
          routeChange();
        } else {
          console.log("Giriş başarısız. Kullanıcı adı veya şifre hatalı.");
          console.log("f")
        }
      } else {
        console.log("Giriş başarısız. Kullanıcı bulunamadı.");
        console.log("g")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form  onSubmit={handleFormSubmit}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random/1920×1080/?city,night,1920x1080)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={6}
          square
          style={{ backgroundColor: "#f7f0fe" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 0.5, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h6">
              Giriş
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              style={{ scale: "0.8" }}
            >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Adres"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
            
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                 
                >
                  Giriş
                </Button>
              <Grid container>
                <Grid item>
                  <Link onClick={routeChange1} variant="body2">
                    Hesabın Yok Mu? Üye Ol
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid> 
      </form>            
    </ThemeProvider>
  );
}

export default SignInside;
