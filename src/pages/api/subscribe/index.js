
const apiKey = process.env.BREVO_API_KEY;

// src/app/api/subscribe/route.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { email } = req.body
    console.log("Email received:", email)

    if (!email) {
      return res.status(400).json({ error: "Email is required" })
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // your Brevo list ID
        updateEnabled: true,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to subscribe")
    }

    return res.status(200).json({ message: "Successfully subscribed!" })
  } catch (err) {
    console.error("Subscribe API error:", err)
    return res.status(400).json({ error: err.message })
  }
}


