// JLPT N2词汇数据
const n2Vocabulary = {
  academic: [
    { japanese: '研究', reading: 'けんきゅう', meaning: '研究', type: '名词/动词', example: '最新の研究によると、この方法が最も効果的だ。', exampleChinese: '根据最新研究，这种方法最有效。' },
    { japanese: '分析', reading: 'ぶんせき', meaning: '分析', type: '名词/动词', example: 'データを詳しく分析する必要がある。', exampleChinese: '需要详细分析数据。' },
    { japanese: '理論', reading: 'りろん', meaning: '理论', type: '名词', example: '彼の理論は実証されていない。', exampleChinese: '他的理论没有得到实证。' },
    { japanese: '仮説', reading: 'かせつ', meaning: '假说', type: '名词', example: '新しい仮説を立てて実験を行う。', exampleChinese: '建立新假说进行实验。' },
    { japanese: '検証', reading: 'けんしょう', meaning: '验证', type: '名词/动词', example: '実験結果を検証する。', exampleChinese: '验证实验结果。' },
    { japanese: '論文', reading: 'ろんぶん', meaning: '论文', type: '名词', example: '博士論文を書き上げた。', exampleChinese: '写完了博士论文。' },
    { japanese: '学説', reading: 'がくせつ', meaning: '学说', type: '名词', example: '新しい学説が発表された。', exampleChinese: '发表了新学说。' },
    { japanese: '実証', reading: 'じっしょう', meaning: '实证', type: '名词/动词', example: '理論を実証するためのデータが必要だ。', exampleChinese: '需要实证理论的数据。' },
    { japanese: '調査', reading: 'ちょうさ', meaning: '调查', type: '名词/动词', example: '市場調査を実施する。', exampleChinese: '实施市场调查。' },
    { japanese: '統計', reading: 'とうけい', meaning: '统计', type: '名词', example: '統計データを基に判断する。', exampleChinese: '基于统计数据进行判断。' }
  ],
  business: [
    { japanese: '経営', reading: 'けいえい', meaning: '经营', type: '名词/动词', example: '会社の経営が困難になっている。', exampleChinese: '公司经营变得困难。' },
    { japanese: '投資', reading: 'とうし', meaning: '投资', type: '名词/动词', example: '新技術に投資することを決めた。', exampleChinese: '决定投资新技术。' },
    { japanese: '利益', reading: 'りえき', meaning: '利益', type: '名词', example: '今期の利益は予想を上回った。', exampleChinese: '本期利益超过了预期。' },
    { japanese: '競争', reading: 'きょうそう', meaning: '竞争', type: '名词/动词', example: '激しい競争に勝ち抜く。', exampleChinese: '在激烈竞争中胜出。' },
    { japanese: '戦略', reading: 'せんりゃく', meaning: '战略', type: '名词', example: '新しいマーケティング戦略を考える。', exampleChinese: '考虑新的营销战略。' },
    { japanese: '効率', reading: 'こうりつ', meaning: '效率', type: '名词', example: '作業の効率を上げる方法を探す。', exampleChinese: '寻找提高工作效率的方法。' },
    { japanese: '生産性', reading: 'せいさんせい', meaning: '生产力', type: '名词', example: '生産性の向上が課題だ。', exampleChinese: '提高生产力是课题。' },
    { japanese: '革新', reading: 'かくしん', meaning: '革新', type: '名词/动词', example: '技術革新により業界が変わった。', exampleChinese: '技术革新改变了行业。' },
    { japanese: '企画', reading: 'きかく', meaning: '企划', type: '名词/动词', example: '新商品の企画を立案する。', exampleChinese: '制定新商品的企划。' },
    { japanese: '提案', reading: 'ていあん', meaning: '提案', type: '名词/动词', example: '改善案を提案した。', exampleChinese: '提出了改善方案。' }
  ],
  media: [
    { japanese: '報道', reading: 'ほうどう', meaning: '报道', type: '名词/动词', example: 'このニュースは世界中で報道された。', exampleChinese: '这个新闻在全世界都被报道了。' },
    { japanese: '放送', reading: 'ほうそう', meaning: '播放', type: '名词/动词', example: '特別番組を放送する。', exampleChinese: '播放特别节目。' },
    { japanese: '取材', reading: 'しゅざい', meaning: '采访', type: '名词/动词', example: '現地で取材を行う。', exampleChinese: '在当地进行采访。' },
    { japanese: '編集', reading: 'へんしゅう', meaning: '编辑', type: '名词/动词', example: '記事を編集して掲載する。', exampleChinese: '编辑文章后刊登。' },
    { japanese: '配信', reading: 'はいしん', meaning: '配送、发送', type: '名词/动词', example: 'インターネットで動画を配信する。', exampleChinese: '在网上发送视频。' },
    { japanese: '宣伝', reading: 'せんでん', meaning: '宣传', type: '名词/动词', example: '新商品を宣伝するキャンペーンを行う。', exampleChinese: '进行宣传新商品的活动。' },
    { japanese: '広告', reading: 'こうこく', meaning: '广告', type: '名词', example: 'テレビ広告の効果を測定する。', exampleChinese: '测定电视广告的效果。' },
    { japanese: '情報', reading: 'じょうほう', meaning: '信息', type: '名词', example: '正確な情報を提供する。', exampleChinese: '提供准确的信息。' },
    { japanese: '伝達', reading: 'でんたつ', meaning: '传达', type: '名词/动词', example: '重要な情報を迅速に伝達する。', exampleChinese: '迅速传达重要信息。' },
    { japanese: '影響', reading: 'えいきょう', meaning: '影响', type: '名词/动词', example: 'メディアの影響力は大きい。', exampleChinese: '媒体的影响力很大。' }
  ],
  technology: [
    { japanese: '技術', reading: 'ぎじゅつ', meaning: '技术', type: '名词', example: '最新技術を導入する。', exampleChinese: '引进最新技术。' },
    { japanese: '開発', reading: 'かいはつ', meaning: '开发', type: '名词/动词', example: '新しいソフトウェアを開発中だ。', exampleChinese: '正在开发新软件。' },
    { japanese: '革命', reading: 'かくめい', meaning: '革命', type: '名词', example: 'IT革命により社会が変わった。', exampleChinese: 'IT革命改变了社会。' },
    { japanese: '進歩', reading: 'しんぽ', meaning: '进步', type: '名词/动词', example: '科学技術の進歩は著しい。', exampleChinese: '科学技术的进步显著。' },
    { japanese: '発明', reading: 'はつめい', meaning: '发明', type: '名词/动词', example: '画期的な発明が生まれた。', exampleChinese: '诞生了划时代的发明。' },
    { japanese: '改良', reading: 'かいりょう', meaning: '改良', type: '名词/动词', example: '製品の性能を改良する。', exampleChinese: '改良产品性能。' },
    { japanese: '導入', reading: 'どうにゅう', meaning: '导入', type: '名词/动词', example: '新システムを導入する予定だ。', exampleChinese: '预定导入新系统。' },
    { japanese: '応用', reading: 'おうよう', meaning: '应用', type: '名词/动词', example: '理論を実際に応用する。', exampleChinese: '将理论实际应用。' },
    { japanese: '普及', reading: 'ふきゅう', meaning: '普及', type: '名词/动词', example: 'スマートフォンが急速に普及した。', exampleChinese: '智能手机迅速普及。' },
    { japanese: '効果', reading: 'こうか', meaning: '效果', type: '名词', example: '新薬の効果を検証する。', exampleChinese: '验证新药的效果。' }
  ],
  society: [
    { japanese: '課題', reading: 'かだい', meaning: '课题', type: '名词', example: '環境問題は重要な課題だ。', exampleChinese: '环境问题是重要课题。' },
    { japanese: '対策', reading: 'たいさく', meaning: '对策', type: '名词', example: '温暖化対策を講じる。', exampleChinese: '采取全球变暖对策。' },
    { japanese: '解決', reading: 'かいけつ', meaning: '解决', type: '名词/动词', example: '問題を根本的に解決する。', exampleChinese: '从根本上解决问题。' },
    { japanese: '改善', reading: 'かいぜん', meaning: '改善', type: '名词/动词', example: '労働環境の改善が必要だ。', exampleChinese: '需要改善劳动环境。' },
    { japanese: '制度', reading: 'せいど', meaning: '制度', type: '名词', example: '新しい制度を導入する。', exampleChinese: '导入新制度。' },
    { japanese: '政策', reading: 'せいさく', meaning: '政策', type: '名词', example: '政府の政策に反対する。', exampleChinese: '反对政府的政策。' },
    { japanese: '福祉', reading: 'ふくし', meaning: '福利', type: '名词', example: '社会福祉の充実を図る。', exampleChinese: '致力于充实社会福利。' },
    { japanese: '権利', reading: 'けんり', meaning: '权利', type: '名词', example: '基本的人権を守る。', exampleChinese: '保护基本人权。' },
    { japanese: '義務', reading: 'ぎむ', meaning: '义务', type: '名词', example: '国民の義務を果たす。', exampleChinese: '履行国民义务。' },
    { japanese: '責任', reading: 'せきにん', meaning: '责任', type: '名词', example: '社会的責任を負う。', exampleChinese: '承担社会责任。' }
  ],
  abstract: [
    { japanese: '概念', reading: 'がいねん', meaning: '概念', type: '名词', example: '抽象的な概念を理解する。', exampleChinese: '理解抽象概念。' },
    { japanese: '本質', reading: 'ほんしつ', meaning: '本质', type: '名词', example: '問題の本質を見極める。', exampleChinese: '看清问题的本质。' },
    { japanese: '価値', reading: 'かち', meaning: '价值', type: '名词', example: '文化的価値を認める。', exampleChinese: '认可文化价值。' },
    { japanese: '意義', reading: 'いぎ', meaning: '意义', type: '名词', example: 'この研究の意義は大きい。', exampleChinese: '这个研究的意义很大。' },
    { japanese: '目的', reading: 'もくてき', meaning: '目的', type: '名词', example: '明確な目的を持って行動する。', exampleChinese: '带着明确目的行动。' },
    { japanese: '手段', reading: 'しゅだん', meaning: '手段', type: '名词', example: '目的のためには手段を選ばない。', exampleChinese: '为了目的不择手段。' },
    { japanese: '原因', reading: 'げんいん', meaning: '原因', type: '名词', example: '事故の原因を調べる。', exampleChinese: '调查事故原因。' },
    { japanese: '結果', reading: 'けっか', meaning: '结果', type: '名词', example: '努力の結果が実った。', exampleChinese: '努力的结果得到了回报。' },
    { japanese: '過程', reading: 'かてい', meaning: '过程', type: '名词', example: '学習の過程で多くを学んだ。', exampleChinese: '在学习过程中学到了很多。' },
    { japanese: '傾向', reading: 'けいこう', meaning: '倾向', type: '名词', example: '最近の傾向を分析する。', exampleChinese: '分析最近的倾向。' }
  ],
  formal: [
    { japanese: '申し上げる', reading: 'もうしあげる', meaning: '申请、禀告（敬语）', type: '动词', example: 'お礼を申し上げます。', exampleChinese: '表示感谢。' },
    { japanese: 'いたします', reading: 'いたします', meaning: '做（敬语）', type: '动词', example: 'お手伝いいたします。', exampleChinese: '我来帮忙。' },
    { japanese: '拝見', reading: 'はいけん', meaning: '拜见、看（敬语）', type: '名词/动词', example: '資料を拝見させていただきます。', exampleChinese: '让我看一下资料。' },
    { japanese: '伺う', reading: 'うかがう', meaning: '拜访、询问（敬语）', type: '动词', example: '明日お伺いします。', exampleChinese: '明天拜访您。' },
    { japanese: '恐縮', reading: 'きょうしゅく', meaning: '惶恐、不好意思', type: '名词', example: 'お忙しい中恐縮です。', exampleChinese: '百忙中打扰真不好意思。' },
    { japanese: '承知', reading: 'しょうち', meaning: '知道、了解', type: '名词/动词', example: '承知いたしました。', exampleChinese: '我知道了。' },
    { japanese: '失礼', reading: 'しつれい', meaning: '失礼', type: '名词', example: '失礼いたします。', exampleChinese: '失礼了。' },
    { japanese: 'お疲れ様', reading: 'おつかれさま', meaning: '辛苦了', type: '惯用语', example: 'お疲れ様でした。', exampleChinese: '辛苦了。' },
    { japanese: 'ご苦労', reading: 'ごくろう', meaning: '辛苦', type: '名词', example: 'ご苦労をおかけしました。', exampleChinese: '给您添麻烦了。' },
    { japanese: '恐れ入ります', reading: 'おそれいります', meaning: '不好意思', type: '惯用语', example: '恐れ入りますが、お名前を教えてください。', exampleChinese: '不好意思，请告诉我您的姓名。' }
  ]
};
