const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Criando o cliente do WhatsApp
const client = new Client({
    authStrategy: new LocalAuth(), // Salva a sessão localmente
    puppeteer: { headless: true }
});

// Exibir QR Code para conectar o WhatsApp
client.on("qr", (qr) => {
    console.log("Escaneie este QR Code com o WhatsApp:");
    qrcode.generate(qr, { small: true });
});

// Quando o bot estiver pronto
client.on("ready", () => {
    console.log("Bot de WhatsApp está online!");
});

// Responder mensagens automaticamente
client.on("message", async (message) => {
    if (message.body.toLowerCase() === "oi") {
        message.reply("Olá! Como posso te ajudar?");
    }
});

// Iniciar o cliente
client.initialize();
