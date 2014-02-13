chrome.alarms.onAlarm.addListener(function(alarm){
  if(alarm.name.match(/pageAppointment./) != null){
    var url = pageAppointment.getAlarmUrl(alarm.name)
    pageAppointment.displayNotification("It's time!")
    pageAppointment.openTab(url);
  }
});
