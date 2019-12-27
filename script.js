console.clear();

/*
   pen : e
   details : d
   full : cdpn.io/id
   debug : (full?)            <--- Please comment if you know this one
   live : v
   collab : c
   professor : p
   presentation : (editor?)   <--- Please comment if you know this one
*/

new Clipboard('.textboxcontainer .fa-clipboard');
var current = "";
setInterval(testnewurl);
function testnewurl() {
   if($(".shortner .textbox").text() != current) {
      $(".error").text("");
      $(".link").val("");
      var urlconstructor = "https://cdpn.io";
      current = $(".shortner .textbox").text();
      var domain = $(".shortner .textbox").text().split('/')[2];
      if(current.indexOf("https://codepen.io")> -1 || current.indexOf("https://s.codepen.io")> -1 || current.indexOf("https://codepen.io")> -1 || current.indexOf("https://s.codepen.io")> -1) {
         console.log("valid");
            var skip = false;
            switch($(".shortner .textbox").text().split('/')[4]) {
               case "pen":
                  urlconstructor += "/e/"
                  break;
               case "details":
                  urlconstructor += "/d/"
                  break;
               case "full":
                  urlconstructor += "/"
                  break;
               case "debug":
                  urlconstructor += "/"
                  $(".error").text("Debug isn't supported, a url for Full has been given");
                  break;
               case "live":
                  urlconstructor += "/v/"
                  break;
               case "collab":
                  urlconstructor += "/c/"
                  break;
               case "professor":
                  urlconstructor += "/p/"
                  break;
               case "pres":
                  urlconstructor += "/e/"
                  $(".error").text("Pres isn't supported, a url for Editor has been given");
                  break;
               default:
                  skip = true;
                  break;
            }
            if(!skip) {
               urlconstructor += $(".shortner .textbox").text().split('/')[5];
            }
            urlconstructor = urlconstructor.split("?")[0];
            $(".shortner .textbox").text(urlconstructor);
            $(".link").val(urlconstructor);
            current = urlconstructor;
      }
      else {
         console.log("invalid");
         $(".error").text("The domain isn't that of Codepen");
         $(".shortner .textbox").text("");
      }
   }
}

$("*[contenteditable]").keypress(function (evt) {

  var keycode = evt.charCode || evt.keyCode;
  if (keycode  == 13) {
    return false;
  }
});