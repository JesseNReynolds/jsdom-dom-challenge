// define elements
const counter = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeList = document.getElementsByClassName('likes')[0];
const likeButton = document.getElementById('heart');
const commentField = document.getElementById('comment-input');
const submitComment = document.getElementById('submit');
const commentList = document.getElementById('list')

// run the timer
let running = true;

function tick(){
    counter.innerHTML ++;
}

function startTimer(){
    timer = setInterval(tick, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

window.addEventListener('DOMContentLoaded', startTimer());

// pause and resume the timer
pauseButton.addEventListener('click', function(){
    if (running){
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        stopTimer();
        running = false;
        pauseButton.innerHTML = "resume";
    } else {
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        startTimer();
        running = true;
        pauseButton.innerHTML = "pause";
    }
})

// manually increment the timer
function decrementCounter(){
    counter.innerHTML --;
}

plusButton.addEventListener('click', tick)
minusButton.addEventListener('click', decrementCounter)

//like button
function leaveLike(){
    if (!document.getElementById(`${counter.innerHTML}-like`)){
        let liItem = document.createElement('li');
        liItem.id = `${counter.innerHTML}-like`;
        liItem.counter = 1;
        likeList.appendChild(liItem);
        liItem.innerHTML = `${counter.innerHTML} has ${liItem.counter} likes.`;

    } else {
        let liItem = document.getElementById(`${counter.innerHTML}-like`);
        liItem.counter ++;
        liItem.innerHTML = `${counter.innerHTML} has ${liItem.counter} likes.`;

    }
}

likeButton.addEventListener('click', leaveLike);

// comments
submitComment.addEventListener('click', function(newComment){
    if (commentField.value != ''){
    let comment = document.createElement('p');
    comment.innerHTML = commentField.value;
    commentList.appendChild(comment)
    commentField.value = ''
    newComment.preventDefault();
    }
})
