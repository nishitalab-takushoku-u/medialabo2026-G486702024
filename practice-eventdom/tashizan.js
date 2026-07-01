function greeting() {
    let i = document.querySelector('input[name="left"]');
    let i2=document.querySelector('input[name="right"]');
    let span=document.querySelector('span#answer');
    let left = Number(i.value);
    let right = Number(i2.value);
    span.textContent=left+right;
}
    b = document.querySelector('button#calc');
    b.addEventListener('click', greeting); 