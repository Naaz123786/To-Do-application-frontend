document.querySelector('#click').onclick = function () {
    if (document.querySelector('#task input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#task input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var remove = document.querySelectorAll(".delete");
        for(var i=0; i<remove.length; i++){
            remove[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}