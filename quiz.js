// var json = require('data/human_eval.json');
import json from './data/human_eval_blip.json' assert {'type': 'json'};
console.log(json);
let group = sessionStorage.getItem("group");
let questions = json[group];
console.log(group)


let question_count = 0;
var selection = {};
let options = ['Question A', 'Question B', 'Same'];

window.onload = function(){
    show(question_count);
    define();
    console.log(selection)
};

function define(){
    for(let i=0; i < questions.length; i++){
        selection[questions[i].id] = "None"
    }
}

function process(count){
    let progressbar = document.getElementById("progress");
    let percent = count * 10
    progressbar.innerHTML = `
    <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow=${percent} aria-valuemin="0" aria-valuemax="100" style="width:${percent}%">
    ${percent}%
    </div>
    `;
}

function show_image(count){
    let image_place = document.getElementById("image");
    image_place.src = questions[count].image;
    image_place.title = questions[count].caption;
}


function show(count){
    process(count);
    show_image(count);
    let question = document.getElementById("questions");
    let[first, second, third] = options;

    question.innerHTML = `
    <ul class="quiz_header"> 
    <li class="quiz_user">
    <h4> Knowledge Triplet: ${questions[count].triplet} Answer: ${questions[count].answer}</h4>
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
}


window.next = function() {

    if(selection[questions[question_count].id]!='None'){
        if(question_count == questions.length -1){
            location.href = "final.html";
            submitall();
        }
        question_count++;
    }
    show(question_count);
    console.log(selection);
}

window.back = function() {
    if(question_count>0){
        question_count--;
        deActive(question_count);
        show(question_count);
        console.log(selection);
    }

}

function deActive(count){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        if(option[i].classList.contains("active")){
            option[i].classList.remove("active");
        }
        selection[questions[count].id] = 'None';

    }
}


function submitall(){
    sessionStorage.setItem('id_0', questions[0].id);
    sessionStorage.setItem('select_0',selection[questions[0].id]);
    sessionStorage.setItem('id_1', questions[1].id);
    sessionStorage.setItem('select_1',selection[questions[1].id]);
    sessionStorage.setItem('id_2', questions[2].id);
    sessionStorage.setItem('select_2',selection[questions[2].id]);
    sessionStorage.setItem('id_3', questions[3].id);
    sessionStorage.setItem('select_3',selection[questions[3].id]);
    sessionStorage.setItem('id_4', questions[4].id);
    sessionStorage.setItem('select_4',selection[questions[4].id]);
    sessionStorage.setItem('id_5', questions[5].id);
    sessionStorage.setItem('select_5',selection[questions[5].id]);
    sessionStorage.setItem('id_6', questions[6].id);
    sessionStorage.setItem('select_6',selection[questions[6].id]);
    sessionStorage.setItem('id_7', questions[7].id);
    sessionStorage.setItem('select_7',selection[questions[7].id]);
    sessionStorage.setItem('id_8', questions[8].id);
    sessionStorage.setItem('select_8',selection[questions[8].id]);
    sessionStorage.setItem('id_9', questions[9].id);
    sessionStorage.setItem('select_9',selection[questions[9].id]);
}