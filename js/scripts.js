$(document).ready(function(){
  $("form.schedulerform").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var start = $("#starttime").val();
    var end = $("#endtime").val();

    alert(end);
  });
});
