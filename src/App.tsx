import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/system-hooks/useAuth";
import ConfigProvider from "./context/ConfigProvider";

function App() {
  return (
    // <div className="App">
    <ConfigProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
    // </div>
  );
}

export default App;
