export const BACKEND_URL = process.env["REACT_APP_BACKEND_URL"];

if (!BACKEND_URL) {
  console.log(
    "No backend url string. Set REACT_APP_BACKEND_URL environment variable."
  );
  process.exit(1);
}
