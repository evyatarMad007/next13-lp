function handler(req, res) {
    res.status(200).json({ feedback: 'This is feedback from the backend'})
}

export default handler;