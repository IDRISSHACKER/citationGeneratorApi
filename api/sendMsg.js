module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            { name: "message has been sended", status: "200" },
        ])
    } else {

    }
}