
import { useEffect, useState } from "react";
import { getJson, ApiData } from "./api";

function App() {
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getJson()
      .then((result) => setData(result))
      .catch(() => setError("Не удалось загрузить данные"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Моё React-приложение</h1>

      {error && <p>{error}</p>}

      {data ? (
        <h2>{data.greeting}</h2>
      ) : (
        !error && <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default App;
