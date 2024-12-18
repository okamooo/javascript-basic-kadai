 // output-btnというidを持つHTML要素を取得し、定数に代入する
 const btn = document.getElementById('btn');

 const text = document.getElementById('text');
 
 // HTML要素がクリックされたときにイベント処理を実行する
 btn.addEventListener('click', () => {
   
   const childList = document.createElement('li');

   childList.textContent = 'ボタンをクリックしました';

   text.appendChild(childList);

   text.textContent    = "ボタンをクリックしました。";


 });

 