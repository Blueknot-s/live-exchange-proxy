export default async function handler(req, res) {
  const { base = "KRW", symbols = "USD" } = req.query;

  const url = `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "환율 정보를 가져오지 못했습니다." });
  }
}
