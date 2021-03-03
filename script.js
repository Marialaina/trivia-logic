const $question = $("#question")
const $answer_a = $("#a");
const $answer_b = $("#b");
const $answer_c = $("#c");
const $answer_d = $("#d");
const $correct_answer = $("correct-answer")

const base_url = `https://cdn.contentful.com`;
const api_key = `U3rxBeE09bI3wQjTVp3SznjEmzUR4qQdH8HLTN_q8aM`;
//space id : b5jddcoldliu
//end point
// `/spaces/{space_id}/environments/master/entries?access_token={access_token}`
//access token : U3rxBeE09bI3wQjTVp3SznjEmzUR4qQdH8HLTN_q8aM
//add after access token : content_type={content_type}


$.ajax({ url: `${base_url}/spaces/b5jddcoldliu/environments/master/entries?access_token=${api_key}&content_type=triviaq`})
.then(
   (data) => data.items.forEach (question => {
    $question.text(data.fields.question)
    console.log
    $answer_a.text(data.fields.a)
    $answer_b.text(data.fields.b)
    $answer_c.text(data.fields.c)
    $answer_d.text(data.fields.d)
    $correct_answer.text(data.fields.answer)
    console.log(data)


   }),


    //    $question.text(data.items[0].fields.question)
    //    $answer_a.text(data.items[0].fields.a)
    //    $answer_b.text(data.items[0].fields.b)
    //    $answer_c.text(data.items[0].fields.c)
    //    $answer_d.text(data.items[0].fields.d)
    //    $correct_answer.text(data.items[0].fields.answer)
    //    console.log(data)
   
   (error) => {
       console.log("bad request", error)
   }
);


arr = ['apples', 'oranges']


const fruits = document.createElement("p");

fruits.innerHTML = arr[0]


