import { map } from "lodash";
import { Paper, Text } from "@mantine/core";
import { Grid } from "@mantine/core";
import { RecipeCard } from "../cards";

export default function ResultComponent({ items }: any) {
  return (
    <>
      {items?.length > 0 ? (
        <Paper shadow="xs" p="xl" sx={{ marginTop: "2rem" }}>
          <Grid>
            {map(items, (item: any) => (
              <Grid.Col key={item.idMeal} md={6} lg={6}>
                <RecipeCard
                  image={item.strMealThumb}
                  title={item.strMeal}
                  id={item.idMeal}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Paper>
      ) : (
        <Text
          sx={{
            marginTop: "2rem",
          }}
        >
          No results ...{" "}
          <Text
            c="dimmed"
            sx={{
              marginTop: ".5rem",
            }}
          >
            {" "}
            Try{" "}
            <Text fw={700} span c="blue" inherit>
              ' Chicken '
            </Text>{" "}
            for example
          </Text>
        </Text>
      )}
    </>
  );
}
