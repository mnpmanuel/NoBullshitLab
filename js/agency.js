/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    // Initialize WOW.js Scrolling Animations
    new WOW().init();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$('#carouselHacked').carousel({
    interval: 6000
});

var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete(d) {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle('complete');
}

toggleButton.onclick = toggleComplete;

function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}

function HideAllShowOne(d) {
// Between the quotation marks, list the id values of each div.

    var IDvaluesOfEachDiv = "displayText7 displayText8 displayText9 displayText10 displayText11 displayText12 displayText13 displayText displayText1 displayText2 displayText3 displayText4 displayText5 displayText6";

    //-------------------------------------------------------------
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g," ");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/,"");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/,"");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g," ");
    var IDlist = IDvaluesOfEachDiv.split(" ");
    for(var i=0; i<IDlist.length; i++) { HideContent(IDlist[i]); }
    ShowContent(d);
    if(document.getElementById(d).style.display == "block")  { HideContent(d); }
}

function showonlyonev2(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
      for(var x=0; x<newboxes.length; x++) {
            name = newboxes[x].getAttribute("class");
            if (name == 'newboxes-2') {
                  if (newboxes[x].id == thechosenone) {
                        if (newboxes[x].style.display == 'block') {
                              newboxes[x].style.display = 'none';
                        }
                        else {
                              newboxes[x].style.display = 'block';
                        }
                  }else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}

function showonlyonev3(thechosenone) {
    var newboxes = document.getElementsByTagName("tr");
    for(var x=0; x<newboxes.length; x++) {
          name = newboxes[x].getAttribute("class");
          if (name == 'newboxes-2') {
                if (newboxes[x].id == thechosenone) {
                      if (newboxes[x].style.display == 'block') {
                            newboxes[x].style.display = 'none';
                      }
                      else {
                            newboxes[x].style.display = 'block';
                      }
                }else {
                      newboxes[x].style.display = 'none';
                }
          }
    }
}