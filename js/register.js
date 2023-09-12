function redirectToDashboard() {
  // Capture form input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var birthdate = document.getElementById("birthdate").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var address = document.getElementById("address").value;

  // Create a URL-encoded query string with the form data
  var queryString =
    "fullName=" +
    encodeURIComponent(fullName) +
    "&email=" +
    encodeURIComponent(email) +
    "&phoneNumber=" +
    encodeURIComponent(phoneNumber) +
    "&birthdate=" +
    encodeURIComponent(birthdate) +
    "&gender=" +
    encodeURIComponent(gender) +
    "&address=" +
    encodeURIComponent(address);

  // Redirect to the dashboard page with the query string
  window.location.href = "dashboard.html?" + queryString;

  // Prevent the form from submitting
  return false;
}
