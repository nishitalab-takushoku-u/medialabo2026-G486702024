function changeDom(){
    let l=document.createElement('li');
    l.textContent='ヨット';
    let u=document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend',l);

    let i = document.querySelector('img#bluemoon');// 要素の検索
    i.setAttribute('src','bluemoon.jpg');// 属性の設定 

    let a = document.createElement('a');// 新規要素 a を作成
    a.textContent = '拓殖大学HP';// 要素 a のテキスト設定
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');// 属性 href の設定
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);// p の直後に a を追加 

    l=document.querySelector( 'li#mochi');
    l.remove();
    u=document.querySelector('ul#kassen');
    u.remove();

    u=document.createElement('ul');
    p=document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);

    l=document.createElement('li');
    u.insertAdjacentElement('beforeend',l);
    l.textContent=('赤');

    l=document.createElement('li');
    u.insertAdjacentElement('beforeend',l);
    l.textContent=('緑');

    l=document.createElement('li');
    u.insertAdjacentElement('beforeend',l);
    l.textContent=('青');
}
    b = document.querySelector('button#henkou');
    b.addEventListener('click', changeDom);