function addingEventListener() {
    const input = document.getElementById('button');
    if(input){
        input.addEventListener('click',function(){
            alert('Button clicked!')

        });
    }
}
