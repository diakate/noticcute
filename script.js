const showMessageBtn = document.getElementById('showMessageBtn');
const messageEl = document.getElementById('message');

// โหลดข้อความตัวอย่าง
let messages = [];
fetch('sample_messages.json')
  .then(res => res.json())
  .then(data => messages = data);

showMessageBtn.addEventListener('click', () => {
  if(messages.length > 0){
    const msg = messages[Math.floor(Math.random() * messages.length)];
    messageEl.textContent = msg;
    alert(msg); // แจ้งเตือน Popup
  }
});
