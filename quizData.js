const quizCategories = [
  {
    id: "general",
    name: "General Knowledge",
    icon: "🧠",
    color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
      },
      {
        id: 3,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
      },
      {
        id: 4,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
      },
      {
        id: 5,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
      },
      {
        id: 6,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au"
      },
      {
        id: 7,
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        correctAnswer: "Mount Everest"
      },
      {
        id: 8,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Thailand", "South Korea", "Japan"],
        correctAnswer: "Japan"
      },
      {
        id: 9,
        question: "Who is the author of 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        correctAnswer: "J.K. Rowling"
      },
      {
        id: 10,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
      },
      {
        id: 11,
        question: "What is the national animal of Australia?",
        options: ["Koala", "Kangaroo", "Emu", "Platypus"],
        correctAnswer: "Kangaroo"
      },
      {
        id: 12,
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        correctAnswer: "Alexander Fleming"
      }
    ]
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    color: "linear-gradient(135deg, #2ecc71, #27ae60)",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["WA", "H2O", "HO2", "W"],
        correctAnswer: "H2O"
      },
      {
        id: 2,
        question: "Which of the following is not a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Mineral"],
        correctAnswer: "Mineral"
      },
      {
        id: 3,
        question: "What is the closest planet to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury"
      },
      {
        id: 4,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: "Diamond"
      },
      {
        id: 5,
        question: "What is the main component of the Sun?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen"
      },
      {
        id: 6,
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
      },
      {
        id: 7,
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Brain", "Skin"],
        correctAnswer: "Skin"
      },
      {
        id: 8,
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Ozone"],
        correctAnswer: "Oxygen"
      },
      {
        id: 9,
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Absorption"],
        correctAnswer: "Photosynthesis"
      },
      {
        id: 10,
        question: "What force keeps planets in orbit around the Sun?",
        options: ["Gravitational force", "Magnetic force", "Frictional force", "Electric force"],
        correctAnswer: "Gravitational force"
      },
      {
        id: 11,
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"],
        correctAnswer: "300,000 km/s"
      },
      {
        id: 12,
        question: "Which scientist proposed the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        correctAnswer: "Albert Einstein"
      }
    ]
  },
  {
    id: "history",
    name: "History",
    icon: "📜",
    color: "linear-gradient(135deg, #f39c12, #e67e22)",
    questions: [
      {
        id: 1,
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        correctAnswer: "1945"
      },
      {
        id: 2,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        correctAnswer: "George Washington"
      },
      {
        id: 3,
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswer: "1989"
      },
      {
        id: 4,
        question: "Which ancient civilization built the pyramids of Giza?",
        options: ["Romans", "Greeks", "Mayans", "Egyptians"],
        correctAnswer: "Egyptians"
      },
      {
        id: 5,
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Jane Goodall"],
        correctAnswer: "Marie Curie"
      },
      {
        id: 6,
        question: "Which event marked the beginning of World War I?",
        options: ["The invasion of Poland", "The assassination of Archduke Franz Ferdinand", "The bombing of Pearl Harbor", "The sinking of the Lusitania"],
        correctAnswer: "The assassination of Archduke Franz Ferdinand"
      },
      {
        id: 7,
        question: "What was the name of the first satellite launched into space?",
        options: ["Apollo", "Explorer", "Sputnik", "Voyager"],
        correctAnswer: "Sputnik"
      },
      {
        id: 8,
        question: "Which empire was ruled by Genghis Khan?",
        options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Byzantine Empire"],
        correctAnswer: "Mongol Empire"
      },
      {
        id: 9,
        question: "Who discovered America in 1492?",
        options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci"],
        correctAnswer: "Christopher Columbus"
      },
      {
        id: 10,
        question: "What was the Renaissance?",
        options: ["A war", "A religious movement", "A cultural movement", "A political party"],
        correctAnswer: "A cultural movement"
      },
      {
        id: 11,
        question: "Which country was the first to reach the South Pole?",
        options: ["United States", "Russia", "Norway", "United Kingdom"],
        correctAnswer: "Norway"
      },
      {
        id: 12,
        question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev"],
        correctAnswer: "Nikita Khrushchev"
      }
    ]
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    color: "linear-gradient(135deg, #3498db, #2980b9)",
    questions: [
      {
        id: 1,
        question: "Who founded Apple Inc.?",
        options: ["Steve Jobs and Steve Wozniak", "Bill Gates and Paul Allen", "Larry Page and Sergey Brin", "Jeff Bezos and Elon Musk"],
        correctAnswer: "Steve Jobs and Steve Wozniak"
      },
      {
        id: 2,
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Hyperlink Tracking & Tracing Program", "Human Technology Transfer Process"],
        correctAnswer: "HyperText Transfer Protocol"
      },
      {
        id: 3,
        question: "Which programming language is known as the 'mother of all programming languages'?",
        options: ["Java", "C", "Python", "FORTRAN"],
        correctAnswer: "C"
      },
      {
        id: 4,
        question: "What is the main component of a computer that processes data?",
        options: ["Hard Drive", "RAM", "CPU", "GPU"],
        correctAnswer: "CPU"
      },
      {
        id: 5,
        question: "What year was the first iPhone released?",
        options: ["2005", "2007", "2009", "2010"],
        correctAnswer: "2007"
      },
      {
        id: 6,
        question: "Which company owns Android?",
        options: ["Apple", "Microsoft", "Google", "Samsung"],
        correctAnswer: "Google"
      },
      {
        id: 7,
        question: "What does 'AI' stand for in technology?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Automated Information", "Advanced Integration"],
        correctAnswer: "Artificial Intelligence"
      },
      {
        id: 8,
        question: "Which social media platform was founded by Mark Zuckerberg?",
        options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
        correctAnswer: "Facebook"
      },
      {
        id: 9,
        question: "What is cloud computing?",
        options: ["Weather forecasting technology", "Storing and accessing data over the internet", "A type of fog", "Computing with water vapor"],
        correctAnswer: "Storing and accessing data over the internet"
      },
      {
        id: 10,
        question: "What does 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Reference Link", "User Registration Log", "Ultimate Resource Library"],
        correctAnswer: "Uniform Resource Locator"
      },
      {
        id: 11,
        question: "What does 'VR' stand for in technology?",
        options: ["Variable Rate", "Visual Resolution", "Virtual Reality", "Verified Resource"],
        correctAnswer: "Virtual Reality"
      },
      {
        id: 12,
        question: "Which company developed Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        correctAnswer: "Microsoft"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    icon: "⚽️",
    color: "linear-gradient(135deg, #e74c3c, #c0392b)",
    questions: [
      {
        id: 1,
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: "France"
      },
      {
        id: 2,
        question: "How many players are there in a standard basketball team on court?",
        options: ["5", "6", "7", "11"],
        correctAnswer: "5"
      },
      {
        id: 3,
        question: "In which sport would you perform a slam dunk?",
        options: ["Football", "Tennis", "Basketball", "Golf"],
        correctAnswer: "Basketball"
      },
      {
        id: 4,
        question: "What is the national sport of Japan?",
        options: ["Judo", "Karate", "Sumo Wrestling", "Aikido"],
        correctAnswer: "Sumo Wrestling"
      },
      {
        id: 5,
        question: "How many gold medals has Usain Bolt won at the Olympics?",
        options: ["6", "8", "9", "10"],
        correctAnswer: "8"
      },
      {
        id: 6,
        question: "Which sport uses the terms 'strike' and 'spare'?",
        options: ["Baseball", "Bowling", "Cricket", "Golf"],
        correctAnswer: "Bowling"
      },
      {
        id: 7,
        question: "In which city were the 2016 Summer Olympics held?",
        options: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
        correctAnswer: "Rio de Janeiro"
      },
      {
        id: 8,
        question: "Which tennis player has won the most Grand Slam titles in men's singles?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
        correctAnswer: "Novak Djokovic"
      },
      {
        id: 9,
        question: "What is the diameter of a basketball hoop in inches?",
        options: ["16 inches", "18 inches", "20 inches", "24 inches"],
        correctAnswer: "18 inches"
      },
      {
        id: 10,
        question: "Which country invented table tennis?",
        options: ["China", "Japan", "England", "USA"],
        correctAnswer: "England"
      },
      {
        id: 11,
        question: "In soccer, how many players get a red card to be disqualified from the game?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "One"
      },
      {
        id: 12,
        question: "Which sport is known as the 'king of sports'?",
        options: ["Soccer/Football", "Tennis", "Basketball", "Cricket"],
        correctAnswer: "Soccer/Football"
      }
    ]
  },
  {
    id: "math",
    name: "Mathematics",
    icon: "🔢",
    color: "linear-gradient(135deg, #1abc9c, #16a085)",
    questions: [
      {
        id: 1,
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.41", "3.12", "3.15"],
        correctAnswer: "3.14"
      },
      {
        id: 2,
        question: "What is the square root of 144?",
        options: ["12", "14", "10", "16"],
        correctAnswer: "12"
      },
      {
        id: 3,
        question: "If x + 5 = 12, what is the value of x?",
        options: ["5", "7", "8", "17"],
        correctAnswer: "7"
      },
      {
        id: 4,
        question: "What is 15% of 200?",
        options: ["20", "30", "15", "35"],
        correctAnswer: "30"
      },
      {
        id: 5,
        question: "What is the area of a square with sides of length 7 cm?",
        options: ["14 cm²", "28 cm²", "49 cm²", "64 cm²"],
        correctAnswer: "49 cm²"
      },
      {
        id: 6,
        question: "Which of these numbers is a prime number?",
        options: ["4", "9", "15", "17"],
        correctAnswer: "17"
      },
      {
        id: 7,
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["24", "32", "30", "20"],
        correctAnswer: "32"
      },
      {
        id: 8,
        question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
        options: ["Right triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle"],
        correctAnswer: "Equilateral triangle"
      },
      {
        id: 9,
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
      },
      {
        id: 10,
        question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
        options: ["13 cm", "26 cm", "40 cm", "28 cm"],
        correctAnswer: "26 cm"
      },
      {
        id: 11,
        question: "If 3x + 12 = 30, what is x?",
        options: ["6", "9", "18", "10"],
        correctAnswer: "6"
      },
      {
        id: 12,
        question: "What is the value of 5! (5 factorial)?",
        options: ["25", "60", "120", "20"],
        correctAnswer: "120"
      }
    ]
  },
  {
    id: "aptitude",
    name: "Aptitude",
    icon: "🧩",
    color: "linear-gradient(135deg, #9b59b6, #6c5ce7)",
    questions: [
      {
        id: 1,
        question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?",
        options: ["120 km", "150 km", "180 km", "200 km"],
        correctAnswer: "150 km"
      },
      {
        id: 2,
        question: "A shirt was sold for $45 after a 10% discount. What was its original price?",
        options: ["$49.50", "$50", "$51", "$55"],
        correctAnswer: "$50"
      },
      {
        id: 3,
        question: "If 8 people can complete a work in 12 days, how many days will it take for 6 people to complete the same work?",
        options: ["9 days", "16 days", "14 days", "18 days"],
        correctAnswer: "16 days"
      },
      {
        id: 4,
        question: "A train 150 meters long is running at 60 km/h. How long will it take to pass a platform 150 meters long?",
        options: ["10 seconds", "18 seconds", "12 seconds", "15 seconds"],
        correctAnswer: "18 seconds"
      },
      {
        id: 5,
        question: "If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many students are in the class?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "25"
      },
      {
        id: 6,
        question: "A person spends 30% of their income on rent and 20% on food. What percentage of income is left?",
        options: ["40%", "50%", "60%", "70%"],
        correctAnswer: "50%"
      },
      {
        id: 7,
        question: "Two trains are moving in the same direction at speeds of 50 km/h and 70 km/h. How long will it take for the faster train to overtake the slower train if they are initially 40 km apart?",
        options: ["1 hour", "2 hours", "3 hours", "4 hours"],
        correctAnswer: "2 hours"
      },
      {
        id: 8,
        question: "If a water tank can be filled by pipe A in 6 hours and by pipe B in 8 hours, how long will it take to fill the tank if both pipes are open?",
        options: ["3.5 hours", "4 hours", "7 hours", "14 hours"],
        correctAnswer: "3.5 hours"
      },
      {
        id: 9,
        question: "In a mixture of 45 liters, the ratio of milk to water is 2:1. How much water should be added to make the ratio 1:1?",
        options: ["5 liters", "10 liters", "15 liters", "20 liters"],
        correctAnswer: "15 liters"
      },
      {
        id: 10,
        question: "If a cube has a volume of 125 cubic cm, what is the length of each edge?",
        options: ["5 cm", "15 cm", "25 cm", "125 cm"],
        correctAnswer: "5 cm"
      },
      {
        id: 11,
        question: "A boat moves at 5 km/h in still water. If the river flows at 2 km/h, how long will it take to travel 21 km upstream?",
        options: ["3 hours", "4.2 hours", "5 hours", "7 hours"],
        correctAnswer: "7 hours"
      },
      {
        id: 12,
        question: "What is the compound interest on $5000 at 10% per annum for 2 years, compounded annually?",
        options: ["$500", "$1000", "$1050", "$1100"],
        correctAnswer: "$1050"
      }
    ]
  },
  {
    id: "movies",
    name: "Movies",
    icon: "🎬",
    color: "linear-gradient(135deg, #9b87f5, #6E59A5)",
    questions: [
      {
        id: 1,
        question: "What was the first film in the Marvel Cinematic Universe?",
        options: ["The Avengers", "Iron Man", "Captain America: The First Avenger", "Thor"],
        correctAnswer: "Iron Man"
      },
      {
        id: 2,
        question: "Who directed 'Jurassic Park'?",
        options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "George Lucas"],
        correctAnswer: "Steven Spielberg"
      },
      {
        id: 3,
        question: "Which actor played Jack Dawson in the movie 'Titanic'?",
        options: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Johnny Depp"],
        correctAnswer: "Leonardo DiCaprio"
      },
      {
        id: 4,
        question: "Which film won the Academy Award for Best Picture in 2023?",
        options: ["Barbie", "Oppenheimer", "Poor Things", "Everything Everywhere All at Once"],
        correctAnswer: "Everything Everywhere All at Once"
      },
      {
        id: 5,
        question: "Which film features the character Luke Skywalker?",
        options: ["Star Trek", "The Matrix", "Star Wars", "Dune"],
        correctAnswer: "Star Wars"
      },
      {
        id: 6,
        question: "Who played the lead role in 'The Matrix'?",
        options: ["Brad Pitt", "Keanu Reeves", "Tom Cruise", "Will Smith"],
        correctAnswer: "Keanu Reeves"
      },
      {
        id: 7,
        question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
        correctAnswer: "Avatar"
      },
      {
        id: 8,
        question: "Which of these films was NOT directed by Christopher Nolan?",
        options: ["Inception", "Interstellar", "The Prestige", "Avatar"],
        correctAnswer: "Avatar"
      },
      {
        id: 9,
        question: "Who directed 'The Godfather'?",
        options: ["Martin Scorsese", "Francis Ford Coppola", "Stanley Kubrick", "Alfred Hitchcock"],
        correctAnswer: "Francis Ford Coppola"
      },
      {
        id: 10,
        question: "Which studio produced the 'Toy Story' films?",
        options: ["DreamWorks", "Pixar", "Illumination", "Blue Sky"],
        correctAnswer: "Pixar"
      },
      {
        id: 11,
        question: "Who played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr."
      },
      {
        id: 12,
        question: "Which movie features the character Harry Potter?",
        options: ["The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "Percy Jackson"],
        correctAnswer: "Harry Potter and the Sorcerer's Stone"
      }
    ]
  }
];
