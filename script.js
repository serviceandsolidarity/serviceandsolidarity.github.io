function sendEmail () {
    event.preventDefault ();

    let emailMessage = "Name: ";
    emailMessage += document.getElementById ("fname").value + " "
                  + document.getElementById ("lname").value;
    emailMessage += "<br />Email: ";
    emailMessage += document.getElementById ("email").value;
    emailMessage += "<br />Message: <br />";
    emailMessage += document.getElementById ("message").value;

    Email.send({
        SecureToken : "25c9f00d-1fb6-4ca4-922c-c4297cf1a3d2",
        To : 'serviceandsolidarity@outlook.com',
        From : 'serviceandsolidarity@outlook.com',
        Subject : document.getElementById ("subject").value,
        Body : emailMessage
    }).then(
    message => alert(message)
    );
}