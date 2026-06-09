# 🚀 Krishi Bot Setup Guide

## Getting Started

### Step 1: Clone the Repository
```bash
git clone https://github.com/abcdeep16/krishibotlayout.git
cd krishibotlayout
```

### Step 2: Get Your API Keys

#### Google Gemini API Key (Required for Chat)
1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Get API Key"
3. Create a new API key
4. Copy the key

#### Google Maps API Key (Optional, for location features)
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable "Maps JavaScript API"
4. Create an API key in the Credentials section
5. Copy the key

### Step 3: Configure Your Environment

#### Option A: Using .env File (Recommended for Development)
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your API keys
# Windows: notepad .env
# Mac/Linux: nano .env
```

Then add:
```
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
VITE_GOOGLE_MAPS_API_KEY=your_actual_maps_api_key_here
```

#### Option B: Using Browser localStorage (Temporary)
Open browser console (F12) and run:
```javascript
localStorage.setItem('GEMINI_API_KEY', 'your_api_key_here');
localStorage.setItem('GOOGLE_MAPS_API_KEY', 'your_maps_api_key_here');
```

### Step 4: Run the Application

#### Option 1: Using Python (Recommended)
```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Option 2: Using Node.js
```bash
# Install dependencies first (optional)
npm install

# Start server
npm start

# Or use http-server directly
npx http-server
```

#### Option 3: Using Docker
```bash
docker run -p 8000:8000 -v $(pwd):/app -w /app python:3 python -m http.server 8000
```

### Step 5: Access the Application
Open your browser and navigate to:
- **Main Chatbot**: `http://localhost:8000/index.html`
- **Knowledge Base**: `http://localhost:8000/kb.html`
- **Find Experts**: `http://localhost:8000/uni.html`
- **Landing Page**: `http://localhost:8000/landingpage.html`

## 🔐 Security Guidelines

### API Keys Protection
- ✅ **DO**: Store API keys in `.env` files
- ✅ **DO**: Use environment variables in production
- ✅ **DO**: Rotate API keys regularly
- ❌ **DON'T**: Commit `.env` files to Git
- ❌ **DON'T**: Share API keys in public repositories
- ❌ **DON'T**: Log or display API keys in console

### For Production Deployment
1. Set up a backend API server to handle Gemini API calls
2. Store API keys on the server, never in frontend code
3. Use a proxy server to forward requests
4. Implement rate limiting and authentication
5. Monitor API usage and set spending limits

## 📚 File Structure
```
krishibotlayout/
├── index.html              # Main chatbot interface
├── kb.html                 # Knowledge base
├── uni.html                # Expert locator with maps
├── mainpage.html           # Dashboard
├── landingpage.html        # Public landing page
├── loginpage.html          # Authentication
├── signup.html             # Registration
├── config.js               # Configuration loader
├── .env.example            # Environment template
├── .gitignore              # Git ignore rules
├── package.json            # Project metadata
├── README.md               # Project documentation
└── LICENSE                 # MIT License
```

## 🐛 Troubleshooting

### "API Key not configured" Error
**Solution**: Make sure you've set the API key in localStorage or .env file and refreshed the page.

### "Chat is not responding"
**Solution**: 
1. Check browser console (F12) for errors
2. Verify API key is valid
3. Check internet connection
4. Verify API quota hasn't been exceeded

### Maps not loading
**Solution**: 
1. Ensure Google Maps API key is set
2. Check Maps API is enabled in Google Cloud Console
3. Verify geolocation permissions are enabled

### CORS Errors
**Solution**: 
- API calls to Gemini API require proper CORS headers (handled by Google)
- For custom backend, enable CORS in server configuration

## 📖 Using the Chatbot

### Chat Features
- **Text Chat**: Type your agricultural questions
- **Voice Input**: Click microphone button (requires microphone permission)
- **Image Analysis**: Upload plant/soil images for analysis
- **Multi-language**: Select from English, Hindi, Kannada

### Commands
- Ask about crop diseases
- Get farming advice
- Analyze plant photos
- Find agricultural experts
- Get weather-based recommendations

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support
- Issues: [GitHub Issues](https://github.com/abcdeep16/krishibotlayout/issues)
- Email: support@krishibot.com

## 📄 License
MIT License - See [LICENSE](LICENSE) file for details

---

**Happy Farming! 🌾** Don't forget to configure your API keys before using the chatbot!
