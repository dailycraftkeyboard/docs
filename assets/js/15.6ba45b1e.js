(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1064:function(t,r,a){"use strict";a.r(r);var s=a(56),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sandbox-keyboard-ビルドガイド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sandbox-keyboard-ビルドガイド"}},[t._v("#")]),t._v(" sandbox keyboard ビルドガイド")]),t._v(" "),s("p",[t._v("初心者用 はんだ付け練習基板"),s("a",{attrs:{href:"https://shop.dailycraft.jp/products/sandbox_keyboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("「sandbox keyboard v2」"),s("OutboundLink")],1),t._v("のビルドガイドになります。")]),t._v(" "),s("p",[t._v("目当てのキーボードにいきなりはんだ付けするのは怖くないですか？"),s("br"),t._v("\nそんな時はこの基板を練習台にして、はんだ付けに慣れてから取り組んでみましょう。")]),t._v(" "),s("p",[t._v("初心者の方でも自作キーボードの組み立てができるように、なるべく丁寧に説明していきますが、わかりにくい部分などありましたら "),s("a",{attrs:{href:"https://shop.dailycraft.jp/pages/inquiry",target:"_blank",rel:"noopener noreferrer"}},[t._v("問い合わせフォーム"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://shop.dailycraft.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("店舗のチャット"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://twitter.com/dailycraftkbd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),s("OutboundLink")],1),t._v("からご連絡ください。")]),t._v(" "),s("h2",{attrs:{id:"基板の種類"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基板の種類"}},[t._v("#")]),t._v(" 基板の種類")]),t._v(" "),s("p",[t._v("sandbox keyboard v2は使用するキースイッチのタイプにより、2種類あります。"),s("br"),t._v("\n「MX互換スイッチ用」と「Choc v1用」になります。目当てのキーボードがどちらのタイプか確認してお求めください。また、それぞれ「キースイッチの直付け」、「ソケット使用」の両方に対応しています。")]),t._v(" "),s("h2",{attrs:{id:"事前準備"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),s("p",[t._v("こちらを参考に工具を揃えてください")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/contents/guide/tool.html"}},[t._v("自作キーボード組み立てに必要な工具")])],1)]),t._v(" "),s("h2",{attrs:{id:"全体図"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全体図"}},[t._v("#")]),t._v(" 全体図")]),t._v(" "),s("p",[t._v("この基板は線から上が「練習部分」、下が「キーボード部分」になっています。"),s("br"),t._v(" "),s("img",{attrs:{src:a(716),alt:""}})]),t._v(" "),s("p",[t._v("練習部分は配線がされていないので、純粋にはんだ付けの練習をする部分です。")]),t._v(" "),s("p",[t._v("キーボード部分も単にはんだ付けの練習にしても良いですし、その気になれば実際にキーボードとして動かすこともできます。練習からキーボード部分の作成と進んでいきますので、順番に読み進めてください。")]),t._v(" "),s("h2",{attrs:{id:"はんだ付けの練習"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#はんだ付けの練習"}},[t._v("#")]),t._v(" はんだ付けの練習")]),t._v(" "),s("p",[t._v("まずは、はんだ付けに慣れていきましょう。")]),t._v(" "),s("h3",{attrs:{id:"スルーホールタイプの練習"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#スルーホールタイプの練習"}},[t._v("#")]),t._v(" スルーホールタイプの練習")]),t._v(" "),s("p",[t._v("シンプルな部品であるスルーホールタイプのダイオードをはんだ付けしましょう。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/diode_th.html"}},[t._v("→ ダイオードのはんだ付け（スルーホール）")]),s("br"),t._v(" "),s("img",{attrs:{src:a(379),alt:""}})],1),t._v(" "),s("h3",{attrs:{id:"表面実装タイプの練習"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表面実装タイプの練習"}},[t._v("#")]),t._v(" 表面実装タイプの練習")]),t._v(" "),s("p",[t._v("電子部品にはスルーホールタイプ以外にも表面実装(SMD)タイプの部品もあります。表面実装(SMD)タイプのダイオードしか対応していないキットもありますので、その場合はこちらで練習しておきましょう。少し難易度は上がるので、これから作るキットに必要なければ飛ばしても大丈夫です。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/diode_smd.html"}},[t._v("→  ダイオードのはんだ付け（表面実装）")]),s("br"),t._v(" "),s("img",{attrs:{src:a(380),alt:""}})],1),t._v(" "),s("h2",{attrs:{id:"キーボード部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#キーボード部分"}},[t._v("#")]),t._v(" キーボード部分")]),t._v(" "),s("p",[t._v("はんだ付けには慣れてきたでしょうか。"),s("br"),t._v("\nここからはキーボード部分に入っていきます。"),s("br"),t._v("\nPro Microなど必要な部品をつければキーボードとして動かす事も可能です。")]),t._v(" "),s("h3",{attrs:{id:"ダイオード"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ダイオード"}},[t._v("#")]),t._v(" ダイオード")]),t._v(" "),s("p",[t._v("先ほどまでのダイオードは配線がされていないので、特に機能はしませんでした。画像赤枠のスペースのダイオードは実際にキーボードの部品として配線されています。ハンダが不十分だったり、向きが間違っていたりしたらキーボードが正常に動きません。丁寧にやっていきましょう。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(717),alt:""}})]),t._v(" "),s("p",[t._v("このスペースのダイオードはスルーホールタイプの時に使ったフットプリント（基板のパターンのこと）と同じです。"),s("br"),t._v("\nそのままスルーホールで使うこともできますが、内側には表面実装タイプのダイオードも取り付けられるので、目当てのキーボードと同じタイプではんだ付けを行ってみてください。"),s("br"),t._v("\nこちらは先ほどと逆の裏面から取り付けます。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(718),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"キースイッチ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#キースイッチ"}},[t._v("#")]),t._v(" キースイッチ")]),t._v(" "),s("p",[t._v("「基板の種類」でも説明しましたが、キースイッチには「MX互換スイッチ用」と「Choc v1用」になります。また、ソケットの使用の有無によっても手順が異なります。4パターンに分けて説明しますので、それぞれ該当のページをご覧ください。")]),t._v(" "),s("h4",{attrs:{id:"mx互換スイッチ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mx互換スイッチ"}},[t._v("#")]),t._v(" MX互換スイッチ")]),t._v(" "),s("ul",[s("li",[t._v("ソケットを使う場合\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_socket_mx.html"}},[t._v("→ キースイッチソケットのはんだ付け（MX）")])],1)])]),t._v(" "),s("li",[t._v("基板に直付けする場合\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_mx.html"}},[t._v("→ キースイッチのはんだ付け（MX）")])],1)])])]),t._v(" "),s("h4",{attrs:{id:"choc-v1スイッチ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choc-v1スイッチ"}},[t._v("#")]),t._v(" Choc v1スイッチ")]),t._v(" "),s("ul",[s("li",[t._v("ソケットを使う場合\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_socket_choc.html"}},[t._v("→ キースイッチソケットのはんだ付け（Choc）")])],1)])]),t._v(" "),s("li",[t._v("基板に直付けする場合\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/switch_choc.html"}},[t._v("→ キースイッチのはんだ付け（Choc）")])],1)])])]),t._v(" "),s("h3",{attrs:{id:"リセットスイッチ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#リセットスイッチ"}},[t._v("#")]),t._v(" リセットスイッチ")]),t._v(" "),s("p",[t._v("ファームウェアの書き換えの時に必要になるスイッチで、形状は違えどほとんどのキーボードについています。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/reset_switch.html"}},[t._v("→ リセットスイッチの取り付け")])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(719),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"pro-micro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pro-micro"}},[t._v("#")]),t._v(" Pro Micro")]),t._v(" "),s("p",[t._v("あとはPro Microをつければキーボードとして動かすことができます。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/promicro.html"}},[t._v("→ Pro Microの取り付け")])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(381),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"ファームウェア"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ファームウェア"}},[t._v("#")]),t._v(" ファームウェア")]),t._v(" "),s("p",[t._v("Pro Microを動かすためにはファームウェアを書き込む必要があります。"),s("br"),t._v("\n詳しいことを知りたい場合は、"),s("a",{attrs:{href:"https://kbd.dailycraft.jp/keyboard/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自作キーボードのファームウェア"),s("OutboundLink")],1),t._v("を参考にしてください。")]),t._v(" "),s("p",[t._v("Remapというウェブサービスでファームウェアを書き込めるので、"),s("a",{attrs:{href:"https://remap-keys.app/catalog/jkMIFT7FWrJT3bCGPjGz/firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remapのsandbox keyboardのページ"),s("OutboundLink")],1),t._v("の「FLASH]というリンクから書き込みを行ってください。通常は「default」、OLEDも使用する場合は「oled」というファームウェアを選択して下さい。")]),t._v(" "),s("h3",{attrs:{id:"動作確認とキーマップ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#動作確認とキーマップ"}},[t._v("#")]),t._v(" 動作確認とキーマップ")]),t._v(" "),s("p",[t._v("キーボードの動作確認を行いましょう。"),s("br"),t._v("\nソケットにキースイッチを取り付けてない場合は取り付けて下さい。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GoogleChromeで"),s("a",{attrs:{href:"https://remap-keys.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remap"),s("OutboundLink")],1),t._v("を開いてください")])]),t._v(" "),s("li",[s("p",[t._v("拡張機能などでアルファベットに対してショートカットキーが割り当てられていると干渉する場合があります。そのような拡張機能はオフにしておいてください（Vimiumなど）")])]),t._v(" "),s("li",[s("p",[t._v("「START REMAP FOR YOUR KEYBOARD」をクリック"),s("br"),t._v(" "),s("img",{attrs:{src:a(720),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("「+KEYBOARD」をクリック"),s("br"),t._v(" "),s("img",{attrs:{src:a(721),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("「sandbox」を選択して、「接続」をクリック"),s("br"),t._v(" "),s("img",{attrs:{src:a(722),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("キーボード画像右下の「・・・」から「Test Matrix Mode」を選択"),s("br"),t._v(" "),s("img",{attrs:{src:a(723),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("各キーを押して、正常にPCに送信されていると色がつきます。全てのキーに色がつくことを確認してください。"),s("br"),t._v(" "),s("img",{attrs:{src:a(724),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("反応しないキーは正常に動いていません")]),t._v(" "),s("ul",[s("li",[t._v("下記を確認しください\n"),s("ul",[s("li",[t._v("ダイオードが正しい向きでついている")]),t._v(" "),s("li",[t._v("ダイオードのはんだ付けがされている")]),t._v(" "),s("li",[t._v("キースイッチソケットがはんだ付けされている")])])]),t._v(" "),s("li",[t._v("正しくつけられているように見えても、はんだ付けがうまくいってない場合があります\n"),s("ul",[s("li",[t._v("ダイオードのハンダをハンダゴテで温め直してみてください")]),t._v(" "),s("li",[t._v("キースイッチソケットのハンダをハンダゴテで温め直してみてください")])])]),t._v(" "),s("li",[t._v("これでも治らない場合はサポートしますのでご連絡ください")])])])]),t._v(" "),s("h3",{attrs:{id:"キーキャップ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#キーキャップ"}},[t._v("#")]),t._v(" キーキャップ")]),t._v(" "),s("p",[t._v("お好みでキーキャップをつけてください"),s("br"),t._v(" "),s("img",{attrs:{src:a(725),alt:""}}),s("br"),t._v(" "),s("img",{attrs:{src:a(726),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"オプション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#オプション"}},[t._v("#")]),t._v(" オプション")]),t._v(" "),s("h3",{attrs:{id:"oled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oled"}},[t._v("#")]),t._v(" OLED")]),t._v(" "),s("p",[t._v("キーボードによってはOLEDディスプレイに対応しているものもあります。"),s("br"),t._v("\nsandbox keyboardでも取り付けられるようになっているので、お好みで取り付けてみましょう。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(727),alt:""}})]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/oled.html"}},[t._v("→ OLEDはんだ付け")])],1),t._v(" "),s("h3",{attrs:{id:"分割キーボードとして使う"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分割キーボードとして使う"}},[t._v("#")]),t._v(" 分割キーボードとして使う")]),t._v(" "),s("p",[t._v("分割型キーボードの場合、TRRSケーブルで左右を接続することが多いです。"),s("br"),t._v("\nTRRSジャックの取り付けが必要な場合はこちらで練習してみましょう。"),s("br"),t._v("\nsandbox keyboard v2を2台用意すれば、分割キーボードとしても動作します。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/buildguides/sandboxv2/trrs.html"}},[t._v("→ TRRSジャックのはんだ付け")]),s("br"),t._v(" "),s("img",{attrs:{src:a(382),alt:""}})],1),t._v(" "),s("p",[t._v("分割キーボードとして動かすには2台のsandbox keyboardが必要です。"),s("br"),t._v("\n「MX互換スイッチ用」と「Choc v1用」で、TRRSジャックの向きを反対にしてあるので、2種類組み上げて繋げてもらえると嬉しいです。"),s("br"),t._v(" "),s("img",{attrs:{src:a(728),alt:""}})]),t._v(" "),s("p",[t._v("こちらでsandbox keyboardができることは全てです。"),s("br"),t._v("\n最初の頃より、はんだ付けのレベルが上がっていると思います。"),s("br"),t._v("\nぜひ、目当てのキーボードを完成させてください！")])])}),[],!1,null,null,null);r.default=e.exports},379:function(t,r,a){t.exports=a.p+"assets/img/th30.d310483e.jpeg"},380:function(t,r,a){t.exports=a.p+"assets/img/diode-smd.0d212a51.jpeg"},381:function(t,r,a){t.exports=a.p+"assets/img/promicro-20.d93f3824.jpeg"},382:function(t,r,a){t.exports=a.p+"assets/img/trrs-30.49b49b54.jpeg"},716:function(t,r,a){t.exports=a.p+"assets/img/overall.548c97b5.jpeg"},717:function(t,r,a){t.exports=a.p+"assets/img/keyboard-diode.f38cc31f.jpeg"},718:function(t,r,a){t.exports=a.p+"assets/img/keyboard-diode-2.19c7ebb5.jpeg"},719:function(t,r,a){t.exports=a.p+"assets/img/reset.21975b4e.jpeg"},720:function(t,r,a){t.exports=a.p+"assets/img/r1.b2b55bd4.jpeg"},721:function(t,r,a){t.exports=a.p+"assets/img/r2.3480052f.jpeg"},722:function(t,r,a){t.exports=a.p+"assets/img/r3.6da5eb97.jpeg"},723:function(t,r,a){t.exports=a.p+"assets/img/r4.98c7c4ce.jpeg"},724:function(t,r,a){t.exports=a.p+"assets/img/r5.ebae98d6.jpeg"},725:function(t,r,a){t.exports=a.p+"assets/img/keycaps-mx.d6146056.jpeg"},726:function(t,r,a){t.exports=a.p+"assets/img/keycaps-choc.32f977f3.jpeg"},727:function(t,r,a){t.exports=a.p+"assets/img/oled.ae1b1a3a.jpeg"},728:function(t,r,a){t.exports=a.p+"assets/img/split-10.5dea40ba.jpeg"}}]);