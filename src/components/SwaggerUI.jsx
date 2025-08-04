// 
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import spec from "./Authentification.json"; // ou .yaml

const isDev = import.meta.env.DEV;

spec.servers = [
  {
    url: isDev
      ? "http://localhost:4800"
      : "https://swaggertest-yw9i.onrender.com/api"
  }
];

function App() {
  return <SwaggerUI spec={spec} />;
}

export default App;
