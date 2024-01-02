const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');

let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;
let isDrawing = false;

// Functions

const likeClick = () => {
    if (!isLiked) {
        likeBtn.classList.add('isLiked');
        numberOfLikes++;
        numberOfLikesElement.textContent = numberOfLikes;
        isLiked = !isLiked;
    } else {
        likeBtn.classList.remove('isLiked');
        numberOfLikes--;
        numberOfLikesElement.textContent = numberOfLikes;
        isLiked = !isLiked;
    }
    if (isDrawing) {
        isDrawing = false;
        deteteAllFollowers();
        document.removeEventListener("mousemove", createFollowerElement);
    } else {
        isDrawing = true;
        document.addEventListener("mousemove", createFollowerElement);
    }
};

likeBtn.addEventListener('click', likeClick);

function createFollowerElement(event) {
    if (isDrawing) {
        var followerElement = document.createElement("div");
        followerElement.className = "follower";
        followerElement.style.left = event.pageX + "px";
        followerElement.style.top = event.pageY + "px";
        document.body.appendChild(followerElement);
    }
}

function deteteAllFollowers() {
    let followers = document.getElementsByClassName("follower");
    while (followers.length) {
        followers[0].parentNode.removeChild(followers[0]);
    }
}