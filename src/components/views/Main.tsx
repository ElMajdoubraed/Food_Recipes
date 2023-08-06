import { Title, Paper, Box, Text } from "@mantine/core";
import { SearchComponent } from "../inputs";
import { useState } from "react";
import HeaderComponent from "./Header";
import ResultComponent from "./Results";
import axios from "axios";
import { useEffect } from "react";
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

export default function MainComponent() {
  const [searchItems, setSearchItems] = useState([]) as any[];
  const [error, setError] = useState({
    exist: false,
    message: "",
  });

  useEffect(() => {
    const meals = localStorage.getItem("meals");
    if (meals) {
      setSearchItems(JSON.parse(meals));
      return;
    } else {
      axios
        .get(`${API_URL}`)
        .then((res) => {
          setError({ exist: false, message: "" });
          setSearchItems(res.data.meals);
          localStorage.setItem("meals", JSON.stringify(res.data.meals));
        })
        .catch((err) => setError({ exist: true, message: err }));
    }
  }, []);
  return (
    <>
      <Paper
        shadow="xs"
        p="xl"
        sx={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <HeaderComponent />
        <Box mt="xl">
          <SearchComponent setItems={setSearchItems} setError={setError} />
        </Box>
      </Paper>

      <Title fz="xl" fw={700} order={3}>
        {error.exist && (
          <Paper shadow="xs" p="xl" sx={{ marginTop: "2rem" }}>
            {" "}
            <Text color="red">{error.message}</Text>{" "}
          </Paper>
        )}
      </Title>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <ResultComponent items={searchItems} />
      </Box>
    </>
  );
}
