function showMessage(){
    const msg = "Kita bagaikan bla bla bla aku tidak tahu bagaiaman";
    const target = document.getElementById("secret-message");
    target.textContent = "";

    let index = 0;

    const typing = setInterval(() => {
        if(index < msg.length) {
            target.textContent += msg.charAt(index);
            index++;
        } else{
            clearInterval(typing);
        }
    }, 70);
}