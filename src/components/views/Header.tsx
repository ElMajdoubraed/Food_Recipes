import { Text, Title } from "@mantine/core";

export default function HeaderComponent() {
  return (
    <>
      <Title fz="xl" fw={700} order={3}>
        Find Meals For Your{" "}
        <Text fw={700} span c="blue" inherit>
          Ingredient
        </Text>{" "}
      </Title>
      <Text
        c="dimmed"
        sx={{
          marginTop: "1.5rem",
        }}
      >
        Real food doesn't have ingredients, real food is ingredients. <br />
        <span> - Jamie Oliver</span>
      </Text>
    </>
  );
}
