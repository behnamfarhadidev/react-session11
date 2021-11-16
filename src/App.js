import { UserProfileProvider } from "./context/context";
import MainRouter from "./routes";

function App() {
  return (
    <div>
      <UserProfileProvider>
        <MainRouter />
      </UserProfileProvider>
    </div>
  );
}

export default App;
