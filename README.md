# Krishi Bot 🤖

An intelligent agricultural chatbot that provides farming assistance, crop advice, and agricultural solutions using AI-powered conversations.

## Features

- 💬 AI-powered conversational chatbot for agricultural queries
- 🌾 Crop-specific advice and recommendations
- 📱 Responsive web-based interface
- 🎨 Modern dark-themed UI with Tailwind CSS
- 🗺️ Location-based services (Google Maps integration)
- 📚 Knowledge base and help center

## Pages

- **index.html** - Main chatbot interface
- **kb.html** - Knowledge base
- **mainpage.html** - Application dashboard
- **landingpage.html** - Public landing page
- **loginpage.html** - User authentication
- **signup.html** - User registration
- **uni.html** - University/Institution locator

## Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (for AI chat functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abcdeep16/krishibotlayout.git
cd krishibotlayout
```

2. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

3. Add your API keys:
```
VITE_GEMINI_API_KEY=your_api_key_here
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key_here
```

4. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Visit `http://localhost:8000` in your browser.

## Configuration

Update the API configuration in `config.js`:
- `CHAT_MODEL` - Google Gemini model version
- `API_ENDPOINTS` - Backend service URLs

## Security Notice

⚠️ **Never commit API keys to Git!** 
- Always use `.env` files for sensitive credentials
- Add `.env` to `.gitignore`
- Use `.env.example` as a template for required variables

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Maps**: Google Maps API
- **Fonts**: Inter, Poppins (Google Fonts)

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please create an issue in the repository.

---

**Happy Farming! 🌾**
