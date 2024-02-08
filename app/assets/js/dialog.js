function alertmessage(message) {
    $('#dialog-message').html(message);
    $('#dialog').show();
}

function closeDialog(){
    $('#dialog').hide();
}