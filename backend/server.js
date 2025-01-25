const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./jobs/dbConnect');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/game', require('./routes/gameRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));