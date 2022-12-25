$(document).ready(function() {
  addListenerToAddTask(); 
});
  function addListenerToAddTask(){
      $(".add-task").click(function(){
          var valueTask = $(".input-task").val();
          if(!valueTask){
              alert("Pleas input text")
              return false
          }
          var ToDoConteiner = "<div class='todo-container'><strong class='valuetask'>"+ valueTask +"</strong><input type='checkbox' class='chetyre'/><button class='del-task'>delete</button></div>";
          $(".todos-container").append(ToDoConteiner);
          $(".input-task").val("");
          addListenerToDelTask();
$(".chetyre").click(function () {
  var index = $('.chetyre').index(this);
  if ($(this).is(":checked")) {      
    $(".valuetask").eq(index).addClass("valuetask2");
  } else {
      $(".valuetask").eq(index).removeClass("valuetask2");
  }
}); 
});
      };
function addListenerToDelTask(){
  $(".del-task").click(function(){
      $(this).parents(".todo-container").remove();
  })
};
