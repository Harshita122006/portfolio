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

chatbox.innerHTML += "<div class='user-msg'>" + input + "</div>";

let response = "Sorry, I didn't understand.";

if(input.includes("admission")){
response = "You can apply through the university admission portal.";
}

else if(input.includes("hostel")){
response = "Yes, hostel facilities are available for students.";
}

else if(input.includes("fees")){
response = "Fee details are available on the admissions page.";
}

else if(input.includes("course")){
response = "We offer programs like BCA, BBA and BCom.";
}

chatbox.innerHTML += "<div class='bot-msg'>" + response + "</div>";

document.getElementById("userInput").value="";

chatbox.scrollTop = chatbox.scrollHeight;

}
