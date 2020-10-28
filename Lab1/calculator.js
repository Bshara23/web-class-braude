
$(document).ready(function () {
  // numbers
  $(".numCls").click(function (event) {
    console.log(this.id);
    $(".inputField").text($(".inputField").text() + this.id);
  });

  // +
  $("#plus").click(function (event) {
    $(".inputField").text($(".inputField").text() + '+');

  });

  // -
  $("#minus").click(function (event) {
    $(".inputField").text($(".inputField").text() + '-');
  });

  // *
  $("#multiply").click(function (event) {
    $(".inputField").text($(".inputField").text() + '*');
  });

  // /
  $("#divide").click(function (event) {
    $(".inputField").text($(".inputField").text() + '/');
  });

  // ←
  $("#back").click(function (event) {
    var str = $(".inputField").text();
    str = str.substring(0, str.length - 1);
    $(".inputField").text(str);
  });

  // =
  $("#equal").click(function (event) {
    $(".inputField").text(eval($(".inputField").text()));
});

  // clear
  $("#clear").click(function (event) {

    $(".inputField").text("");
  });

  $(".inputField").text("");
});

