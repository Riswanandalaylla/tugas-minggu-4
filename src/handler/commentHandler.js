const commentHandler = {}

commentHandler.getAllComment = (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/comments').
    then((data) => data.json()).then((data) => {
        const mappingComment = data.map((d) => ({
            postId : d.id,
            name : d.userId,
            email : d.email,
            content : d.body
        }))
        res.end(JSON.stringify(mappingComment))
    })
}
commentHandler.getAllComment = (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    then((data) => data.json()).then((data) => res.end(JSON.stringify(data)))
}

module.exports = commentHandler