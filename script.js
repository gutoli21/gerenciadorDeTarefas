document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');
    const todoCount = document.getElementById('todo-count');
    const inProgressCount = document.getElementById('in-progress-count');
    const doneCount = document.getElementById('done-count');

    let draggedTask = null;

    function updateCounters() {
        todoCount.textContent = document.querySelectorAll('#todo .task').length;
        inProgressCount.textContent = document.querySelectorAll('#in-progress .task').length;
        doneCount.textContent = document.querySelectorAll('#done .task').length;
    }

    columns.forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault();
            column.classList.add('over');
        });

        column.addEventListener('dragleave', () => {
            column.classList.remove('over');
        });

        column.addEventListener('drop', () => {
            column.classList.remove('over');
            if (draggedTask) {
                column.appendChild(draggedTask);
                updateCounters();
            }
        });
    });

    document.querySelectorAll('.task').forEach(task => {
        task.addEventListener('dragstart', () => {
            draggedTask = task;
            setTimeout(() => {
                task.style.display = 'none';
            }, 0);
        });

        task.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedTask.style.display = 'block';
                draggedTask = null;
            }, 0);
        });
    });

    updateCounters();
});