$(document).ready(function() {
  // Function to toggle the 'on' class on the sidebar
  function toggleSidebar() {
      $('.sidebar').toggleClass('on');
  }

  // Toggle the sidebar when the toggler button is clicked
  $('.toggler').on('click', function(event) {
      event.stopPropagation(); // Prevent the click event from propagating to document
      toggleSidebar();
  });

  // Hide the sidebar when clicking outside of it
  $(document).on('click', function(event) {
      if (!$(event.target).closest('.sidebar').length && !$(event.target).hasClass('toggler')) {
          $('.sidebar').removeClass('on');
      }
  });
  
  // Prevent the click event on the sidebar from closing it
  $('.sidebar').on('click', function(event) {
      event.stopPropagation();
  });
});



let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".sidebar");
let main = document.querySelector(".main-body");

if (toggle) {
  // If 'toggle' is not null, assign the click event handler
  toggle.onclick =  () => {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
  };
} 

// navigation.onclick = function(){
//   navigation.style.width = "30px";
// } 

// ***************************** //
// Select and input script
// ***************************** //

function toggleInput(selectElement) {
  var inputElement = selectElement.parentElement.nextElementSibling.querySelector('input');

  if (selectElement.value === 'Yes') {
    inputElement.removeAttribute('disabled');
    inputElement.style.display = 'block'; // or 'inline-block', 'inline', depending on your layout
  } else {
    inputElement.setAttribute('disabled', 'disabled');
    inputElement.value = ''; // Reset the input value
    inputElement.style.display = 'none';
  }
}

