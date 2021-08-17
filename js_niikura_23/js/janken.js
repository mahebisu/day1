// 最初は結果は消えている
$(".kekka_one").hide();

//今日の日付データを変数に格納
//変数は"today"とする
var today=new Date(); 

//年・月・日・曜日を取得
var year = today.getFullYear();
var month = today.getMonth()+1;
var week = today.getDay();
var day = today.getDate();

var week_ja= new Array("日","月","火","水","木","金","土");

// どこに行くかを決める
var ransu1 = Math.random() * 6;
var ransu2 = Math.floor(ransu1);
console.log(ransu2);

if (ransu2 === 0) {
    var mokutekichi = "三越湯　サウナ";
} else if(ransu2 === 1){
    var mokutekichi = "北欧　サウナ";
}else if(ransu2 === 2){
    var mokutekichi = "吉の湯　サウナ";
}else if(ransu2 === 3){
    var mokutekichi = "かるまる　サウナ";
}else if(ransu2 === 4){
    var mokutekichi = "黄金湯　サウナ";
}else if(ransu2 === 5){
    var mokutekichi = "アダムアンドイブ　サウナ";
};
console.log(mokutekichi);

function kekkahyoji(){

    if (ransu2 === 0) {
        $(".kekka1").fadeIn(1000);
    } else if(ransu2 === 1){
        $(".kekka2").fadeIn(1000);
    }else if(ransu2 === 2){
        $(".kekka3").fadeIn(1000);
    }else if(ransu2 === 3){
        $(".kekka4").fadeIn(1000);
    }else if(ransu2 === 4){
        $(".kekka5").fadeIn(1000);
    }else if(ransu2 === 5){
        $(".kekka6").fadeIn(1000);
    };    

};

$(document).on("click","#btn_id",function(){
    var imadoko = $("#naka").val();
    console.log(imadoko);
    var maplink = "https://www.google.com/maps/dir/?api=1&origin=" + imadoko + "&destination=" + mokutekichi + "&travelmode=transit&hl=ja";

    $("#nyuryoku_id , #doreni_id").slideUp(1000);

    $(".doreni_pic2 p").prepend(month+"月"+day+"日は<br>");

    if (ransu2 === 0) {
        $(".kekka1").fadeIn(1000);
    } else if(ransu2 === 1){
        $(".kekka2").fadeIn(1000);
    }else if(ransu2 === 2){
        $(".kekka3").fadeIn(1000);
    }else if(ransu2 === 3){
        $(".kekka4").fadeIn(1000);
    }else if(ransu2 === 4){
        $(".kekka5").fadeIn(1000);
    }else if(ransu2 === 5){
        $(".kekka6").fadeIn(1000);
    };
 
    $(".kekka_a").attr("href",maplink);
    console.log(maplink)

});

