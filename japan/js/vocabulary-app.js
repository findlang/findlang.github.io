// 通用词汇学习应用
class VocabularyApp {
  constructor(vocabularyData, storageKey) {
    this.vocabularyData = vocabularyData;
    this.storageKey = storageKey;
    this.currentCategory = Object.keys(vocabularyData)[0];
    this.masteredWords = JSON.parse(localStorage.getItem(storageKey) || '[]');
    this.allWords = [];
    
    // 初始化所有词汇
    Object.values(vocabularyData).forEach(category => {
      this.allWords = this.allWords.concat(category);
    });
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.displayVocabulary(this.currentCategory);
    this.updateProgress();
    this.setupAnimations();
    this.startSakuraAnimation();
  }

  displayVocabulary(category) {
    const container = document.getElementById('vocabularyContainer');
    const words = this.vocabularyData[category];
    
    container.innerHTML = `
      <div class="vocabulary-grid">
        ${words.map((word, index) => {
          const wordId = `${category}-${index}`;
          const isMastered = this.masteredWords.includes(wordId);
          return `
            <div class="vocab-card ${isMastered ? 'mastered' : ''}" data-word-id="${wordId}">
              <div class="word-type">${word.type}</div>
              <div class="word-japanese">${word.japanese}</div>
              <div class="word-reading">${word.reading}</div>
              <div class="word-meaning">${word.meaning}</div>
              <div class="word-example">
                <div class="example-japanese">${word.example}</div>
                <div class="example-chinese">${word.exampleChinese}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // 添加点击事件
    document.querySelectorAll('.vocab-card').forEach(card => {
      card.addEventListener('click', () => {
        const wordId = card.dataset.wordId;
        this.toggleWordMastery(wordId);
        card.classList.toggle('mastered');
      });
    });
  }

  toggleWordMastery(wordId) {
    const index = this.masteredWords.indexOf(wordId);
    if (index > -1) {
      this.masteredWords.splice(index, 1);
    } else {
      this.masteredWords.push(wordId);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.masteredWords));
    this.updateProgress();
  }

  updateProgress() {
    const totalWords = this.allWords.length;
    const masteredCount = this.masteredWords.length;
    const percentage = (masteredCount / totalWords) * 100;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `已掌握 ${masteredCount}/${totalWords} 个词汇`;
  }

  searchVocabulary(query) {
    if (!query) {
      this.displayVocabulary(this.currentCategory);
      return;
    }

    const filteredWords = this.allWords.filter(word => 
      word.japanese.includes(query) || 
      word.reading.includes(query) || 
      word.meaning.includes(query)
    );

    const container = document.getElementById('vocabularyContainer');
    container.innerHTML = `
      <div class="vocabulary-grid">
        ${filteredWords.map((word, index) => {
          const wordId = `search-${index}`;
          return `
            <div class="vocab-card">
              <div class="word-type">${word.type}</div>
              <div class="word-japanese">${word.japanese}</div>
              <div class="word-reading">${word.reading}</div>
              <div class="word-meaning">${word.meaning}</div>
              <div class="word-example">
                <div class="example-japanese">${word.example}</div>
                <div class="example-chinese">${word.exampleChinese}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  setupEventListeners() {
    // 分类标签点击事件
    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        this.currentCategory = button.dataset.category;
        this.displayVocabulary(this.currentCategory);
      });
    });

    // 搜索框事件
    document.getElementById('searchBox').addEventListener('input', (e) => {
      this.searchVocabulary(e.target.value);
    });
  }

  setupAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  startSakuraAnimation() {
    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.className = 'sakura';
      sakura.innerHTML = '🌸';
      sakura.style.left = Math.random() * 100 + '%';
      sakura.style.animationDuration = (Math.random() * 8 + 12) + 's';
      document.body.appendChild(sakura);
      setTimeout(() => sakura.remove(), 20000);
    };

    setInterval(createSakura, 5000);
  }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
  // 根据页面URL确定使用哪个词汇数据和存储键
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('n2-vocabulary')) {
    new VocabularyApp(n2Vocabulary, 'n2-vocabulary-progress');
  } else if (currentPage.includes('n1-vocabulary')) {
    new VocabularyApp(n1Vocabulary, 'n1-vocabulary-progress');
  } else if (currentPage.includes('n3-vocabulary')) {
    new VocabularyApp(n3Vocabulary, 'n3-vocabulary-progress');
  }
});
