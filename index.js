let control = 0;
let correctpassword = 'access01';
let correctuser = 'guest89%'

    function verify(){
        let enteredpassword = document.getElementById('enteredpassword').value;
        let entereduser = document.getElementById('entereduser').value;

        if(entereduser != correctuser || enteredpassword != correctpassword || enteredpassword == "" || entereduser == ""){
            alert('Incorrect username or password or empty slot');
            control++;
            if(control >=3){
            alert('exhausted attempts I dont know what you are trying to do here so get out of here X_X');
            }
        }else{
            window.open('https://kyonfrz.github.io/projects.github.io/')
        }
    }