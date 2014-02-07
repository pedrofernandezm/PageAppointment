document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("setButton").addEventListener('click', function () {
    var time = document.getElementById("time").value.split(":");
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);
    var url = document.getElementById("url").value;
    pageAppointment.setAlarm("pageAppointmentAlarm", hours, minutes);
    pageAppointment.storeAlarmUrl("pageAppointmentAlarm", url);
  });

  document.getElementById("clearButton").addEventListener('click', function () {
    pageAppointment.clearAlarms();
  });

  chrome.alarms.getAll(function(alarms){
    console.log(alarms.length);
    document.getElementById("alarmsNo").innerHTML = alarms.length
    for (var i in alarms){
      var li = document.createElement('li');
      console.log(alarms[i]);
      var next_date = new Date(alarms[i].scheduledTime);
      li.innerHTML = "Next alarm: " + next_date;
      document.getElementById("alarmsList").appendChild(li);
    }
  });
});