import { MoviesContextProvider } from "./src/context/context";
import HomeTap from "./src/navigation/HomeTap";

export default function App() {
  return (
    <MoviesContextProvider>
      <HomeTap />
    </MoviesContextProvider>
  );
}
