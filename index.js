const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
async function connectToDB() {
    try {
        await connect(process.env.MONGO_URL);
        console.log("MongoDB is connected!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}
connectToDB();


// Routes
app.get('/', (req, res) => {
    res.json("Hi NodeJs!");
});

const { roles } = require('./routes/role.route');
app.use('/roles', roles);

const { stuffroles } = require('./routes/stuff.role.route');
app.use('/stuffRoles', stuffroles)

const { stuffs } = require("./routes/stuff.route");
app.use('/stuffs', stuffs)

const { stages } = require("./routes/stage.route");
app.use('/stages', stages)

const { branches } = require("./routes/branch.route");
app.use('/branches', branches)

const { groups } = require("./routes/group.route");
app.use('/groups', groups)

const { groupstuff } = require("./routes/group.stuff.route");
app.use('/groupstuff', groupstuff)

const { lessons } = require('./routes/lesson.route');
app.use('/lessons', lessons)

const { lidstatus } = require("./routes/lit_status.route");
app.use('/lidstatus', lidstatus)

const { reson_lid } = require("./routes/reason_lid.route");
app.use('/reason_lid', reson_lid)

const { lid } = require("./routes/lid.route");
app.use('/lid', lid)

const { students } = require("./routes/student.route");
app.use('/students', students)

const { studentGroup } = require("./routes/student.group.route");
app.use('/studenGroup', studentGroup)

const { studentLesson } = require("./routes/student.lesson.route");
app.use('/studentLesson', studentLesson)

const { payment } = require("./routes/payment.route");
app.use('/payment', payment)
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});