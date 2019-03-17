var case2edit = 0;
var case3edit = 0;

$(document).ready(function() {

  // Case 1 Screen
  $("#login-btn").click(function(){
    $("#case1").fadeOut(200, function(){
      $("#case2").fadeIn(200);
    });
    return false;
  });


  // Case 2 Screen
  $("#btn1c2").click(function(){
    $("#case2").fadeOut(200, function(){
      $("#case3").fadeIn(200);
    });
    return false;
  });

  $("#btn2c2").click(function(){
    $("#case2").fadeOut(200, function(){
      $("#case4").fadeIn(200);
    });
    return false;
  });

  $("#btn3c2").click(function(){
    var case2elems = document.getElementsByClassName('text-field2');
    if (case2edit == 0) {
      for (var i = 0; i < case2elems.length; i++) {
        case2elems.item(i).disabled = false;
      }
      case2edit = 1;
    }
    else {
      for (var i = 0; i < case2elems.length; i++) {
        case2elems.item(i).disabled = true;
      }
      case2edit = 0;
    }
    return false;
  });

  $("#btn4c2").click(function(){
    alert("Delete not available.")
    return false;
  });

  $("#btn5c2").click(function(){
    $("#case2").fadeOut(200, function(){
      $("#case6").fadeIn(200);
    });
    return false;
  });


  // Case 3 Screen
  $("#btn1c3").click(function(){
    alert("New ID unavailable.")
    return false;
  });

  $("#btn2c3").click(function(){
    var case3elems = document.getElementsByClassName('text-field3');
    if (case3edit == 0) {
      for (var i = 0; i < case3elems.length; i++) {
        case3elems.item(i).disabled = false;
      }
      case3edit = 1;
    }
    else {
      for (var i = 0; i < case3elems.length; i++) {
        case3elems.item(i).disabled = true;
      }
      case3edit = 0;
    }
    return false;
  });

  $("#btn3c3").click(function(){
    alert("Delete ID unavailable.")
    return false;
  });

  $("#btn4c3").click(function(){
    $("#case3").fadeOut(200, function(){
      $("#case4").fadeIn(200);
    });
    return false;
  });


  // Case 4 Screen
  $("#btn1c4").click(function(){
    alert("Add condition unavailable.")
    return false;
  });

  $("#btn2c4").click(function(){
    alert("Delete condition unavailable.")
    return false;
  });

  $("#btn3c4").click(function(){
    $("#case4").fadeOut(200, function(){
      $("#case5").fadeIn(200);
    });
    return false;
  });


  // Case 5 Screen
  $("#btn1c5").click(function(){
    $("#case5").fadeOut(200, function(){
      $("#case6").fadeIn(200);
    });
    return false;
  });

  $("#btn2c5").click(function(){
    $("#case5").fadeOut(200, function(){
      $("#case2").fadeIn(200);
    });
    return false;
  });


  // Case 6 Screen
  $("#btn1c6").click(function(){
    alert("Heatmap unavailable.")
    return false;
  });

  $("#btn2c6").click(function(){
    $("#case6").fadeOut(200, function(){
      $("#case2").fadeIn(200);
    });
    return false;
  });

  $("#btn3c6").click(function(){
    window.print();
    return false;
  });


});

console.log("he")
