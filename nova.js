function toggleNova(){

let chat = document.getElementById("nova");

if(chat.style.display === "none"){
chat.style.display = "flex";
}
else{
chat.style.display = "none";
}

}



function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<div class='user'>" + input + "</div>";

let response = "Sorry, I didn't understand that.";

if(input.includes("admission")){
response = "You can apply through the Garden City University admission portal.";
}

else if(input.includes("course")){
response = "GCU offers programs like BCA, BBA, BCom and many postgraduate courses.";
}

else if(input.includes("fee")){
response = "Fee details are available in the admissions section of the website.";
}

else if(input.includes("hostel")){
response = "Yes, Garden City University provides hostel facilities for students.";
}

else if(input.includes("location")){
response = "Garden City University is located in Bangalore, Karnataka.";
}

chatbox.innerHTML += "<div class='bot'>" + response + "</div>";

document.getElementById("userInput").value="";

chatbox.scrollTop = chatbox.scrollHeight;

}
