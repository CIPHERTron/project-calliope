const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const userRoutes = require("./routes/users")

// console.log(process.env.DATABASE_URL)

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})
	.then(() => console.log("Database Connected..."))
	.catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/api/users", userRoutes)

//use this to show the image you have in node js server to client (react js)
app.use("/uploads", express.static("uploads"))
app.use("/api/blog", require("./routes/blog"))

const port = process.env.PORT || 6666

app.listen(port, () => {
	console.log(`Server Running at ${port}`)
})
