const base_url = `https://cdn.contentful.com`;
const api_key = `U3rxBeE09bI3wQjTVp3SznjEmzUR4qQdH8HLTN_q8aM`;
//space id : b5jddcoldliu
//end point
// `/spaces/{space_id}/environments/master/entries?access_token={access_token}`
//access token : U3rxBeE09bI3wQjTVp3SznjEmzUR4qQdH8HLTN_q8aM
//add after access token : content_type={content_type}

const $theQuestion = $("#question")
const $answer_a = $("#a");
const $answer_b = $("#b");
const $answer_c = $("#c");
const $answer_d = $("#d");
const $correct_answer = $("correct-answer")
const $button = $(".buttons")


$.ajax({ url: `${base_url}/spaces/b5jddcoldliu/environments/master/entries?access_token=${api_key}&content_type=triviaq`})
.then(
   (data) => {
       console.log(data)
    let newData = [];
    //questionObj is to reference the question 
    let questionObj ;
    
    //pushing the data into a new array so it can be easier to manipulate.
       data.items.forEach (question => { newData.push(question.fields); })
       console.log(newData)
       $correct_answer.text(data.items[0].fields.answer);
       
       
       //making the question that appears on the screen random
       const randomQuestion = newData[Math.floor(Math.random() * newData.length)]
       //after making the question random I'm assigning it to questionObj to reference in the button click event
       questionObj = randomQuestion
       
       
       //appending the random question to the screen
           $theQuestion.text(randomQuestion.question);
           $answer_a.text(randomQuestion.a);
           $answer_b.text(randomQuestion.b);
           $answer_c.text(randomQuestion.c);
           $answer_d.text(randomQuestion.d);

        //this function is to remove the question that is being asked so it doesn't get asked twice!
           const removeQuestion = (question) => {
                let arrRandom = []
                newData = newData.filter(q => {
                    return question.question !== q.question
                })
                console.log(newData)
           }

           //if the button that is clicked html text equals to the answer in the object than it is correct else it's wrong.
          //this is was just to test the logic so it's only pulling the data from one question.
            $button.on("click", event => {
                
               if (event.target.innerText === questionObj.answer){
                const nextQuestion = newData[Math.floor(Math.random() * newData.length)]
                $theQuestion.text(nextQuestion.question);
                $answer_a.text(nextQuestion.a);
                $answer_b.text(nextQuestion.b);
                $answer_c.text(nextQuestion.c);
                $answer_d.text(nextQuestion.d);
                questionObj = nextQuestion;
                    console.log("correct")
                    console.log(newData)
                    removeQuestion(nextQuestion)
                } 
                else {
                    console.log("wrong")
                    alert("WRONG!!!!!!!!!!!!!!!!!!!")
                }
            })
   },
   //this should appear if the data isn't rendering right.
   (error) => {
       console.log("bad request", error)
   }
);


//code for animation
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 15000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2500
  });