var secound = 30;
var minuite = 1;
var questionNumber = 1;
var score = 0;
var check = 1;
var toggle = 0;
var answerText, id;

function timer() {
  displayQuestion();
  setInterval(function() {
    if (minuite >= 0) {
      if (secound >= 1) {
        if (secound < 11) {
          secound--;
          $("#timeTwo").html("0" + secound);
        } else {
          secound--;
          $("#timeTwo").html(secound);
        }
      } else {
        minuite--;
        $("#timeOne").html("00 : ");
        secound = 60;
      }
    } else {
      skip();
    }
  }, 1000);
}

function displayQuestion() {
  var num = Math.round(Math.random() * 9);
  if (check == num) {
    num = Math.round(Math.random() * 9);
  } else {
    check = num;
  }
  var text = [
    ["Find the least number that when divided by 16, 18 and 20 leaves a remainder 4 in each case, but is completely divisible by 7.",
      "364", "2254", "2884", "3234", "Answer C"
    ],

    ["A's Salary is first increased by 25% and then decreased by 20%. The result is the same as B's salary increased by 20% and then reduced by 25%. Find the ratio of B's salary to that A's?",
      "10:9", "4:3", "11:10", "12.11", "Answer A"
    ],

    ["The average age of three boys is 15 years, if their ages are in the ratio 3:5:7, the age of youngest boy is?",
      "19 years", "21 years", "9 Years", "15 years", "Answer C"
    ],

    ["A bag contains 5 red, 4 green and 3 black balls. It three balls are drawn out of it at random find the probability of drawing exactly 2 red balls.",
      "7/22", "7/12", "10/33", "7/11", "Answer B"
    ],

    ["Ajit can do as much work in 2 days as Baljit can do in 3 days and Baljit can do as much in 4 days as Diljit in 5 days. A piece of work takes 20 de if all work together. How long would Baljit t to do all the work by himself?",
      "66 days", "62 days", "44 days", "50 days", "Answer A"
    ],

    ["A man sells 5 articles for 15 Ruppes and makes a p of 20%. Find his gain or loss percent if the sale & such articles for 18.40 Rupees?",
      "8% loss", "2.22% profit", "2.22% loss", "8% profit", "Answer A"
    ],
    ["Which one of the following when divided by 19 gives the quotient 19 and the remainder 9?",
      "370", "331", "281", "368", "Answer A"
    ],
    ["In a seminar 15% of registered delegates wes absent and 20% fell ill out of those who were present. If the total number of delegates who successfully completed the seminar is 544, how many delegates had registered for the seminar?",
      "944", "800", "721", "625", "Answer C"
    ],
    ["The average age of boys in a class of 30 is 15 years. If 10 more boys join the class, the average age of the whole class is reduced by one year. What is the average age of new comers?",
      "9 years", "10 years", "11 years", "12 years", "Answer C"
    ],
    ["If the difference between simple and compound interests on a sum of money @ 5% per annum for two years is 25 then what is the principal amount?",
      "8,000", "9,000", "9,300", "10,000", "Answer D"
    ],
  ];
  var questionText = text[num][0];
  var optOne = text[num][1];
  var optTwo = text[num][2];
  var optThree = text[num][3];
  var optFour = text[num][4];
  answerText = text[num][5];

  $("#question").html(questionText);
  $("#opt1").html(optOne);
  $("#opt2").html(optTwo);
  $("#opt3").html(optThree);
  $("#opt4").html(optFour);

  $("#Options:checked").prop("checked", false);
}

function skip() {
  secound = 30;
  minuite = 1;
  $("#timeOne").html("01 : ");
  $("#timeTwo").html("30");

  questionNumber++;
  toggle++;

  id = "#" + questionNumber;
  $(id).toggleClass("border");

  id = "#" + toggle;
  $(id).toggleClass("border");

  displayQuestion();

  if (questionNumber > 20) {
    $("#popup").toggleClass("popup_show");
    $("#showScore").html(score);
  }
}

function submit() {
  if (!$("#Options:checked").val()) {
    alert("No Option Is Selected");
  } else {
    var answer = $("#Options:checked").val();

    if (answer == answerText) {
      score = score + 2;
      console.log(score);
      skip();
    } else {
      score--;
      console.log(score);
      skip();
    }
  }
}
