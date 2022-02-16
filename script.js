document.addEventListener('DOMContentLoaded', () => {

    let fieldFirst = document.querySelector('.field-1');

    let fieldSecond = document.querySelector('.field-2');

    let target = document.createElement('div');

    target.className = 'target';

    fieldFirst.append(target)

    target.addEventListener('pointerdown', (e) => {
        let pointX = e.clientX - target.getBoundingClientRect().left;
        let pointY = e.clientY - target.getBoundingClientRect().top;

        target.addEventListener('pointermove', moveAt)
    
        function moveAt(e) {
            target.style.left = e.clientX - pointX  + 'px';
            target.style.top = e.clientY - pointY + 'px';

            target.hidden = true;
            let elem = document.elementFromPoint(e.clientX, e.clientY);
            target.hidden = false;
    
            if(!elem) return;
    
            let find = elem.closest('.field-2');
    
            if(find) {
                fieldSecond.style.border = '2px solid green'
            }
    
            if(find === null) {
                fieldSecond.style.border = '2px solid black'
            }
        }
    
        target.addEventListener('pointerup', deleteMove)
    
        function deleteMove() {
            target.removeEventListener('pointermove', moveAt)
        }
    })
})

