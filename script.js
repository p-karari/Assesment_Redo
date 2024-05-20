document.addEventListener('DOMContentLoaded', () => {
    let new_btn = document.getElementsByClassName('new_btn');
    const new_task = document.getElementsByClassName('new_task');
    let task_value = new_task.value;
    const para = document.querySelectorAll('p')
    const del = document.getElementsByClassName('btn');
    function del_function() {
        para.style.textDecoration = "line-through"
    }
    del.addEventListener('click', function() {
        del_function();
    })


    // function add_task() {
        
    //     const task = document.createElement('div')
    //     const btn = document.createElement('button');
    //     const p = document.createElement('p');

    //     btn.textContent = '';
    //     p.textContent = task_value;
            

    //     task.classList.add('task');
    //     btn.classList.add('btn');

    //     task.appendChild(btn);
    //     task.appendChild(p);

    //     new_task.value = '';

    //     }
    // console.log(new_btn)
    // new_btn.addEventListener('click', function() {
    //     add_task()
    // })
})

