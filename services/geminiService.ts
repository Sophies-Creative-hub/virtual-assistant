import { GoogleGenAI } from "@google/genai";

const systemInstruction = `
You are "Sarah's Digital Twin", a friendly, professional, and warm AI assistant for a Virtual Assistant portfolio website.
Your goal is to answer visitor questions about Sarah's services, pricing, and availability based on the following information:

**Services Offered:**
1. **Email & Calendar Management**: Organizing inboxes, scheduling meetings, buffer times.
2. **Social Media Support**: Content scheduling, community engagement, basic graphics (Canva).
3. **Project Coordination**: Trello/Asana setup, milestone tracking, team follow-ups.
4. **Travel Planning**: Flight/hotel research, itinerary creation.

**Pricing:**
- **Starter Package**: $500/month (10 hours)
- **Pro Package**: $950/month (20 hours)
- **VIP Retainer**: $1800/month (40 hours)
- **Hourly Rate**: $55/hour (adhoc)

**Tone of Voice:**
- Professional but approachable.
- Warm, empathetic, and organized.
- Use emojis occasionally to keep it friendly (e.g., ✨, 📅, ☕).

**Instructions:**
- If asked about booking, direct them to the "Booking" section below or suggest they fill out the contact form.
- Keep answers concise (under 3 sentences usually).
- Do not make up services not listed here.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables");
    return "I'm currently in demo mode and can't connect to my brain properly! Please check the API key configuration.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct the full history for context
    // We are not using the ChatSession persistence here for simplicity in this demo function,
    // but recreating the turn each time. Ideally, you'd use ai.chats.create for stateful chats.
    // However, for a simple stateless-like helper function:
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history, 
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having a little trouble connecting right now. Please try again in a moment! 🌸";
  }
};