function typeInChat(message) {
    const delay = 50; 
    let i = 0;

    const typeInterval = setInterval(() => {
        
        document.getElementById("chat-box").innerHTML += message.charAt(i);
        i++;

        
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;

       
        if (i === message.length) {
            clearInterval(typeInterval); 
        }
    }, delay);
}


function handleUserQuery(query) {
    
    typeInChat("Searching for results...");

    
    setTimeout(() => {
        const botResponses = getBotResponses(query);
        botResponses.forEach(response => {
            displayBotResponse(response);
        });
    }, 2000); 
}


function getBotResponses(query) {
   
    let responses = [];

    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
        responses.push("BOT: Hello!👋 How can I assist you today?");
    }

    if (query.toLowerCase().includes("symptoms")|| query.toLowerCase().includes("what are the symptoms of COVID-19"))  {
        responses.push("BOT: Here are some common symptoms of COVID-19 😷 : fever, cough, shortness of breath, fatigue, body aches, loss of taste or smell, sore throat, and headache.");
    }

    if (query.toLowerCase().includes("treatment")) {
        responses.push("BOT: Treatment 💊 for COVID-19 may include rest, fluids, and over-the-counter medications to relieve symptoms. In severe cases, hospitalization and supportive care may be necessary.");
    }

    if (query.toLowerCase().includes("prevention") || query.toLowerCase().includes("how to prevent covid-19")) {
        responses.push("BOT: To prevent 🛡️ COVID-19, it's important to practice good hygiene such as washing hands frequently, wearing masks in public settings, practicing social distancing, and getting vaccinated when eligible.");
    }

    if (query.toLowerCase().includes("can you tell me about diabetes") || query.toLowerCase().includes("what is diabetes")) {
        responses.push("BOT: Diabetes is a chronic condition that affects how your body regulates blood sugar (glucose). There are two main types: type 1 diabetes, where the body doesn't produce insulin, and type 2 diabetes, where the body doesn't use insulin properly.");
    }

    if (query.toLowerCase().includes("what is ibuprofen"))  {
        responses.push("BOT: Ibuprofen is a nonsteroidal anti-inflammatory drug that is used to relieve pain, fever, and inflammation.");
    }
    if (query.toLowerCase().includes("what are the side effects of ibuprofen"))  {
        responses.push("BOT: Common side effects of ibuprofen include stomach upset, heartburn, nausea, vomiting, headache, dizziness, and drowsiness. In rare cases, it can cause more serious side effects such as stomach bleeding, kidney problems, or allergic reactions.");
    }
    if (query.toLowerCase().includes("who create you") || query.toLowerCase().includes("who are you")) {
        responses.push("BOT: I am a Medical Assistance Chatbot. I am here to help you solve your questions regarding Medical terms .I am created by a person name Hamza but Overall I am here Because of Allah Almighty");
    }
    if (query.toLowerCase().includes("what should i do if i burn myself")) {
        responses.push("BOT: For minor burns, run cool water 💧 over the burn for at least 10 minutes to reduce pain and swelling. Cover the burn with a clean, dry cloth or sterile dressing. Do not use ice, butter, or ointments on the burn. Seek medical attention if the burn is severe or covers a large area.");
    }

    if (query.toLowerCase().includes("what are the risk factors for heart disease")) {
        responses.push("BOT: Risk factors for heart disease include high blood pressure, high cholesterol, smoking, diabetes, obesity, poor diet, physical inactivity, and excessive alcohol consumption.");
    }

    if (query.toLowerCase().includes("how can i lower my cholesterol levels")) {
        responses.push("BOT: To lower cholesterol levels, you can make lifestyle changes such as adopting a healthy diet low in saturated and trans fats, exercising regularly, maintaining a healthy weight, quitting smoking, and limiting alcohol intake");
    }

    if (query.toLowerCase().includes("how can i manage stress")) {
        responses.push("BOT: To manage stress, you can practice relaxation techniques such as deep breathing, meditation, or yoga, engage in regular physical activity, get enough sleep, maintain a healthy diet, limit caffeine and alcohol intake, and seek support from friends, family, or a mental health professional.");
    }



    

   
    if (responses.length === 0) {
        responses.push("I'm sorry, I couldn't find information related to your query.");
    }

    return responses;
}


function displayBotResponse(response) {
    const chatBox = document.getElementById("chat-box");
    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message", "bot");
    botMessageElement.textContent = response;
    chatBox.appendChild(botMessageElement);

    
    chatBox.scrollTop = chatBox.scrollHeight;
}


document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        displayUserMessage(userInput);
        handleUserQuery(userInput);
        document.getElementById("user-input").value = ""; 
    }
});


function displayUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "user");
    userMessageElement.textContent = message;
    chatBox.appendChild(userMessageElement);

   
    chatBox.scrollTop = chatBox.scrollHeight;
}


