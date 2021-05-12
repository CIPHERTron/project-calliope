const { Blog } = require("../models/Blog")

exports.uploadFiles = (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.json({ success: false, err })
		}
		return res.json({
			success: true,
			url: res.req.file.path,
			fileName: res.req.file.filename,
		})
	})
}

exports.createPost = (req, res) => {
	let blog = new Blog({
		content: req.body.content,
		writer: req.body.userID,
	})

	blog.save((err, postInfo) => {
		if (err) return res.json({ success: false, err })
		return res.status(200).json({ success: true, postInfo })
	})

	// blog.save((err, response) => {
	//     if (err) return res.json({ success: false, err });
	//     Blog.find({ _id: response._id })
	//         .populate('writer')
	//         .exec((err, result) => {
	//             let postInfo = result[0]
	//             if (err) return res.json({ success: false, err });
	//             return res.status(200).json({ success: true,  postInfo });
	//         })
	// });
}

// exports.getBlogs = (req, res) => {
// 	Blog.find()
// 		.populate("writer")
// 		.exec((err, blogs) => {
// 			if (err) return res.status(400).send(err)
// 			res.status(200).json({ success: true, blogs })
// 		})
// }

// exports.getPost = (req, res) => {
// 	console.log(req.body)
// 	Blog.findOne({ _id: req.body.postId })
// 		.populate("writer")
// 		.exec((err, post) => {
// 			if (err) return res.status(400).send(err)
// 			res.status(200).json({ success: true, post })
// 		})
// }
