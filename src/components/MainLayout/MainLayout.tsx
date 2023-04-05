import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Header from "~/components/MainLayout/components/Header";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/" underline="hover">
        My Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (!window.localStorage.getItem('authorization_token')) {
      window.localStorage.setItem('authorization_token', 'Basic anVhbnJpdmVyYTMyOlRFU1RfUEFTU1dPUkQ=');
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Container sx={{ pb: 8 }} maxWidth="md">
          {children}
        </Container>
      </main>
      <Box
        component={"footer"}
        sx={{ bgcolor: (theme) => theme.palette.background.paper, padding: 6 }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Thank you for your purchase!
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="textSecondary"
          component="p"
        >
          Come back soon
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default MainLayout;
