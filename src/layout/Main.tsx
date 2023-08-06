import { Container } from "@mantine/core";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      {children}
    </Container>
  );
}
