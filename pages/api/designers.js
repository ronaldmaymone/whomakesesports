import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1G5x_J0V7D-iZYno0nIbaSR0OcuGVNr1igs63ua3hJIc");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
