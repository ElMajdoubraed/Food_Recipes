import { createStyles, Paper, Text, Title, Button, rem } from "@mantine/core";
import RecipeModal from "./RecipeModal";
import { useState } from "react";
import axios from "axios";

const LOOKUP_API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface RecipeCardProps {
  image: string;
  title: string;
  category?: string;
  id: string;
}

export default function RecipeCard({
  image,
  title,
  category,
  id,
}: RecipeCardProps) {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState({} as any);
  const lookup = async () => {
    await axios.get(`${LOOKUP_API}${id}`).then((res) => {
      setRecipe(res.data.meals[0]);
      setOpen(!open);
    });
  };
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button onClick={() => lookup()} variant="white" color="dark">
        View recipe
        <RecipeModal open={open} setOpen={setOpen} data={recipe} />
      </Button>
    </Paper>
  );
}
