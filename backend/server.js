const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Example endpoint for CV analysis
app.post('/api/analyze-cv', (req, res) => {
    const { cvData } = req.body;
    res.json({
        skills: ['Python', 'Accessibility Design'],
        message: 'CV analyzed successfully'
    });
});

// Save profile
app.post('/api/profile', (req, res) => {
    const { name, skills } = req.body;
    // Here you can save to Huawei GaussDB
    res.json({ message: `Profile for ${name} saved!` });
});

// Login
app.post('/api/login', (req, res) => {
    const { email, disability } = req.body;
    res.json({ success: true, email, disability });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
