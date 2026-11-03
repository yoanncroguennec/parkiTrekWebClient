import { Container } from "@mui/material";
// COMPONENTS
import { GPXRouteViewer } from "./components";
// DATAS
import { data_MyTreks } from "@/app/utils/constants/data/treks/[id]";

export default function GPX_TrekID_Section() {
  return (
    <Container
      id="parcours"
      maxWidth="xl"
      sx={{
        height: "100vh",
        py: "150px",
      }}
    >
      {data_MyTreks.map(({ file_GPX }) => (
        <GPXRouteViewer key={file_GPX} file_GPX={file_GPX} />
      ))}
    </Container>
  );
}
