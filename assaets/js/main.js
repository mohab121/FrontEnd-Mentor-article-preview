const btn = document.querySelector('.share_btn');
const share = document.querySelector('.share');

function share_show () {
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('share_btn-active');
        share.classList.toggle('disabled');
    })
}

window.addEventListener('DOMContentLoaded', ()=>{
    share_show()
})