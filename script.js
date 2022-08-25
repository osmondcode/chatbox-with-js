//MESSAGE INPUT
var TextArea = document.querySelector(".chatbox-message-input")
var ChatBoxForm = document.querySelector(".chatbox-message-form")

TextArea.addEventListener("input", function () {
    var line = TextArea.value.split("\n").length
    
    if(TextArea.rows < 6 || line < 6) {
        TextArea.rows = line
    }
    if(TextArea.rows > 1) {
        ChatBoxForm.style.alignItems = "flex-end"
    } else {
        ChatBoxForm.style.alignItems = "center"
    }
})

// SHOW CHATBOX
var ChatBoxToggle = document.querySelector(".chatbox-toggle");
var ChatBoxTMessage = document.querySelector(".chatbox-message-wrapper");

ChatBoxToggle.addEventListener("click", function (argument) {
    ChatBoxTMessage.classList.toggle("show")
})

// DROPDOWN TOGGLE
var DropdownToggle = document.querySelector(".chatbox-message-dropdown-toggle");
var DropdownMenu = document.querySelector(".chatbox-dropdown-menu");

DropdownToggle.addEventListener("click", function (argument) {
    DropdownMenu.classList.toggle("show")
})

document.addEventListener("click", function (e) {
    if(!e.target.matches(".chatbox-message-dropdown, .chatbox-message-dropdown *")) {
        DropdownMenu.classList.remove("show")
    }
})





var ChatBoxMessageWrapper = document.querySelector('.chatbox-message-content');
var ChatBoxNoMessage = document.querySelector('.chatbox-message-no-message');

ChatBoxForm.addEventListener('submit', function (e) {
    e.preventDefault()

    var Today = new Date()
    var message = `
    <div class="chatbox-message-item sent">
        <span class="chatbox-message">
            ${TextArea.value.trim().replace(/\n/g, '<br>\n')}
        </span>
        <span class="chat-box-message-time">${addZero(Today.getHours())}:${addZero(Today.getMinutes())}</span>
    </div>
    `
    ChatBoxMessageWrapper.insertAdjacentHTML('beforeend', message)
    ChatBoxForm.style.alignItems = "center"
    TextArea.rows = 1
    TextArea.focus()
    TextArea.value = ''
    ChatBoxNoMessage.style.display = 'none'

    if (isValid(TextArea.value)) {
        // writeMessage()
    }
    setTimeout(autoReply, 1000)
})


function addZero(num) {
    return num < 10 ? '0'+num : num
}


function writeMessage() {
    
    var Today = new Date()
    var message = `
    <div class="chatbox-message-item sent">
        <span class="chatbox-message">
            ${TextArea.value.trim().replace(/\n/g, '<br>\n')}
        </span>
        <span class="chat-box-message-time">${addZero(Today.getHours())}:${addZero(Today.getMinutes())}</span>
    </div>
    `
    ChatBoxMessageWrapper.insertAdjacentHTML('beforeend', message)
    ChatBoxForm.style.alignItems = "center"
    TextArea.rows = 1
    TextArea.focus()
    TextArea.value = ''
    ChatBoxNoMessage.style.display = 'none'
    scrollBottom()
}

function autoReply() {
    
    var Today = new Date()
    var message = `
    <div class="chatbox-message-item recieved">
        <span class="chatbox-message">
        Thank You for your Awesome Support!!
        </span>
        <span class="chat-box-message-time">${addZero(Today.getHours())}:${addZero(Today.getMinutes())}</span>
    </div>
    `
    ChatBoxMessageWrapper.insertAdjacentHTML('beforeend', message)
    scrollBottom()
}


function scrollBottom() {
    ChatBoxMessageWrapper.scrollTo(0, ChatBoxMessageWrapper.scrollHeight)
}

function isValid(value) {
    var text = value.replace(/\n/g, '')
    text = text.replace(/\s/g, '')

    return text.length > 0
}




















// CHATBOX MESSAGE 
// let ChatBoxMessageWrapper = document.querySelector(".chatbox-message-content")

// ChatBoxForm.addEventListener("submit", function (e) {
//     e.preventDefault()
    
//     let today = new Date()
//     let message = 
//     <div class="chatbox-message-item sent">
//         <span class="chatbox-message">
//             ${TextArea.value.trim().replace(/\n/g, '<br>\n')}
//         </span>
//         <span class="chat-box-message-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
//     </div>
    

//     ChatBoxMessageWrapper.insertAdjacentHTML("beforeend", message)
//     TextArea.rows = 1
//     TextArea.focus()
//     TextArea.value = ''

// })


// function addZero(num) {
//     return num < 10 ? "0"+num : num
// }
