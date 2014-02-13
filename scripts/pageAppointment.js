var pageAppointment = {

  setAlarm: function(name, hours, minutes){
    var alarmName = "pageAppointment."+name;
    var today = new Date();
    today.setHours(parseInt(hours));
    today.setMinutes(parseInt(minutes));
    today.setSeconds(0);
    chrome.alarms.create(alarmName, {when: +today, periodInMinutes: 1440});
    this.displayNotification("Alarm set");
  },

  storeAlarmUrl: function(name, url){
    localStorage.setItem("pageAppointment."+name, url);
  },

  getAlarmUrl: function(name){
    return localStorage.getItem(name);
  },

  openTab: function(url){
    chrome.tabs.create({"url":url});
  },

  clearAlarms: function(){
    chrome.alarms.clearAll();
    this.displayNotification("All alarms cleared");
  },

  displayNotification: function(message){
    chrome.notifications.create("", {
      type: "basic",
      title: "Page Appointment",
      message: message,
      iconUrl: "../images/icon.png"
    }, function(){window.close()});
  }
}