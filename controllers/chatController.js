const { GoogleGenerativeAI } = require("@google/generative-ai");
const { franc } = require("franc");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function chatHandler(message) {
  try {
    if (!message || message.trim().length === 0) {
      return "❌ Pesan tidak boleh kosong.";
    }

    let langCode = franc(message);
    if (message.length < 10 || langCode === "und") langCode = "ind";

    const languageMap = {
      ind: "Bahasa Indonesia",
      eng: "English",
      msa: "Bahasa Melayu",
      jav: "Bahasa Jawa",
      sun: "Bahasa Sunda",
    };

    const language = languageMap[langCode] || "English";

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Sebagai asisten AI, Anda *harus selalu* menjawab dalam ${language}. Jangan gunakan bahasa lain.\n\nPengguna: ${message}`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "❌ Terjadi kesalahan saat memproses permintaan.";
  }
}

module.exports = { chatHandler };
