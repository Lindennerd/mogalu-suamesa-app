import { app } from "./app";

app().listen(process.env.PORT || 5000, () => {
  console.info("API started at " + process.env.PORT || 5000);
});
