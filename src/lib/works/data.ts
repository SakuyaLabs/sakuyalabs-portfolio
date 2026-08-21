export type WorkCaseStudy = {
  slug: string;
  number: string;
  brandName: string;
  industryTag: string;
  axisLabel: string;
  persona: string;
  cvGoal: string;
  challenge: string;
  designIntent: string;
  implementation: string;
  techPoints: string[];
  techTags: string[];
  liveDemoUrl: string;
};

/**
 * 11案件のCase Studyデータ（企画書3章「各Works詳細：架空クライアントの課題→設計意図→実装
 * の3段解説＋実サイトへのリンク」）。CMS想定：型 + 非同期getterのスキーマパターン
 * （①〜⑪と同じ方針）。出典は各案件のdocs/planning.mdおよびsakuyalabs_portfolio_plan.md。
 */
const WORKS: WorkCaseStudy[] = [
  {
    slug: "nagi",
    number: "01",
    brandName: "Hair Atelier 凪 -NAGI-",
    industryTag: "美容院",
    axisLabel: "ブランド世界観の翻訳力 + 予約UX",
    persona: "32歳女性・美容意識高め。深夜でもスマホで予約を完結させたい、隠れ家サロン志向の客層。",
    cvGoal: "予約完了（リアルタイム予約システム）",
    challenge:
      "「予約が取りづらい隠れ家」であることに価値を感じる客層に対し、深夜でもスマホで完結する予約体験と、静謐な世界観を両立させる必要があった。",
    designIntent:
      "フルスクリーンビジュアルの視差スクロールと、一行ずつのステートメントフェードインで「間（ま）」を演出。ダークトーン基調に和紙のようなテクスチャを最小限にあしらった。",
    implementation:
      "モックAPIが空き枠を返すダミーバックエンドを用意し、メニュー選択→日時選択→情報入力の3ステップ予約UIを完全実装。Framer Motionで緩急のあるイージングを設計した。",
    techPoints: ["リアルタイム予約システム（モックAPI）", "視差スクロール演出", "ダークトーン×和紙テクスチャ"],
    techTags: ["予約システム", "アニメーション"],
    liveDemoUrl: "https://nagi.sakuyalabs.com",
  },
  {
    slug: "marumi",
    number: "02",
    brandName: "熟成肉ビストロ MARUMI",
    industryTag: "飲食店",
    axisLabel: "情報設計・導線集客",
    persona: "40代。記念日や接待で使える店を探しており、雰囲気・予算感・予約の取りやすさを最短で確認したい。",
    cvGoal: "電話予約・Web予約への遷移",
    challenge:
      "「雰囲気」「予算感」「予約の取りやすさ」を最短で確認したい層に対し、迷わせない情報設計と利用シーン別の導線分岐が必要だった。",
    designIntent:
      "料理写真のインパクトと営業時間・最寄駅などの即断情報をファーストビューに配置。記念日・接待・宴会という利用シーン別にコース紹介の導線を分岐させた。",
    implementation:
      "画面下部固定バーで「予約する」を常時露出。地域名＋接待等の検索流入を意識した見出し階層と、LocalBusiness／Menuの構造化データでローカルSEOを実装した。",
    techPoints: ["利用シーン別の導線分岐", "画面下部固定CTA", "構造化データ（LocalBusiness／Menu）"],
    techTags: ["SEO"],
    liveDemoUrl: "https://marumi.sakuyalabs.com",
  },
  {
    slug: "forge",
    number: "03",
    brandName: "パーソナルジム FORGE",
    industryTag: "ジム",
    axisLabel: "LPライティング × CVR設計",
    persona: "30代男性。過去にダイエットで挫折した経験があり、「本当に変われるのか」への懐疑を持っている。",
    cvGoal: "無料体験申込フォームの送信",
    challenge:
      "「本当に変われるのか」という懐疑を持つ層に対し、離脱させない縦一本道のLP設計で無料体験申込までを完結させる必要があった。",
    designIntent:
      "悩み共感チェックリスト→他ジムとの比較表→トレーナー紹介→実績カウントアップという順で、信頼構築を段階的に積み上げる構成にした。",
    implementation:
      "各セクションにCTAを反復配置。数字カウントアップはIntersection Observer＋Framer Motionでスクロール連動させ、フォームは名前・電話・希望日時のみの最小フィールドで設計した。",
    techPoints: ["縦一本道のLP構成", "スクロール連動カウントアップ", "最小フィールドのフォーム設計"],
    techTags: ["アニメーション"],
    liveDemoUrl: "https://forge.sakuyalabs.com",
  },
  {
    slug: "haru-law",
    number: "04",
    brandName: "はる法律事務所",
    industryTag: "士業",
    axisLabel: "信頼構築・BtoC向けSEO",
    persona: "50代。初めて弁護士に相談することへの心理的ハードルが高く、「この人になら話せそう」という安心感を最優先で探している。",
    cvGoal: "相談予約（電話／フォーム／LINE）",
    challenge:
      "初めての相談への心理的ハードルが高い層に対し、敷居を下げるコピーと、検索意図に応える分野別ページの両立が必要だった。",
    designIntent:
      "柔らかいビジュアルと「まずは相談だけでも」というコピーで敷居を下げつつ、相談分野別（相続／離婚／債務整理等）を独立したSEOページとして設計した。",
    implementation:
      "分野別ページを全てSSGで静的生成し、パンくず・構造化データ（LegalService, FAQPage）を実装。分野ページ同士の内部リンクでトピッククラスターを構築し、Core Web Vitalsを厳格に詰めた。",
    techPoints: ["分野別SSGページ", "構造化データ（LegalService／FAQPage）", "トピッククラスター内部リンク設計"],
    techTags: ["SEO"],
    liveDemoUrl: "https://haru-law.sakuyalabs.com",
  },
  {
    slug: "mirai",
    number: "05",
    brandName: "株式会社ミライ工務店",
    industryTag: "小規模法人",
    axisLabel: "コーポレートの型を崩さない安定感",
    persona: "発注検討者（施主）と、採用検討者（協力会社・求職者）の2軸を1サイトで満たす必要がある。",
    cvGoal: "お問い合わせフォームの送信",
    challenge:
      "派手な演出よりも「奇をてらわない安定感」そのものが評価軸になる案件で、情報の整理・可読性・更新運用のしやすさを優先する判断が必要だった。",
    designIntent:
      "新築・リフォーム・リノベの3本柱を整理し、施工事例はカテゴリフィルタ付きの一覧で提示。全案件の中であえて最も抑えたトーンに統一した。",
    implementation:
      "microCMS等を想定したブログ・事例のスキーマ設計を行い、CMS運用を前提としたお知らせ機能の構造を実装した。",
    techPoints: ["抑えたトーンでの情報設計", "CMSスキーマ想定設計", "カテゴリフィルタ付き事例一覧"],
    techTags: ["CMS想定設計"],
    liveDemoUrl: "https://mirai.sakuyalabs.com",
  },
  {
    slug: "nolan",
    number: "06",
    brandName: "Nolan（採用サイト）",
    industryTag: "採用サイト",
    axisLabel: "デザイン × UX × コピーの統合力",
    persona: "転職検討中のミドルエンジニア。カルチャーフィットと裁量権を重視し、求人票だけでは判断できない「働く実感」を求めている。",
    cvGoal: "エントリー（応募）フォームの送信",
    challenge:
      "求人票だけでは伝わらない「働く実感」を求める層に対し、抽象的なバリュー訴求ではなく固有名詞・エピソードで語る必要があった。",
    designIntent:
      "ミッション・ビジョンを一枚で伝えるヒーローに続き、デザイナー・エンジニア・PMなど複数名のMember's Voiceインタビューで職種の違いを可視化した。",
    implementation:
      "インタビューセクションはカード型UIで実装し、職種別の求人一覧にフィルタ機能を搭載。バリューの視覚化にスクロール連動アニメーションを用いた。",
    techPoints: ["カード型インタビューUI", "職種別求人フィルタ", "スクロール連動アニメーション"],
    techTags: ["アニメーション"],
    liveDemoUrl: "https://nolan.sakuyalabs.com",
  },
  {
    slug: "toki",
    number: "07",
    brandName: "TOKI（ライフスタイルブランド）",
    industryTag: "ECサイト",
    axisLabel: "決済・カートのフロー実装力",
    persona: "30〜40代、丁寧な暮らし志向。世界観に共感して「モノ」以上の体験として購入する層。",
    cvGoal: "商品購入（注文確定）",
    challenge:
      "「モノ」以上の体験として購入する層に対し、ブランドの世界観訴求とEC実務（カート・決済・在庫）の両立が必要だった。",
    designIntent:
      "ブランドの世界観訴求を軸にしながら、商品一覧はカテゴリ・価格帯・在庫状況でフィルタリングできる設計にした。",
    implementation:
      "Zustandでカート状態を管理しリロードしても保持されるようにし、Stripeテストモード相当の決済フローを再現。在庫切れ商品のUI制御・クーポン適用ロジックまで実装した。",
    techPoints: ["Zustandによるカート状態管理", "決済フローの再現", "在庫制御・クーポンロジック"],
    techTags: ["EC/決済"],
    liveDemoUrl: "https://toki.sakuyalabs.com",
  },
  {
    slug: "yukige",
    number: "08",
    brandName: "温泉旅館 雪解 -Yukige-",
    industryTag: "ホテル予約",
    axisLabel: "DB設計・予約/決済/管理画面の複雑系",
    persona: "記念日利用の40代夫婦。空室状況と料金をリアルタイムで比較検討したい。",
    cvGoal: "宿泊予約の確定",
    challenge:
      "空室状況と料金をリアルタイムで比較検討したい層に対し、フロントの予約UXとバックオフィスの在庫管理を一貫して設計する必要があった。",
    designIntent:
      "簡易空室検索をファーストビューに設置し、カレンダーで空室状況を可視化→客室選択→プラン選択→決済という一連のフローを設計した。",
    implementation:
      "Rooms／Reservations／Plans／Paymentsのテーブルを設計し、同一客室・同一日程の二重予約を防ぐ排他制御を実装。認証必須の管理画面ではRechartsによる売上ダッシュボードを実装した。",
    techPoints: ["DB設計（Rooms/Reservations/Plans/Payments）", "二重予約防止の排他制御", "認証付き管理画面＋ダッシュボード"],
    techTags: ["予約システム", "認証/管理画面"],
    liveDemoUrl: "https://yukige.sakuyalabs.com",
  },
  {
    slug: "prism",
    number: "09",
    brandName: "Prism AI（AIライティングSaaS）",
    industryTag: "AI Webサービス",
    axisLabel: "AI統合・SaaS型UI設計",
    persona: "中小企業のマーケター。コンテンツ制作の工数を削減したく、実際に触ってみないと信じないタイプ。",
    cvGoal: "無料サインアップ",
    challenge:
      "「AIを使ったサイトが作れる」ではなく「AIをプロダクトに統合する実装ができる」ことを証明する必要があった。",
    designIntent:
      "プロダクト価値を一言で伝えるヒーローに続き、複数機能をタブ・スクロール連動で切り替え表示する機能紹介を設計した。",
    implementation:
      "Route Handler経由でAIモデルを呼び出し、APIキーをブラウザに露出させない構成でインタラクティブデモを実装。Rate Limitと使用量制御、文字が流れるストリーミング表示を実装し、ダークモードを標準搭載した。",
    techPoints: ["サーバー経由のAPI呼び出し", "Rate Limit＋使用量制御", "ストリーミング表示＋ダークモード"],
    techTags: ["AI連携", "多言語"],
    liveDemoUrl: "https://prism.sakuyalabs.com",
  },
  {
    slug: "sumai",
    number: "10",
    brandName: "SUMAI Search（賃貸ポータル）",
    industryTag: "不動産検索",
    axisLabel: "大量データ・検索/地図UI",
    persona: "一人暮らし検討中の20代。条件を絞り込みながら地図上で物件を探したい。",
    cvGoal: "物件詳細ページからの問い合わせ",
    challenge: "単純なCRUDではなく、大量データを快適に見せるフロントエンド最適化力そのものが問われる案件だった。",
    designIntent: "地図とリストの2ペイン表示を採用し、地図をドラッグすると結果が絞り込まれるUXを設計した。",
    implementation:
      "数百件のダミー物件データを仮想スクロールで表示し、Leaflet＋OpenStreetMapでマーカークラスタリングを実装。検索条件はURLクエリパラメータと同期させ、共有可能な検索結果URLを実現した。",
    techPoints: ["仮想スクロール", "地図マーカークラスタリング", "URLクエリパラメータ同期"],
    techTags: ["地図/検索"],
    liveDemoUrl: "https://sumai.sakuyalabs.com",
  },
  {
    slug: "nova",
    number: "11",
    brandName: "NOVA Technologies",
    industryTag: "Tech Showcase",
    axisLabel: "フロントエンド技術力の最大瞬間風速",
    persona: "投資家・提携先候補、およびエンジニア志望の求職者。",
    cvGoal: "Contactページからの問い合わせ",
    challenge:
      "他10案件が「クライアントワークとしての実装力」の証明である一方、本案件は単独で「技術力の天井」を見せる必要があった。",
    designIntent:
      "Three.js／WebGLの3Dオブジェクトがスクロール・マウス操作で変形するヒーローを軸に、各技術要素自体を使ってセクションを演出する自己言及的な見せ方を設計した。",
    implementation:
      "React Three Fiber・GSAP ScrollTrigger・Canvas 2D API・next-intl多言語対応・デフォルトダークモードを実装。モバイルでは3D演出を軽量なCSS/SVG代替表現に切り替える設計まで作り込んだ。",
    techPoints: ["Three.js/WebGLヒーロー", "GSAP ScrollTriggerの文字単位演出", "多言語対応＋デフォルトダーク"],
    techTags: ["3D/WebGL", "アニメーション", "多言語"],
    liveDemoUrl: "https://nova.sakuyalabs.com",
  },
];

export async function getWorks(): Promise<WorkCaseStudy[]> {
  return WORKS;
}

export async function getWork(slug: string): Promise<WorkCaseStudy | undefined> {
  return WORKS.find((work) => work.slug === slug);
}

export async function getIndustryTags(): Promise<string[]> {
  return Array.from(new Set(WORKS.map((work) => work.industryTag)));
}

export async function getTechTags(): Promise<string[]> {
  return Array.from(new Set(WORKS.flatMap((work) => work.techTags)));
}
