chrome.alarms.onAlarm.addListener(function(alarm){
  if(alarm.name.match(pageAppointment.prefix) != null){
    var storedAlarm = pageAppointment.getAlarm(alarm.name);
    pageAppointment.displayNotification("It's time!");
    pageAppointment.openTab(storedAlarm.url);
    var nextDate = new Date(storedAlarm.date + (24*60*60*1000));
    pageAppointment.setAlarm(storedAlarm.name, nextDate)
  }
});
