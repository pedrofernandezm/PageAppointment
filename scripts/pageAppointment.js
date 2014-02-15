var pageAppointment = {

  prefix: "pageAppointmentAlarm.",

  setAlarm: function(name, date){
    var alarmName = this.prefix+name;
    chrome.alarms.create(alarmName, {when: +date});
  },

  storeAlarm: function(name, url, date){
    var alarm = {
      name: name,
      url: url,
      date: date.getTime()
    }
    localStorage.setItem(this.prefix+name,JSON.stringify(alarm));
  },

  getAlarm: function(name){
    var alarm = localStorage.getItem(name);
    return JSON.parse(alarm);
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