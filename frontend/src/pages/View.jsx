import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const View = () => {
  const { email: paramEmail } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    experience: "",
  });

  const loadResume = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_RESUME_API_URL + "/resumes/" + paramEmail
      );
      const responseBody = await response.json();
      setForm((_) => responseBody);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  return (
    <Container>
      <br />
      <Typography variant="h4">Cadastrar novo Currículo</Typography>
      <br />
      <Stack component="form" spacing={2}>
        <TextField
          label="Nome"
          type="text"
          variant="outlined"
          name="name"
          value={form.name}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="Telefone"
          type="tel"
          variant="outlined"
          name="phone"
          value={form.phone}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={form.email}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="Endereço WEB"
          type="url"
          variant="outlined"
          name="website"
          value={form.website}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="Experiência Profissional"
          type="text"
          variant="outlined"
          name="experience"
          multiline={true}
          value={form.experience}
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="error" onClick={redirectNow}>
          Voltar
        </Button>
      </Stack>
    </Container>
  );
};

export default View;
