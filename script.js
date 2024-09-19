{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Handwashing Game Logic
\f1\fs24 \

\f0\fs29\fsmilli14667 let handWashed = false;
\f1\fs24 \

\f0\fs29\fsmilli14667 let soapApplied = false;
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf2 \
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 document.getElementById("soap").addEventListener("click", function() \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0soapApplied = true;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0document.getElementById("game-result").innerText = "Soap applied! Now wash your hands.";
\f1\fs24 \

\f0\fs29\fsmilli14667 \});
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf2 \
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 document.getElementById("wash").addEventListener("click", function() \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0if (soapApplied) \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0handWashed = true;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0document.getElementById("game-result").innerText = "You washed your hands properly! Well done!";
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0resetHandWashGame();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\} else \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0document.getElementById("game-result").innerText = "Apply soap before washing!";
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \});
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf2 \
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 function resetHandWashGame() \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0setTimeout(() => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0handWashed = false;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0soapApplied = false;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0document.getElementById("game-result").innerText = "";
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\}, 3000);
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf2 \
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 // Quiz Logic
\f1\fs24 \

\f0\fs29\fsmilli14667 const correctAnswer = 0; // Correct answer is "2 liters"
\f1\fs24 \

\f0\fs29\fsmilli14667 let quizCompleted = false;
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf2 \
\pard\pardeftab720\sl404\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 function checkAnswer(answer) \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0if (!quizCompleted) \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0if (answer === correctAnswer) \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0document.getElementById("quiz-feedback").innerText = "Correct! 2 liters is recommended daily.";
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\} else \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0document.getElementById("quiz-feedback").innerText = "Incorrect. Try again!";
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0quizCompleted = true;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
}