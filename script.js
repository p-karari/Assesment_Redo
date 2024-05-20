document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.new_btn');
    const new_task = document.getElementsByClassName('new_task');
    let task_value = new_task.value;
    const para = document.querySelectorAll('p');
    const del = document.querySelectorAll('.btn');

    
    
    del.forEach((button, index) => {
        button.addEventListener('click', function() {
            para[index].style.textDecoration = "line-through"
            para[index].style.color = "gray"
        });
    });


    function add_task() {
        
        const task = document.createElement('div')
        const btn = document.createElement('button');
        const p = document.createElement('p');

        btn.textContent = '';
        p.textContent = task_value;
            

        task.classList.add('task');
        btn.classList.add('btn');

        task.appendChild(btn);
        task.appendChild(p);

        new_task.value = '';

    }
    // console.log(new_button)
    

    button.addEventListener('click', function() {
        new_task.textContent = ' ';
    });
    // new_btn[0].addEventListener('click', function() {
    //     console.log("clicked")
    // })
    
    
})

