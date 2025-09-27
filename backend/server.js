import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'

import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';


import { GoogleGenAI, } from '@google/genai';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 4000;

app.use(cors())

// Connect DB
connectDB()

//Middleware
app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/resume', resumeRoutes)

app.use('uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, _path) => {
            res.set('Access-Control-Allow-Origin', 'https://resumecraft-hd1y.onrender.com')

        }
    })
)
//Routes

app.get("/", (req, res) => {
    res.send("API WORKING")
})



// API endpoint that the React app will call
app.post('/generate', async (req, res) => {
    // MODIFIED: Get the job title from the request body
    const { jobTitle } = req.body;

    // Handle cases where jobTitle is missing
    if (!jobTitle) {
        return res.status(400).send({ error: 'Job title is required.' });
    }


    // Define the prompt
    const prompt = `You are an expert resume writer. Write a professional 3–4 line resume summary for a candidate applying for the role of ${jobTitle}.
Generate three variations without any other explanation:
1. Fresher (entry-level, highlighting enthusiasm, learning ability, and foundational skills).
2. Mid-level (3–6 years of experience, focusing on proven skills, achievements, and career growth).
3. Experienced (7+ years of experience, emphasizing leadership, expertise, and impact).

The tone should be concise, professional, and tailored to impress recruiters.`;


    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            //apiKey: process.env.GEMINI_API_KEY,
        });
        const tools = [
            {
                googleSearch: {
                }
            },
        ];
        const config = {
            thinkingConfig: {
                thinkingBudget: -1,
            },
            tools,
        };
        const model = 'gemini-2.5-flash';
        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    },
                ],
            },
        ];

        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
        let fileIndex = 0;
        let fullText = '';
        for await (const chunk of response) {
            // console.log(chunk.text);
            fullText += chunk.text;
        }
        res.send({ summary: fullText });
        //const text = response.text();
        //res.send({ summary: text }); // Send the generated text back to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating content');
    }
});




// API endpoint that the React app will call
app.post('/generateproject', async (req, res) => {
    // MODIFIED: Get the job title from the request body
    const { projectTitle } = req.body;

    // Handle cases where jobTitle is missing
    if (!projectTitle) {
        return res.status(400).send({ error: 'Job title is required.' });
    }


    // Define the prompt
    const prompt = `You are an expert resume writer. Write a 3 bullet point project description for the project titled “${projectTitle}”.

**Important: Start each bullet point with the '•' symbol, followed by a space.**

Each bullet should highlight:
- Key contributions and responsibilities
- Technologies/tools used
- Achievements or measurable outcomes

Keep the tone concise, professional, and suitable for a resume.`;


    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            
        });
        const tools = [
            {
                googleSearch: {
                }
            },
        ];
        const config = {
            thinkingConfig: {
                thinkingBudget: -1,
            },
            tools,
        };
        const model = 'gemini-2.5-flash';
        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    },
                ],
            },
        ];

        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
        let fileIndex = 0;
        let fullText = '';
        for await (const chunk of response) {
            // console.log(chunk.text);
            fullText += chunk.text;
        }
        res.send({ description: fullText });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating content');
    }
});




app.post('/generate-experience', async (req, res) => {
    // We now expect 'company' and 'role' from the frontend
    const { company, role } = req.body;

    if (!company || !role) {
        return res.status(400).send({ error: 'Company and role are required.' });
    }

    // Use the new prompt
    const prompt = `You are an expert resume writer. For the role of “${role}” at “${company}”, write 3 professional resume bullet points describing key responsibilities and achievements.

    Important:
    - Start each bullet point with the '•' symbol followed by a space.
    - Begin each point with a strong action verb (e.g., "Engineered," "Managed," "Led").
    - Focus on quantifiable results and specific technologies used where possible.
    
    Keep the tone concise, professional, and impactful.`;

    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            
        });
        const tools = [
            {
                googleSearch: {
                }
            },
        ];
        const config = {
            thinkingConfig: {
                thinkingBudget: -1,
            },
            tools,
        };
        const model = 'gemini-2.5-flash';
        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    },
                ],
            },
        ];

        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
        let fileIndex = 0;
        let fullText = '';
        for await (const chunk of response) {
            // console.log(chunk.text);
            fullText += chunk.text;
        }
        res.send({ description: fullText });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating content');
    }
});




app.listen(PORT, () => {
    console.log(`App is listening at port http://localhost${PORT}`);


})