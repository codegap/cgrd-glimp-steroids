window.GlimpController = {
  index: function () {
	  steroids.view.navigationBar.hide();
  },

  show: function () {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("glimp").src = 
	  	"/img/glimp-"+steroids.view.params["id"]+"-320x480.png";
    });
  }
};

document.addEventListener("DOMContentLoaded", function() {
  $(".pushLayer").hammer().on("tap", function() {
	  steroids.layers.push({
		  view: new steroids.views.WebView({ location: this.getAttribute("data-location") }),
		  navigationBar: false
	  });
  });
  $(".popLayer").hammer().on("tap", function() {
	  steroids.layers.pop();
  });
});