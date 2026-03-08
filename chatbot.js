function toggleChat(){

let chat = document.getElementById("chatbot");

if(chat.style.display === "flex"){
chat.style.display = "none";
}
else{
chat.style.display = "flex";
}

}

function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

if(input === "") return;

chatbox.innerHTML += "<div class='user-msg'>" + input + "</div>";

let response = "Sorry, I didn't understand that. Please ask about admissions, courses, hostel or fees.";

/* Responses */

if(input.includes("admission")){
response = "You can apply for admission through the Garden City University admission portal on the official website.";
}

else if(input.includes("course")){
response = "Garden City University offers programs like BCA, BBA, BCom and many postgraduate courses.";
}

else if(input.includes("fees")){
response = "Fee details are available in the admissions section of the university website.";
}

else if(input.includes("hostel")){
response = "Yes, Garden City University provides hostel facilities for students.";
}

else if(input.includes("location")){
response = "Garden City University is located in Bangalore, Karnataka.";
}

else if(input.includes("hello") || input.includes("hi")){
response = "Hello! I am Nova, your Garden City University assistant. How can I help you today?";
}

chatbox.innerHTML += "<div class='bot-msg'>" + response + "</div>";

document.getElementById("userInput").value = "";

chatbox.scrollTop = chatbox.scrollHeight;

}
