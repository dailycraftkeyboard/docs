(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1074:function(t,r,s){"use strict";s.r(r);var a=s(14),e=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sandbox-keyboard-ビルドガイド"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sandbox-keyboard-ビルドガイド"}},[t._v("#")]),t._v(" sandbox keyboard ビルドガイド")]),t._v(" "),r("p",[t._v("初心者用 はんだ付け練習基板"),r("a",{attrs:{href:"https://shop.dailycraft.jp/products/sandbox_keyboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("「sandbox keyboard v2」"),r("OutboundLink")],1),t._v("のビルドガイドになります。")]),t._v(" "),r("p",[t._v("目当てのキーボードにいきなりはんだ付けするのは怖くないですか？"),r("br"),t._v("\nそんな時はこの基板を練習台にして、はんだ付けに慣れてから取り組んでみましょう。")]),t._v(" "),r("p",[t._v("初心者の方でも自作キーボードの組み立てができるように、なるべく丁寧に説明していきますが、わかりにくい部分などありましたら "),r("a",{attrs:{href:"https://shop.dailycraft.jp/pages/inquiry",target:"_blank",rel:"noopener noreferrer"}},[t._v("問い合わせフォーム"),r("OutboundLink")],1),t._v("からご連絡ください。")]),t._v(" "),r("h2",{attrs:{id:"基板の種類"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基板の種類"}},[t._v("#")]),t._v(" 基板の種類")]),t._v(" "),r("p",[t._v("sandbox keyboard v2は使用するキースイッチのタイプにより、2種類あります。"),r("br"),t._v("\n「MX互換スイッチ用」と「Choc v1用」になります。目当てのキーボードがどちらのタイプか確認してお求めください。また、それぞれ「キースイッチの直付け」、「ソケット使用」の両方に対応しています。")]),t._v(" "),r("h2",{attrs:{id:"事前準備"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),r("p",[t._v("こちらを参考に工具を揃えてください")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/contents/guide/tool.html"}},[t._v("自作キーボード組み立てに必要な工具")])],1)]),t._v(" "),r("h2",{attrs:{id:"全体図"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全体図"}},[t._v("#")]),t._v(" 全体図")]),t._v(" "),r("p",[t._v("この基板は線から上が「練習部分」、下が「キーボード部分」になっています。"),r("br"),t._v(" "),r("img",{attrs:{src:s(631),alt:""}})]),t._v(" "),r("p",[t._v("練習部分は配線がされていないので、純粋にはんだ付けの練習をする部分です。")]),t._v(" "),r("p",[t._v("キーボード部分も単にはんだ付けの練習にしても良いですし、その気になれば実際にキーボードとして動かすこともできます。練習からキーボード部分の作成と進んでいきますので、順番に読み進めてください。")]),t._v(" "),r("h2",{attrs:{id:"はんだ付けの練習"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#はんだ付けの練習"}},[t._v("#")]),t._v(" はんだ付けの練習")]),t._v(" "),r("p",[t._v("まずは、はんだ付けに慣れていきましょう。")]),t._v(" "),r("h3",{attrs:{id:"スルーホールタイプの練習"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#スルーホールタイプの練習"}},[t._v("#")]),t._v(" スルーホールタイプの練習")]),t._v(" "),r("p",[t._v("シンプルな部品であるスルーホールタイプのダイオードをはんだ付けしましょう。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/diode_th.html"}},[t._v("→ ダイオードのはんだ付け（スルーホール）")]),r("br"),t._v(" "),r("img",{attrs:{src:s(301),alt:""}})],1),t._v(" "),r("h3",{attrs:{id:"表面実装タイプの練習"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表面実装タイプの練習"}},[t._v("#")]),t._v(" 表面実装タイプの練習")]),t._v(" "),r("p",[t._v("電子部品にはスルーホールタイプ以外にも表面実装(SMD)タイプの部品もあります。表面実装(SMD)タイプのダイオードしか対応していないキットもありますので、その場合はこちらで練習しておきましょう。少し難易度は上がるので、これから作るキットに必要なければ飛ばしても大丈夫です。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/diode_smd.html"}},[t._v("→  ダイオードのはんだ付け（表面実装）")]),r("br"),t._v(" "),r("img",{attrs:{src:s(302),alt:""}})],1),t._v(" "),r("h2",{attrs:{id:"キーボード部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#キーボード部分"}},[t._v("#")]),t._v(" キーボード部分")]),t._v(" "),r("p",[t._v("はんだ付けには慣れてきたでしょうか。"),r("br"),t._v("\nここからはキーボード部分に入っていきます。"),r("br"),t._v("\nPro Microなど必要な部品をつければキーボードとして動かす事も可能です。")]),t._v(" "),r("h3",{attrs:{id:"ダイオード"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ダイオード"}},[t._v("#")]),t._v(" ダイオード")]),t._v(" "),r("p",[t._v("先ほどまでのダイオードは配線がされていないので、特に機能はしませんでした。画像赤枠のスペースのダイオードは実際にキーボードの部品として配線されています。ハンダが不十分だったり、向きが間違っていたりしたらキーボードが正常に動きません。丁寧にやっていきましょう。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(632),alt:""}})]),t._v(" "),r("p",[t._v("このスペースのダイオードはスルーホールタイプの時に使ったフットプリント（基板のパターンのこと）と同じです。"),r("br"),t._v("\nそのままスルーホールで使うこともできますが、内側には表面実装タイプのダイオードも取り付けられるので、目当てのキーボードと同じタイプではんだ付けを行ってみてください。"),r("br"),t._v("\nこちらは先ほどと逆の裏面から取り付けます。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(633),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"キースイッチ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#キースイッチ"}},[t._v("#")]),t._v(" キースイッチ")]),t._v(" "),r("p",[t._v("「基板の種類」でも説明しましたが、キースイッチには「MX互換スイッチ用」と「Choc v1用」になります。また、ソケットの使用の有無によっても手順が異なります。4パターンに分けて説明しますので、それぞれ該当のページをご覧ください。")]),t._v(" "),r("h4",{attrs:{id:"mx互換スイッチ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mx互換スイッチ"}},[t._v("#")]),t._v(" MX互換スイッチ")]),t._v(" "),r("ul",[r("li",[t._v("ソケットを使う場合\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_socket_mx.html"}},[t._v("→ キースイッチソケットのはんだ付け（MX）")])],1)])]),t._v(" "),r("li",[t._v("基板に直付けする場合\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_mx.html"}},[t._v("→ キースイッチのはんだ付け（MX）")])],1)])])]),t._v(" "),r("h4",{attrs:{id:"choc-v1スイッチ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#choc-v1スイッチ"}},[t._v("#")]),t._v(" Choc v1スイッチ")]),t._v(" "),r("ul",[r("li",[t._v("ソケットを使う場合\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_socket_choc.html"}},[t._v("→ キースイッチソケットのはんだ付け（Choc）")])],1)])]),t._v(" "),r("li",[t._v("基板に直付けする場合\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_choc.html"}},[t._v("→ キースイッチのはんだ付け（Choc）")])],1)])])]),t._v(" "),r("h3",{attrs:{id:"リセットスイッチ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#リセットスイッチ"}},[t._v("#")]),t._v(" リセットスイッチ")]),t._v(" "),r("p",[t._v("ファームウェアの書き換えの時に必要になるスイッチで、形状は違えどほとんどのキーボードについています。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/reset_switch.html"}},[t._v("→ リセットスイッチの取り付け")])],1),t._v(" "),r("p",[r("img",{attrs:{src:s(634),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"pro-micro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pro-micro"}},[t._v("#")]),t._v(" Pro Micro")]),t._v(" "),r("p",[t._v("あとはPro Microをつければキーボードとして動かすことができます。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/promicro.html"}},[t._v("→ Pro Microの取り付け")])],1),t._v(" "),r("p",[r("img",{attrs:{src:s(303),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"ファームウェア"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ファームウェア"}},[t._v("#")]),t._v(" ファームウェア")]),t._v(" "),r("p",[t._v("Pro Microを動かすためにはファームウェアを書き込む必要があります。")]),t._v(" "),r("p",[r("a",{attrs:{href:"/buildguides/firmware/remap"}},[t._v("ファームウェアの書き込み")]),t._v("を参考に書き込みを行います。"),r("br"),t._v(" "),r("a",{attrs:{href:"https://remap-keys.app/catalog/3HFVPPP6EtNPz3fePi6v/firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("sandbox rev2 のファームウェア | Remap"),r("OutboundLink")],1),t._v("を使用してください。"),r("br"),t._v("\nOLEDを使用する場合は「oled(latest)」を使用してください。")]),t._v(" "),r("h3",{attrs:{id:"動作確認とキーマップ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#動作確認とキーマップ"}},[t._v("#")]),t._v(" 動作確認とキーマップ")]),t._v(" "),r("p",[t._v("キーボードの動作確認を行いましょう。"),r("br"),t._v("\nソケットにキースイッチを取り付けてない場合は取り付けて下さい。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("再度"),r("a",{attrs:{href:"https://remap-keys.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remap"),r("OutboundLink")],1),t._v("を開いてください")])]),t._v(" "),r("li",[r("p",[t._v("拡張機能などでアルファベットに対してショートカットキーが割り当てられていると干渉する場合があります。そのような拡張機能はオフにしておいてください（Vimiumなど）")])]),t._v(" "),r("li",[r("p",[t._v("「START REMAP FOR YOUR KEYBOARD」をクリック"),r("br"),t._v(" "),r("img",{attrs:{src:s(635),alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("「+KEYBOARD」をクリック"),r("br"),t._v(" "),r("img",{attrs:{src:s(636),alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("「sandbox」を選択して、「接続」をクリック"),r("br"),t._v(" "),r("img",{attrs:{src:s(637),alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("キーボード画像右下の「・・・」から「Test Matrix Mode」を選択"),r("br"),t._v(" "),r("img",{attrs:{src:s(638),alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("各キーを押して、正常にPCに送信されていると色がつきます。全てのキーに色がつくことを確認してください。"),r("br"),t._v(" "),r("img",{attrs:{src:s(639),alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("反応しないキーは正常に動いていません")]),t._v(" "),r("ul",[r("li",[t._v("下記を確認しください\n"),r("ul",[r("li",[t._v("ダイオードが正しい向きでついている")]),t._v(" "),r("li",[t._v("ダイオードのはんだ付けがされている")]),t._v(" "),r("li",[t._v("キースイッチソケットがはんだ付けされている")])])]),t._v(" "),r("li",[t._v("正しくつけられているように見えても、はんだ付けがうまくいってない場合があります\n"),r("ul",[r("li",[t._v("ダイオードのハンダをハンダゴテで温め直してみてください")]),t._v(" "),r("li",[t._v("キースイッチソケットのハンダをハンダゴテで温め直してみてください")])])]),t._v(" "),r("li",[t._v("これでも治らない場合はサポートしますのでご連絡ください")])])])]),t._v(" "),r("h3",{attrs:{id:"キーキャップ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#キーキャップ"}},[t._v("#")]),t._v(" キーキャップ")]),t._v(" "),r("p",[t._v("お好みでキーキャップをつけてください"),r("br"),t._v(" "),r("img",{attrs:{src:s(640),alt:""}}),r("br"),t._v(" "),r("img",{attrs:{src:s(641),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"オプション"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#オプション"}},[t._v("#")]),t._v(" オプション")]),t._v(" "),r("h3",{attrs:{id:"oled"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oled"}},[t._v("#")]),t._v(" OLED")]),t._v(" "),r("p",[t._v("キーボードによってはOLEDディスプレイに対応しているものもあります。"),r("br"),t._v("\nsandbox keyboardでも取り付けられるようになっているので、お好みで取り付けてみましょう。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(642),alt:""}})]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/oled.html"}},[t._v("→ OLEDはんだ付け")])],1),t._v(" "),r("h3",{attrs:{id:"分割キーボードとして使う"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分割キーボードとして使う"}},[t._v("#")]),t._v(" 分割キーボードとして使う")]),t._v(" "),r("p",[t._v("分割型キーボードの場合、TRRSケーブルで左右を接続することが多いです。"),r("br"),t._v("\nTRRSジャックの取り付けが必要な場合はこちらで練習してみましょう。"),r("br"),t._v("\nsandbox keyboard v2を2台用意すれば、分割キーボードとしても動作します。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/buildguides/sandboxv2/trrs.html"}},[t._v("→ TRRSジャックのはんだ付け")]),r("br"),t._v(" "),r("img",{attrs:{src:s(304),alt:""}})],1),t._v(" "),r("p",[t._v("分割キーボードとして動かすには2台のsandbox keyboardが必要です。"),r("br"),t._v("\n「MX互換スイッチ用」と「Choc v1用」で、TRRSジャックの向きを反対にしてあるので、2種類組み上げて繋げてもらえると嬉しいです。"),r("br"),t._v(" "),r("img",{attrs:{src:s(643),alt:""}})]),t._v(" "),r("p",[t._v("こちらでsandbox keyboardができることは全てです。"),r("br"),t._v("\n最初の頃より、はんだ付けのレベルが上がっていると思います。"),r("br"),t._v("\nぜひ、目当てのキーボードを完成させてください！")])])}),[],!1,null,null,null);r.default=e.exports},301:function(t,r,s){t.exports=s.p+"assets/img/th30.d310483e.jpeg"},302:function(t,r,s){t.exports=s.p+"assets/img/diode-smd.0d212a51.jpeg"},303:function(t,r,s){t.exports=s.p+"assets/img/promicro-20.d93f3824.jpeg"},304:function(t,r,s){t.exports=s.p+"assets/img/trrs-30.49b49b54.jpeg"},631:function(t,r,s){t.exports=s.p+"assets/img/overall.548c97b5.jpeg"},632:function(t,r,s){t.exports=s.p+"assets/img/keyboard-diode.f38cc31f.jpeg"},633:function(t,r,s){t.exports=s.p+"assets/img/keyboard-diode-2.19c7ebb5.jpeg"},634:function(t,r,s){t.exports=s.p+"assets/img/reset.21975b4e.jpeg"},635:function(t,r,s){t.exports=s.p+"assets/img/r1.b2b55bd4.jpeg"},636:function(t,r,s){t.exports=s.p+"assets/img/r2.3480052f.jpeg"},637:function(t,r,s){t.exports=s.p+"assets/img/r3.6da5eb97.jpeg"},638:function(t,r,s){t.exports=s.p+"assets/img/r4.98c7c4ce.jpeg"},639:function(t,r,s){t.exports=s.p+"assets/img/r5.ebae98d6.jpeg"},640:function(t,r,s){t.exports=s.p+"assets/img/keycaps-mx.d6146056.jpeg"},641:function(t,r,s){t.exports=s.p+"assets/img/keycaps-choc.32f977f3.jpeg"},642:function(t,r,s){t.exports=s.p+"assets/img/oled.ae1b1a3a.jpeg"},643:function(t,r,s){t.exports=s.p+"assets/img/split-10.5dea40ba.jpeg"}}]);