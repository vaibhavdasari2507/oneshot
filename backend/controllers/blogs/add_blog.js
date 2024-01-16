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


exports.add_blog = async (req, res) => {
  try {
    let attach_url;
    console.log(req);
    const file = req.file;
    try {
      const storageRef = ref(storage, file.originalname);
      await uploadBytes(storageRef, file.buffer);
      attach_url = await getDownloadURL(storageRef);
    } catch (error) {
      console.log(error);
    }

    let newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
      attach_url: attach_url,
    });
    newBlog = await newBlog.save();
    res.status(201).json({
      success: true,
      message: "Blog Created successfully",
      data: newBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
