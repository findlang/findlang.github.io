// JLPT N1词汇数据
const n1Vocabulary = {
  literature: [
    { japanese: '文学', reading: 'ぶんがく', meaning: '文学', type: '名词', example: '日本文学を専攻している。', exampleChinese: '专攻日本文学。' },
    { japanese: '詩', reading: 'し', meaning: '诗', type: '名词', example: '美しい詩を朗読する。', exampleChinese: '朗诵美丽的诗。' },
    { japanese: '小説', reading: 'しょうせつ', meaning: '小说', type: '名词', example: '長編小説を読み終えた。', exampleChinese: '读完了长篇小说。' },
    { japanese: '散文', reading: 'さんぶん', meaning: '散文', type: '名词', example: '散文の美しさに感動した。', exampleChinese: '被散文的美丽所感动。' },
    { japanese: '韻律', reading: 'いんりつ', meaning: '韵律', type: '名词', example: '詩の韻律が心地よい。', exampleChinese: '诗的韵律很舒服。' },
    { japanese: '比喩', reading: 'ひゆ', meaning: '比喻', type: '名词', example: '巧妙な比喩を使って表現する。', exampleChinese: '使用巧妙的比喻来表达。' },
    { japanese: '象徴', reading: 'しょうちょう', meaning: '象征', type: '名词', example: '桜は日本の象徴だ。', exampleChinese: '樱花是日本的象征。' },
    { japanese: '叙述', reading: 'じょじゅつ', meaning: '叙述', type: '名词/动词', example: '事件を詳細に叙述する。', exampleChinese: '详细叙述事件。' },
    { japanese: '描写', reading: 'びょうしゃ', meaning: '描写', type: '名词/动词', example: '風景を美しく描写している。', exampleChinese: '美丽地描写了风景。' },
    { japanese: '表現', reading: 'ひょうげん', meaning: '表现', type: '名词/动词', example: '感情を豊かに表現する。', exampleChinese: '丰富地表现感情。' }
  ],
  philosophy: [
    { japanese: '哲学', reading: 'てつがく', meaning: '哲学', type: '名词', example: '西洋哲学を学んでいる。', exampleChinese: '学习西方哲学。' },
    { japanese: '思想', reading: 'しそう', meaning: '思想', type: '名词', example: '彼の思想に共感する。', exampleChinese: '对他的思想产生共鸣。' },
    { japanese: '観念', reading: 'かんねん', meaning: '观念', type: '名词', example: '古い観念を捨てる。', exampleChinese: '抛弃旧观念。' },
    { japanese: '理念', reading: 'りねん', meaning: '理念', type: '名词', example: '教育の理念を追求する。', exampleChinese: '追求教育理念。' },
    { japanese: '存在', reading: 'そんざい', meaning: '存在', type: '名词/动词', example: '人間の存在意義を考える。', exampleChinese: '思考人类存在的意义。' },
    { japanese: '意識', reading: 'いしき', meaning: '意识', type: '名词/动词', example: '問題を意識している。', exampleChinese: '意识到问题。' },
    { japanese: '認識', reading: 'にんしき', meaning: '认识', type: '名词/动词', example: '現実を正しく認識する。', exampleChinese: '正确认识现实。' },
    { japanese: '真理', reading: 'しんり', meaning: '真理', type: '名词', example: '真理を探求する。', exampleChinese: '探求真理。' },
    { japanese: '論理', reading: 'ろんり', meaning: '逻辑', type: '名词', example: '論理的に考える。', exampleChinese: '逻辑地思考。' },
    { japanese: '倫理', reading: 'りんり', meaning: '伦理', type: '名词', example: '医療倫理について議論する。', exampleChinese: '讨论医疗伦理。' }
  ],
  academic: [
    { japanese: '学術', reading: 'がくじゅつ', meaning: '学术', type: '名词', example: '学術的な研究を行う。', exampleChinese: '进行学术研究。' },
    { japanese: '専門', reading: 'せんもん', meaning: '专门', type: '名词', example: '専門分野で活躍する。', exampleChinese: '在专门领域活跃。' },
    { japanese: '権威', reading: 'けんい', meaning: '权威', type: '名词', example: 'この分野の権威である。', exampleChinese: '是这个领域的权威。' },
    { japanese: '仮定', reading: 'かてい', meaning: '假定', type: '名词/动词', example: '条件を仮定して計算する。', exampleChinese: '假定条件进行计算。' },
    { japanese: '推論', reading: 'すいろん', meaning: '推论', type: '名词/动词', example: 'データから結論を推論する。', exampleChinese: '从数据推论结论。' },
    { japanese: '考察', reading: 'こうさつ', meaning: '考察', type: '名词/动词', example: '結果について考察する。', exampleChinese: '对结果进行考察。' },
    { japanese: '検討', reading: 'けんとう', meaning: '检讨', type: '名词/动词', example: '提案を慎重に検討する。', exampleChinese: '慎重检讨提案。' },
    { japanese: '評価', reading: 'ひょうか', meaning: '评价', type: '名词/动词', example: '成果を客観的に評価する。', exampleChinese: '客观评价成果。' },
    { japanese: '批判', reading: 'ひはん', meaning: '批判', type: '名词/动词', example: '建設的な批判を受ける。', exampleChinese: '接受建设性的批判。' },
    { japanese: '議論', reading: 'ぎろん', meaning: '议论', type: '名词/动词', example: '活発な議論が交わされた。', exampleChinese: '进行了活跃的议论。' }
  ],
  politics: [
    { japanese: '政治', reading: 'せいじ', meaning: '政治', type: '名词', example: '国際政治を専攻している。', exampleChinese: '专攻国际政治。' },
    { japanese: '外交', reading: 'がいこう', meaning: '外交', type: '名词', example: '外交関係を改善する。', exampleChinese: '改善外交关系。' },
    { japanese: '条約', reading: 'じょうやく', meaning: '条约', type: '名词', example: '平和条約を締結する。', exampleChinese: '缔结和平条约。' },
    { japanese: '協定', reading: 'きょうてい', meaning: '协定', type: '名词', example: '貿易協定を結ぶ。', exampleChinese: '签订贸易协定。' },
    { japanese: '議会', reading: 'ぎかい', meaning: '议会', type: '名词', example: '議会で法案を審議する。', exampleChinese: '在议会审议法案。' },
    { japanese: '選挙', reading: 'せんきょ', meaning: '选举', type: '名词', example: '総選挙が行われる。', exampleChinese: '举行大选。' },
    { japanese: '民主', reading: 'みんしゅ', meaning: '民主', type: '名词', example: '民主的な社会を目指す。', exampleChinese: '目标是民主社会。' },
    { japanese: '独裁', reading: 'どくさい', meaning: '独裁', type: '名词', example: '独裁政権に反対する。', exampleChinese: '反对独裁政权。' },
    { japanese: '革命', reading: 'かくめい', meaning: '革命', type: '名词', example: '産業革命が社会を変えた。', exampleChinese: '产业革命改变了社会。' },
    { japanese: '改革', reading: 'かいかく', meaning: '改革', type: '名词/动词', example: '教育制度を改革する。', exampleChinese: '改革教育制度。' }
  ],
  economics: [
    { japanese: '経済', reading: 'けいざい', meaning: '经济', type: '名词', example: '世界経済が不安定だ。', exampleChinese: '世界经济不稳定。' },
    { japanese: '金融', reading: 'きんゆう', meaning: '金融', type: '名词', example: '金融市場が混乱している。', exampleChinese: '金融市场混乱。' },
    { japanese: '投機', reading: 'とうき', meaning: '投机', type: '名词/动词', example: '投機的な取引は危険だ。', exampleChinese: '投机交易很危险。' },
    { japanese: '資本', reading: 'しほん', meaning: '资本', type: '名词', example: '資本を効率的に運用する。', exampleChinese: '有效运用资本。' },
    { japanese: '株式', reading: 'かぶしき', meaning: '股票', type: '名词', example: '株式市場が下落した。', exampleChinese: '股票市场下跌了。' },
    { japanese: '債券', reading: 'さいけん', meaning: '债券', type: '名词', example: '国債を購入する。', exampleChinese: '购买国债。' },
    { japanese: '通貨', reading: 'つうか', meaning: '货币', type: '名词', example: '通貨の価値が変動する。', exampleChinese: '货币价值变动。' },
    { japanese: 'インフレ', reading: 'インフレ', meaning: '通胀', type: '名词', example: 'インフレ率が上昇している。', exampleChinese: '通胀率在上升。' },
    { japanese: 'デフレ', reading: 'デフレ', meaning: '通缩', type: '名词', example: 'デフレ対策が必要だ。', exampleChinese: '需要通缩对策。' },
    { japanese: '景気', reading: 'けいき', meaning: '景气', type: '名词', example: '景気が回復している。', exampleChinese: '景气在恢复。' }
  ],
  science: [
    { japanese: '科学', reading: 'かがく', meaning: '科学', type: '名词', example: '科学技術の発展が著しい。', exampleChinese: '科学技术发展显著。' },
    { japanese: '物理', reading: 'ぶつり', meaning: '物理', type: '名词', example: '物理学の法則を学ぶ。', exampleChinese: '学习物理学定律。' },
    { japanese: '化学', reading: 'かがく', meaning: '化学', type: '名词', example: '化学反応を観察する。', exampleChinese: '观察化学反应。' },
    { japanese: '生物', reading: 'せいぶつ', meaning: '生物', type: '名词', example: '生物学を専攻している。', exampleChinese: '专攻生物学。' },
    { japanese: '遺伝', reading: 'いでん', meaning: '遗传', type: '名词/动词', example: '遺伝子の研究が進んでいる。', exampleChinese: '基因研究在进展。' },
    { japanese: '進化', reading: 'しんか', meaning: '进化', type: '名词/动词', example: '生物の進化を研究する。', exampleChinese: '研究生物进化。' },
    { japanese: '実験', reading: 'じっけん', meaning: '实验', type: '名词/动词', example: '新しい実験を行う。', exampleChinese: '进行新实验。' },
    { japanese: '観測', reading: 'かんそく', meaning: '观测', type: '名词/动词', example: '天体を観測する。', exampleChinese: '观测天体。' },
    { japanese: '仮説', reading: 'かせつ', meaning: '假说', type: '名词', example: '新しい仮説を立てる。', exampleChinese: '建立新假说。' },
    { japanese: '証明', reading: 'しょうめい', meaning: '证明', type: '名词/动词', example: '定理を数学的に証明する。', exampleChinese: '数学证明定理。' }
  ],
  psychology: [
    { japanese: '心理', reading: 'しんり', meaning: '心理', type: '名词', example: '人間の心理を研究する。', exampleChinese: '研究人类心理。' },
    { japanese: '精神', reading: 'せいしん', meaning: '精神', type: '名词', example: '精神的な健康が大切だ。', exampleChinese: '精神健康很重要。' },
    { japanese: '感情', reading: 'かんじょう', meaning: '感情', type: '名词', example: '感情をコントロールする。', exampleChinese: '控制感情。' },
    { japanese: '欲望', reading: 'よくぼう', meaning: '欲望', type: '名词', example: '物質的な欲望を抑える。', exampleChinese: '抑制物质欲望。' },
    { japanese: '本能', reading: 'ほんのう', meaning: '本能', type: '名词', example: '動物の本能的な行動。', exampleChinese: '动物的本能行动。' },
    { japanese: '無意識', reading: 'むいしき', meaning: '无意识', type: '名词', example: '無意識の行動を分析する。', exampleChinese: '分析无意识行为。' },
    { japanese: '潜在', reading: 'せんざい', meaning: '潜在', type: '名词', example: '潜在的な能力を引き出す。', exampleChinese: '发掘潜在能力。' },
    { japanese: '認知', reading: 'にんち', meaning: '认知', type: '名词/动词', example: '認知能力を向上させる。', exampleChinese: '提高认知能力。' },
    { japanese: '記憶', reading: 'きおく', meaning: '记忆', type: '名词/动词', example: '記憶のメカニズムを解明する。', exampleChinese: '解明记忆机制。' },
    { japanese: '学習', reading: 'がくしゅう', meaning: '学习', type: '名词/动词', example: '効果的な学習方法を見つける。', exampleChinese: '找到有效的学习方法。' }
  ],
  formal: [
    { japanese: '恐縮至極', reading: 'きょうしゅくしごく', meaning: '非常惶恐', type: '形容动词', example: '恐縮至極でございます。', exampleChinese: '非常惶恐。' },
    { japanese: 'お忙しい折', reading: 'おいそがしいおり', meaning: '百忙之中', type: '名词', example: 'お忙しい折にお時間をいただき。', exampleChinese: '百忙之中抽出时间。' },
    { japanese: 'ご足労', reading: 'ごそくろう', meaning: '劳驾', type: '名词', example: 'わざわざご足労いただき。', exampleChinese: '特意劳驾。' },
    { japanese: 'ご査収', reading: 'ごさしゅう', meaning: '查收', type: '名词', example: '資料をご査収ください。', exampleChinese: '请查收资料。' },
    { japanese: 'ご高配', reading: 'ごこうはい', meaning: '关照', type: '名词', example: '今後ともご高配のほど。', exampleChinese: '今后请多关照。' },
    { japanese: 'ご尽力', reading: 'ごじんりょく', meaning: '尽力', type: '名词', example: 'ご尽力いただきありがとうございます。', exampleChinese: '感谢您的尽力。' },
    { japanese: 'ご配慮', reading: 'ごはいりょ', meaning: '关怀', type: '名词', example: 'ご配慮いただき感謝いたします。', exampleChinese: '感谢您的关怀。' },
    { japanese: 'お心遣い', reading: 'おこころづかい', meaning: '关心', type: '名词', example: 'お心遣いありがとうございます。', exampleChinese: '谢谢您的关心。' },
    { japanese: 'ご愛顧', reading: 'ごあいこ', meaning: '关爱', type: '名词', example: '今後ともご愛顧ください。', exampleChinese: '今后请多关爱。' },
    { japanese: 'ご厚情', reading: 'ごこうじょう', meaning: '厚情', type: '名词', example: 'ご厚情を賜り恐縮です。', exampleChinese: '承蒙厚情，不胜感激。' }
  ]
};
