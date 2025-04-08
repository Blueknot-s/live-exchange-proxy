export default async function handler(req, res) {
  const { base = "KRW", symbols = "USD" } = req.query;

  const url = `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "fix: switched to exchangerate.host" });
  }
}
