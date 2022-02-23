module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            { name: "Hacker", location: "Douala Cameroun" },
            { name: "LN DEV", location: "Douala Cameroun" },
        ])
    } else {

    }
}