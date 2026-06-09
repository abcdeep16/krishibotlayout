/**
 * Configuration loader for Krishi Bot
 * Loads API keys and settings from environment
 */

// Load environment variables (in browser context, manually set these)
const config = {
  // Google Gemini API Configuration
  GEMINI_API_KEY: localStorage.getItem('GEMINI_API_KEY') || window.GEMINI_API_KEY,
  CHAT_MODEL: 'gemini-pro',
  API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/',
  
  // Google Maps API Configuration
  GOOGLE_MAPS_API_KEY: localStorage.getItem('GOOGLE_MAPS_API_KEY') || window.GOOGLE_MAPS_API_KEY,
  
  // Application settings
  MAX_RETRIES: 3,
  TIMEOUT: 30000, // 30 seconds
  DEBUG_MODE: false,
};

/**
 * Initialize configuration with API keys
 * @param {Object} overrides - Override config values
 */
function initializeConfig(overrides = {}) {
  Object.assign(config, overrides);
  
  // Validate required keys
  if (!config.GEMINI_API_KEY) {
    console.warn('⚠️ GEMINI_API_KEY not set. Chat functionality may not work.');
  }
  
  return config;
}

/**
 * Get the full Gemini API URL for requests
 */
function getGeminiAPIUrl() {
  return `${config.API_URL}${config.CHAT_MODEL}:generateContent?key=${config.GEMINI_API_KEY}`;
}

/**
 * Get the full Maps API URL for requests
 */
function getMapsAPIUrl() {
  return `https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_MAPS_API_KEY}&callback=initMap`;
}

/**
 * Validate API configuration
 */
function validateConfig() {
  const errors = [];
  
  if (!config.GEMINI_API_KEY) {
    errors.push('Gemini API Key is missing');
  }
  
  if (errors.length > 0) {
    console.error('❌ Configuration Errors:', errors);
    return false;
  }
  
  console.log('✅ Configuration validated successfully');
  return true;
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { config, initializeConfig, getGeminiAPIUrl, getMapsAPIUrl, validateConfig };
}
