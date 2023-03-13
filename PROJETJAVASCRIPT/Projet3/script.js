const successButton = document.getElementById("success-button");
const dangerButton = document.getElementById("danger-button");
const warningButton = document.getElementById("warning-button");
const infoButton = document.getElementById("info-button");
const notificationContainer = document.getElementById("notification-container");

successButton.addEventListener("click", () =>{
  showNotification("success", "Notification succès")
});

dangerButton.addEventListener("click", () =>{
  showNotification("danger", "Notification danger")
});

warningButton.addEventListener("click", () =>{
  showNotification("warning", "Notification warning")
});

infoButton.addEventListener("click", () =>{
  showNotification("info", "Notification info")
});

function showNotification(type, message){
  const notification = document.createElement ("div")
  notification.classList.add("notification", type+'-notification');
  notification.innerText = message;
  notificationContainer.appendChild(notification);
  setTimeout(() => {
  notificationContainer.removeChild(notification);
  }, 1000);
}