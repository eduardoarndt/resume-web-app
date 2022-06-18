import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [resumes, setResumes] = useState([]);

  const loadResumes = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_RESUME_API_URL + "/resumes"
      );

      const responseBody = await response.json();

      setResumes((_) =>
        responseBody.map((resume) => ({
          ...resume,
          key: resume.email,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  return (
    <Container>
      <br />
      <Typography variant="h4">Currículos</Typography>
      <Link to={"/register"}>
        <Button variant="contained" color="success">
          Cadastrar
        </Button>
      </Link>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resumes.map((resume) => (
              <TableRow
                key={resume.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {resume.name}
                </TableCell>
                <TableCell>{resume.email}</TableCell>
                <TableCell>
                  <Link to={"/view/" + resume.email}>
                    <Button variant="contained">Detalhes</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
