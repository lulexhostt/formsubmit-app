export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, message } = req.body;

    if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required' });
    }

    const submission = { name, message };
    res.status(200).json(submission);
}
