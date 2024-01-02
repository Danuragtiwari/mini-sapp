var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a href='mailto:work4anurag.tiwari@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gmail.png' alt='width:50px;height:20px;'></div> </a> <a target='_blank' href='https://github.com/Danuragtiwari'> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a> <a href='https://www.linkedin.com/in/danurag23s/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='linkedin.png' alt=''></div> </a> </div>";
var resumeString = "<img src='' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><label>Anurag_resume.pdf</label></div><a href='Anurag_resume.pdf' download='Anurag_resume.pdf'><img class='download' src='download.png'></a></div>";
var addressString = '<div class="mapview"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.549944728598!2d75.69747551459795!3d30.221390117147923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f895f5532341%3A0x1ee822a09942ee50!2sBoys%20Hostel%20No.%2010%2C%20Campus%20Rd%2C%20Punjab%20148106!5e0!3m2!1sen!2sin!4v1672913036976!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><label class="add"><address>Sangrur, Punjab, INDIA 14007</address>';

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Anurag Tiwari</a>.</span><br><br>I am a  <span class='bold'>Final Student @ SLIET</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the Your Organisation.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'profiles'</span>-to get details of all my coding profiles<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently In Final @SLIET <br><br>I  code in following languages :<br><span class='bold'>Python<br>C<br>CSS<br>HTML<br>Javascript</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Django<br>Bootstrap</span><br><br>Favourite IDE:<span class='bold'>VSCode</span></span>");
            break;
        case "education":
            sendTextMessage("I am Currently pursuing BTECH in ECE from @SLIET,Sangrur <br> Year : 2020-2024<br><br>I have completed my Secondary school from Narayana Junior College,Vizag<br>Passing Year:2020s <br><br>I have completed my High School from Carmel Convent School,Bishrampur<br>Passing Year:2018<br>");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/danurag23'><span class='bold'>Anurag Tiwari</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Danuragtiwari> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        case "profiles":
            sendTextMessage("You Can check my various coding profiles as below:<br><br><div class='social'><a target='_blank' href='https://github.com/Danuragtiwari'><div class='socialItem'><img src='github.png' alt='' style='width: 40px; height: 40px;'><label>Github</label></div></a></div><br><br><div class='social'><a target='_blank' href='https://leetcode.com/Danurag/'><div class='socialItem'><img src='leetcode.png' alt='' style='width: 40px; height: 40px;'><label>LeetCode</label></div></a></div><br><br><div class='social'><a target='_blank' href='https://auth.geeksforgeeks.org/user/danurag'><div class='socialItem'><img src='gfg.jpg' alt='' style='width: 40px; height: 40px;'><label>GeeksForGeeks</label></div></a></div>")
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
