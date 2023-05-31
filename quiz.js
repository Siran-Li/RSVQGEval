// var json = require('data/human_eval.json');
import json from './data/human_eval.json' assert {'type': 'json'};
console.log(json);
let questions = json['5'];
// async function loadConfigData(){
//     const response = await fetch('./data/human_eval.json');
//     const data = await response.json();
//     console.log(data);
// }
// loadConfigData();
// let questions = data['5'];
// let questions = [
//     {
//         id: 1,
//         triplet: "[grass, at location, tree] <br> <br>",
//         answer: "Green grass",
//         question: "A: What is surrounding the field and surrounding it?  <br><br>\
//                    B: What is surrounding the field and near a track field?",
//         gt_answer:"Question A",
//         options: [
//             "Question A",
//             "Question B",
//             "Same",
//             "None of these"
//         ]   
//     },
//     {
//         id: 2,
//         triplet: "[grass, at location, tree] <br> <br>",
//         answer: "Green grass",
//         question: "<br> A: What is surrounding the field and surrounding it?  <br>\
//                    <br> B: What is surrounding the field and near a track field?",
//         gt_answer:"Question A",
//         options: [
//             "Question A",
//             "Question B",
//             "Same",
//             "None of these"
//         ]   
//       },
      
    //   {
    //     id: 3,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 4,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 5,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "A: What is surrounding the field and surrounding it?  <br>\
    //                 B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 6,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 7,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 8,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]   
    //   },
    //   {
    //     id: 9,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]    
    //   },
    //   {
    //     id: 10,
    //     triplet: "[grass, at location, tree] <br> <br>",
    //     answer: "Green grass",
    //     question: "<br> A: What is surrounding the field and surrounding it?  <br>\
    //                <br> B: What is surrounding the field and near a track field?",
    //     gt_answer:"Question A",
    //     options: [
    //         "Question A",
    //         "Question B",
    //         "Same",
    //         "None of these"
    //     ]     
    //   },
// ];

let question_count = 0;
let points = 0;
var selection = {};
let options = ['Question A', 'Question B', 'Same']

window.onload = function(){
    show(question_count);
};

function process(count){
    let progressbar = document.getElementById("progress");
    let percent = count * 10
    progressbar.innerHTML = `
    <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow=${percent} aria-valuemin="0" aria-valuemax="100" style="width:${percent}%">
    ${percent}%
    </div>
    `;
}

function show(count){
    process(count);
    let question = document.getElementById("questions");
    let[first, second, third] = questions[count].options;

    // <h2>Q${count + 1}. ${questions[count].question}</h2>
    // triplet.innerHTML = `<h3> Knowledge Triplet: ${questions[count].triplet} <br> <br> Answer:${questions[count].answer}</h3>`;
    // triplet.innerHTML = `<h3> Knowledge Triplet </h3>`;
    question.innerHTML = `
    <ul class="quiz_header"> 
    <li class="quiz_user">
    <h4> Knowledge Triplet: ${questions[count].triplet} Answer:${questions[count].answer}</h4>
    </li></ul>
    <ul class="quiz_body"> 
    <h3>${questions[count].question}</h3>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul></ul>`;
    toggleActive(count);  
}

function toggleActive(count){
    let option = document.querySelectorAll("li.option");
    // var option_index = 'None';
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
            selection[questions[count].id] = options[i];
        }
    }
    // let user_answer = document.querySelector("li.option.active").innerHTML;
    // document.getElementById('choose_option').value = document.querySelector("li.option.active").innerHTML;
    // let option_name = document.querySelector("li.option.active").innerHTML;
}


function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
        submitall();
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;


if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",50);
}
console.log(points);

question_count++;
show(question_count);
}


function submitall(){
    sessionStorage.setItem('id_0', questions[0].id);
    sessionStorage.setItem('select_0',selection[questions[0].id]);
    sessionStorage.setItem('id_1', questions[1].id);
    sessionStorage.setItem('select_1',selection[questions[1].id]);
}