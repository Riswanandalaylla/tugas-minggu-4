const postHandler = {}

postHandler.getAllPost = (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/posts').
    then((data) => data.json()).then((data) => {
        const mappingPost = data.map((d) => ({
            postId : d.id,
            userId : d.userId,
            judulPost : d.title,
            content : d.body
        }))
        res.end(JSON.stringify(mappingPost))
    })
}
postHandler.getAllapost = (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/posts'). 
    then((data) => data.json()).then((data) => res.end(JSON.stringify(data)))
}


module.exports = postHandler