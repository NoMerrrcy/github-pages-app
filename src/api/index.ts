
export interface ApiData {
  greeting: string;
}

const LOCAL_API = "http://127.0.0.1:3001/api/data";

const PRODUCTION_API =
  "https://raw.githubusercontent.com/NoMerrrcy/github-pages-app/gh-pages/static/db/data.json";

export async function getJson(): Promise<ApiData> {
  const url =
    process.env.NODE_ENV === "production"
      ? PRODUCTION_API
      : LOCAL_API;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Ошибка получения данных");
  }

  return response.json();
}
