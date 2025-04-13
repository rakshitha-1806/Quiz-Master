const AppState = {
    HOME: 'home',
    QUIZ: 'quiz',
    RESULTS: 'results'
  };
  
  // Constants
  const QUESTIONS_PER_QUIZ = 10;
  const QUESTION_TIME = 60; // seconds
  
  // Main app class
  class QuizApp {
    constructor() {
      // State
      this.currentState = AppState.HOME;
      this.selectedCategory = null;
      this.quizQuestions = [];
      this.currentQuestionIndex = 0;
      this.quizResults = [];
      this.timeLeft = QUESTION_TIME;
      this.timer = null;
      this.selectedAnswer = null;
      this.showResult = false;
      
      // DOM elements
      this.pages = {
        home: document.getElementById('homePage'),
        quiz: document.getElementById('quizPage'),
        results: document.getElementById('resultsPage')
      };
      
      // Initialize
      this.initializeApp();
    }
    
    initializeApp() {
      this.renderCategories();
      this.attachEventListeners();
      this.showPage(AppState.HOME);
    }
    
    showPage(state) {
      this.currentState = state;
      
      // Hide all pages
      Object.values(this.pages).forEach(page => {
        page.classList.remove('active');
      });
      
      // Show selected page
      switch (state) {
        case AppState.HOME:
          this.pages.home.classList.add('active');
          break;
        case AppState.QUIZ:
          this.pages.quiz.classList.add('active');
          break;
        case AppState.RESULTS:
          this.pages.results.classList.add('active');
          break;
      }
    }
    
    renderCategories() {
      const categoriesGrid = document.querySelector('.categories-grid');
      
      quizCategories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.className = 'category-btn';
        categoryButton.dataset.categoryId = category.id;
        categoryButton.style.background = category.color;
        
        categoryButton.innerHTML = `
          <span class="icon">${category.icon}</span>
          <span class="name">${category.name}</span>
        `;
        
        categoriesGrid.appendChild(categoryButton);
      });
    }
    
    attachEventListeners() {
      // Category selection
      const categoryButtons = document.querySelectorAll('.category-btn');
      categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove selection from all buttons
          categoryButtons.forEach(btn => btn.classList.remove('selected'));
          
          // Add selection to clicked button
          button.classList.add('selected');
          
          // Update selected category
          const categoryId = button.dataset.categoryId;
          this.selectedCategory = quizCategories.find(cat => cat.id === categoryId);
          
          // Enable start button
          const startButton = document.getElementById('startButton');
          startButton.disabled = false;
          startButton.textContent = `Start ${this.selectedCategory.name} Quiz`;
        });
      });
      
      // Start quiz
      document.getElementById('startButton').addEventListener('click', () => {
        if (this.selectedCategory) {
          this.startQuiz();
        }
      });
      
      // Restart button
      document.getElementById('restartButton').addEventListener('click', () => {
        this.resetQuiz();
        this.showPage(AppState.HOME);
      });
    }
    
    startQuiz() {
      this.resetQuiz();
      this.quizQuestions = this.getRandomQuestions(this.selectedCategory, QUESTIONS_PER_QUIZ);
      this.showPage(AppState.QUIZ);
      this.renderQuestion();
    }
    
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.quizResults = [];
      this.timeLeft = QUESTION_TIME;
      this.selectedAnswer = null;
      this.showResult = false;
      
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
    
    getRandomQuestions(category, count) {
      // Create a copy of the questions array
      const questions = [...category.questions];
      
      // Shuffle the array
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      
      // Return the first 'count' questions
      return questions.slice(0, count);
    }
    
    renderQuestion() {
      const currentQuestion = this.quizQuestions[this.currentQuestionIndex];
      
      // Update question progress
      document.getElementById('categoryName').textContent = `${this.selectedCategory.name} Quiz`;
      document.getElementById('questionProgress').textContent = `Question ${this.currentQuestionIndex + 1}/${this.quizQuestions.length}`;
      document.getElementById('questionCounter').textContent = `${this.currentQuestionIndex + 1} of ${this.quizQuestions.length}`;
      
      // Update question text
      document.getElementById('questionText').textContent = currentQuestion.question;
      
      // Render options
      const optionsContainer = document.getElementById('optionsContainer');
      optionsContainer.innerHTML = '';
      
      currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.dataset.option = option;
        
        optionButton.innerHTML = `
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span>${option}</span>
        `;
        
        optionButton.addEventListener('click', () => {
          if (!this.showResult) {
            this.handleAnswerSelection(option);
          }
        });
        
        optionsContainer.appendChild(optionButton);
      });
      
      // Reset timer
      this.timeLeft = QUESTION_TIME;
      this.updateTimer();
      
      // Start timer
      if (this.timer) {
        clearInterval(this.timer);
      }
      
      this.timer = setInterval(() => {
        this.timeLeft--;
        this.updateTimer();
        
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.handleTimeUp();
        }
      }, 1000);
    }
    
    updateTimer() {
      // Update timer text
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      document.getElementById('timeLeft').textContent = `Time left: ${formattedTime}`;
      
      // Update timer progress bar
      const timePercentage = (this.timeLeft / QUESTION_TIME) * 100;
      const timerProgress = document.getElementById('timerProgress');
      timerProgress.style.width = `${timePercentage}%`;
      
      // Change color based on time remaining
      if (timePercentage > 50) {
        timerProgress.style.backgroundColor = 'var(--accent)';
      } else if (timePercentage > 20) {
        timerProgress.style.backgroundColor = 'orange';
      } else {
        timerProgress.style.backgroundColor = 'red';
      }
    }
    
    handleAnswerSelection(selectedOption) {
      this.selectedAnswer = selectedOption;
      this.showResult = true;
      
      // Stop the timer
      clearInterval(this.timer);
      
      const currentQuestion = this.quizQuestions[this.currentQuestionIndex];
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      
      // Record result
      this.quizResults.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer: selectedOption,
        isCorrect: isCorrect
      });
      
      // Visual feedback for correct/incorrect answer
      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach(button => {
        const option = button.dataset.option;
        
        if (option === currentQuestion.correctAnswer) {
          button.classList.add('correct');
        } else if (option === selectedOption && !isCorrect) {
          button.classList.add('incorrect');
        }
        
        if (option === selectedOption) {
          button.classList.add('selected');
        }
      });
      
      // Move to next question after delay
      setTimeout(() => {
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
          this.currentQuestionIndex++;
          this.selectedAnswer = null;
          this.showResult = false;
          this.renderQuestion();
        } else {
          this.completeQuiz();
        }
      }, 1500);
    }
    
    handleTimeUp() {
      this.showResult = true;
      
      const currentQuestion = this.quizQuestions[this.currentQuestionIndex];
      
      // Record result
      this.quizResults.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer: null,
        isCorrect: false
      });
      
      // Show correct answer
      const optionButtons = document.querySelectorAll('.option-btn');
      optionButtons.forEach(button => {
        const option = button.dataset.option;
        
        if (option === currentQuestion.correctAnswer) {
          button.classList.add('correct');
        }
      });
      
      // Move to next question after delay
      setTimeout(() => {
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
          this.currentQuestionIndex++;
          this.selectedAnswer = null;
          this.showResult = false;
          this.renderQuestion();
        } else {
          this.completeQuiz();
        }
      }, 1500);
    }
    
    completeQuiz() {
      this.renderResults();
      this.showPage(AppState.RESULTS);
    }
    
    renderResults() {
      const correctAnswers = this.quizResults.filter(result => result.isCorrect).length;
      const totalQuestions = this.quizResults.length;
      const score = Math.round((correctAnswers / totalQuestions) * 100);
      
      // Update category name
      document.getElementById('resultsCategoryName').textContent = this.selectedCategory.name;
      
      // Update header style
      document.getElementById('resultsHeader').style.background = this.selectedCategory.color;
      
      // Update score circle
      const scoreCircle = document.getElementById('scoreCircle');
      const dashOffset = 251.2 - (251.2 * score) / 100;
      scoreCircle.style.strokeDashoffset = dashOffset;
      
      document.getElementById('scoreText').textContent = `${score}%`;
      
      // Update feedback text
      let feedback = "";
      if (score >= 90) {
        feedback = "Outstanding! You're a master of knowledge!";
      } else if (score >= 70) {
        feedback = "Great job! Your knowledge is impressive!";
      } else if (score >= 50) {
        feedback = "Good effort! Keep learning!";
      } else {
        feedback = "Keep practicing! You'll get better!";
      }
      
      document.getElementById('feedbackText').textContent = feedback;
      document.getElementById('scoreDetails').textContent = `You got ${correctAnswers} out of ${totalQuestions} questions right`;
      
      // Render question summary
      const summaryContainer = document.getElementById('questionsSummary');
      summaryContainer.innerHTML = '';
      
      this.quizResults.forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `question-result ${result.isCorrect ? 'correct' : 'incorrect'}`;
        
        let userAnswerHtml = '';
        if (result.userAnswer) {
          userAnswerHtml = `
            <p>
              <span class="answer-label">Your answer:</span>
              <span class="user-answer ${result.isCorrect ? 'correct' : ''}">${result.userAnswer}</span>
            </p>
          `;
        } else {
          userAnswerHtml = `
            <p>
              <span class="answer-label">Your answer:</span>
              <span class="user-answer">Time's up</span>
            </p>
          `;
        }
        
        resultDiv.innerHTML = `
          <p class="font-medium">
            ${index + 1}. ${result.question}
          </p>
          <p>
            <span class="answer-label">Correct answer:</span>
            <span class="correct-answer">${result.correctAnswer}</span>
          </p>
          ${userAnswerHtml}
        `;
        
        summaryContainer.appendChild(resultDiv);
      });
    }
  }
  
  // Initialize app when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const app = new QuizApp();
  });
  