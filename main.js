// (function() {
//     'use strict'

    function kingSaid() {
        'use strict'

        var orders = [
            'デコピンしなさい',
            'クイズを出しなさい',
            '褒めちぎりなさい',
            'ドリンクを注ぎなさい',
        ];
        var order = orders[Math.floor(Math.random() * orders.length)]; // 配列から１つ取得

        var num = document.getElementById('num').value; // 入力された人数の値を取得

        console.log(num);

        if (num.match(/^[1-9][0-9]*$/) !== null) {
            var p1 = Math.floor(Math.random() * num) + 1; // 先ず１人目の値を取得
            var p2; // 変数宣言だけしておく

            if (num < 2) {
                document.getElementById('result').innerHTML = '１人ではできないゾイ！';
            } else {
                do { // do{}while()文を使い、p1とp2が重複しないようにする
                    p2 = Math.floor(Math.random() * num) + 1;
                } while (p1 === p2); // p1とp2が同じなら、再度処理を実行
                    document.getElementById('result').innerHTML =
                    p1 + 'の人が ' + p2 + 'の人に' + order;
            }

        } else {
            document.getElementById('result').innerHTML = '半角数字を入力して下さい。';
        }
    }

// })();