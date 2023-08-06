import { Button, Modal, Text } from "@mantine/core";
import { useEffect } from "react";

export default function RecipeModal(props: any) {
  useEffect(() => {
    if (props.open) console.log(props.data);
  }, [props.open]);
  return (
    <>
      <Modal
        opened={props.open}
        onClose={() => props.setOpen(false)}
        title="Recipe details"
        centered
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text fw={700} c="blue" fz={20}>
          {props.data?.strMeal}
        </Text>
        <Text
          c="dimmed"
          sx={{
            marginTop: ".5rem",
          }}
        >
          <Text>{props.data?.strCategory}</Text>
        </Text>

        <Text
          c="dimmed"
          sx={{
            marginTop: "1.5rem",
          }}
        >
          {props.data?.strInstructions}
        </Text>
        <Button
          sx={{
            marginTop: "1.5rem",
          }}
          variant="outline"
          color="red"
          onClick={() => window.open(props.data?.strYoutube, "_blank")}
        >
          Youtube
        </Button>
      </Modal>
    </>
  );
}
