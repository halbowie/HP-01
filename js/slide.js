$(function(){
  /* slide */
  
  //変数定義
  var count = $(".fv li").length;  //画像の枚数
  var current = 1;  //現在表示されている画像（最初は１番目の画像）
  var next = 2; //次に表示する画像
  var interval = 4000 //フェードイン・フェードアウトのインターバル（何秒ごとに切り替えるか）
  var duration = 800; //フェードイン・フェードアウトのスピード
  var timer; //タイマー用の変数
  $(".fv li:not(:first-child)").hide(); //1枚目以外の画像を非表示
  timer = setInterval(slideTimer,interval); //3000ミリごと(intervalの値)にslideTimer()関数を実行

  //slideTimer関数
  function slideTimer(){
    $(".fv li:nth-child(" + current + ")").fadeOut(duration); //現在の画像をフェードアウト
    $(".fv li:nth-child(" + next +")").fadeIn(duration); //次の画像をフェードイン
    current = next; //変数currentの新しい値：変数nextの元の値
    next = ++next; //変数nextの新しい値：変数curremtの新しい値+1

    if(next > count) { //画像の枚数を超える場合１枚目の画像に戻る
      next = 1;
    }
  }
});