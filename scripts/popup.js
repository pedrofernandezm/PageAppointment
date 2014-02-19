document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("setButton").addEventListener('click', function () {
    var time = document.getElementById("time").value.split(":");
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);
    var url = document.getElementById("url").value;
    var date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    if(date < new Date()){
      date = date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    }
    if(url.match("http://") == null){
      url = "http://" + url
    }
    if(pageAppointment.validateUrl(url)){
      pageAppointment.setAlarm("alarm", date);
      pageAppointment.storeAlarm("alarm", url, date);
      pageAppointment.displayNotification("Alarm set");
    }else{
      document.getElementById("url-error").innerHTML = "not valid"
    }
  });

  document.getElementById("clearButton").addEventListener('click', function () {
    pageAppointment.clearAlarms();
  });

  chrome.alarms.getAll(function(alarms){
    document.getElementById("alarmsNo").innerHTML = alarms.length
    for (var i in alarms){
      var li = document.createElement('li');
      var next_date = new Date(alarms[i].scheduledTime);
      li.innerHTML = "Next alarm: " + next_date;
      document.getElementById("alarmsList").appendChild(li);
    }
  });
});