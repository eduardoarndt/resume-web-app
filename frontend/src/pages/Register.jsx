import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    experience: "",
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_RESUME_API_URL + "/resumes",
        { method: "POST", body: JSON.stringify(form) }
      );

      const responseStatus = response.status;

      if (responseStatus == 200) {
        alert("Cadastro realizado!");
        return redirectNow();
      }

      if (responseStatus == 400) {
        alert("Campo(s) obrigatório(s) não preenchidos!");
        return;
      }

      const responseBody = await response.json();
      alert("Erro: " + JSON.stringify(responseBody));
    } catch (error) {
      alert("Erro: " + error);
    }
  };

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
          required={true}
          value={form.name}
          onInput={onFormInputChange}
        />

        <TextField
          label="Telefone"
          type="tel"
          variant="outlined"
          name="phone"
          value={form.phone}
          onInput={onFormInputChange}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          required={true}
          value={form.email}
          onInput={onFormInputChange}
        />

        <TextField
          label="Endereço WEB"
          type="url"
          variant="outlined"
          name="website"
          value={form.website}
          onInput={onFormInputChange}
        />

        <TextField
          label="Experiência Profissional"
          type="text"
          variant="outlined"
          name="experience"
          multiline={true}
          required={true}
          value={form.experience}
          onInput={onFormInputChange}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={onSubmit}>
          Cadastrar
        </Button>

        <Button variant="contained" color="error" onClick={redirectNow}>
          Cancelar
        </Button>
      </Stack>
    </Container>
  );
};

export default Register;
