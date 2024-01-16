const Blog = require("../../models/blog");
const firebase = require("firebase/app");
const {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyCvH8UxfYf2T1U6bKimHTB19U2eLSCDAgU",
    authDomain: "oneshot-8e7d7.firebaseapp.com",
    projectId: "oneshot-8e7d7",
    storageBucket: "oneshot-8e7d7.appspot.com",
    messagingSenderId: "157484841137",
    appId: "1:157484841137:web:b8fbfe0aae461ee0560a90",
    measurementId: "G-PMX1R3K82G"
};


firebase.initializeApp(firebaseConfig);
const storage = getStorage();

exports.update_blog = async (req, res) => {
    try {
        const id = req.params.id
        let userBlog = Blog.findById(id)


        if (req.file) {
            const file = req.file;
            try {
                const storageRef = ref(storage, file.originalname);
                await uploadBytes(storageRef, file.buffer);
                new_url = await getDownloadURL(storageRef);
                userBlog.attach_url = new_url
            } catch (error) {
                console.log(error);
            }
        }


        if (!userBlog) {
            return res.status(404).json({
                status: true,
                message: "Blog not found",
            });
        }
        if (userBlog.author !== req.user._id) {
            return res.status(403).json({
                status: false,
                message: "Don't have access to this post",
            });
        }
        if (req.body.title)
            userBlog.title = req.body.title
        if (req.body.content)
            userBlog.content = req.body.content
        await userBlog.save()
        res.status(200).json({
            status: true,
            message: "Updated Blog",
            data: userBlog
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
}