const express = require('express') ; 
const app = express() ;
const { PORT } = require('./config/env.config') ;
const connectDB = require('./config/db.config');
const trendsRoutes = require('./routes/cyber_secure.route') ;
const authRoutes = require('./routes/auth.route') ;
const adminRoutes = require('./routes/admin.route') ;
// const handleCors = require('./config/cors.config') ;
const cors = require('cors');
const cookieParser = require('cookie-parser') ;
const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(cookieParser()) ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true })) ;
app.use('/v1', trendsRoutes) ;
app.use('/v1/auth', authRoutes) ;
app.use('/v1/admin', adminRoutes) ;
app.use(cors()) ;
app.use('/gemini', async (req, res) => {
  try {
    
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Please provide a prompt" });
    }

    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    
    return res.status(200).json({ generatedContent: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

connectDB() ;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})