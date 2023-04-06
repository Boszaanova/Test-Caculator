var viewModel = kendo.observable({
  result: "",
  
  clear: function() {
    this.set("result", "");
  },
  
  backspace: function() {
    this.set("result", this.result.slice(0, -1));
  },
  
  appendValue: function(e) {
    var value = e.target.value;
    this.set("result", this.result + value);
  },
  
  calculate: function() {
    var result = eval(this.result);
    this.set("result", result.toString());

    // Make an AJAX request to the backend API with the result
  $.ajax({
    url: "/api/calculate",
    type: "POST",
    data: { result: result },
    success: function(data) {
      alert("Result sent to backend API: " + data);
    },
    error: function(jqXHR, textStatus) {
      alert(" Error. We can not sending result to backend API: ");
    }
  });


  }
});

kendo.bind($("#calculator"), viewModel);



