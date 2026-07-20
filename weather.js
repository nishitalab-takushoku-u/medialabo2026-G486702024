
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市名: 北京市");

  console.log("検索結果1件");
  console.log("緯度: "+data.coord.lon);
  console.log("経度: "+data.coord.lat);
  console.log("天気: "+data.weather[0].description);
  console.log("最低気温: "+data.main.temp_min);
  console.log("最高気温: "+data.main.temp_max);
  console.log("湿度: "+data.main.humidity);
  console.log("風速: "+data.wind.speed);
  console.log("風向: "+data.wind.deg);
}

function showSelectResult() {
    let s = document.querySelector('#city');
    let idx = s.selectedIndex;

    let os = s.querySelectorAll('option');
    let o = os.item(idx);

    console.log(o.getAttribute('value'));
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector('#result');

  if(old){
    old.remove();
  }
  //div#resultを作成
  let result=document.createElement('div');
  result.id="result";

  let body=document.querySelector('body');
  body.insertAdjacentElement('beforeend',result);

  let h2=document.createElement('h2');
  h2.textContent="世界の天気(検索結果1件)";
  result.insertAdjacentElement('beforeend',h2);

  let city=document.createElement('h2');
  city.textContent="都市名: "+data.name;
  result.insertAdjacentElement('beforeend',city);

  let table=document.createElement('table');
  result.insertAdjacentElement('beforeend',table);

  let tbody=document.createElement('tbody');
  table.insertAdjacentElement('beforeend',tbody);

  //行を追加する関数
  function addRow(title,value){

    let tr=document.createElement('tr');
    tbody.insertAdjacentElement('beforeend',tr);

    let th=document.createElement('th');
    th.textContent=title;
    tr.insertAdjacentElement('beforeend',th);

    let td = document.createElement('td');
    td.textContent=value;
    tr.insertAdjacentElement('beforeend',td);
  }


  addRow("経度",data.coord.lon);
  addRow("緯度",data.coord.lat);
  addRow("天気",data.weather[0].description);
  addRow("最低気温",data.main.temp_min);
  addRow("最高気温",data.main.temp_max);
  addRow("湿度",data.main.humidity);
  addRow("風速",data.wind.speed);
  addRow("風向",data.wind.deg);

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let s = document.querySelector('#city');
    let idx = s.selectedIndex;

    let os = s.querySelectorAll('option');
    let o = os.item(idx);

    let id = o.getAttribute('value');
    let url='https://www.nishita-lab.org/web-contents/jsons/openweather/' + id +'.json';


 // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

 // サーバから送られてきたデータを出力
 let data = resp.data;

 // data が文字列型なら，オブジェクトに変換する
 if (typeof data === 'string') {
     data = JSON.parse(data);
 }
     printDom(data);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}


// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること