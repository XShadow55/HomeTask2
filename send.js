function sendMail()
{
 var body = document.getElementById("email").value;
 window.location.href = "mailto:${body}?subject=Happy New Year&body="+body;
}