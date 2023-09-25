const getAllPost =req('../handler/postHandler')
const getAllComment =req('../handler/commentHandler')

const router = {}
router.init = (req,res) => {
    if(req.url === "/api/post/get"){
        postHandler.getAllPost(req,res)
    }

    else if(req.url === "/api/comment/get") {
        commentHandler.getAllComment(req,res)
    }

    // silahkan tambahkan routing lain disini

    else {
        res.end("Not Found Route !")
    }
}
module.exports = router