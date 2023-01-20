const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/avatar-vangogh.jpg",
        post: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        post: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        post: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector("main")

// render posts
function createPost(newPost) {
    // create post elements
    const post = document.createElement("section")
    const separator = document.createElement("div")
    // post header elements
    const postHeader = document.createElement("div")
    const postHeaderImgContainer = document.createElement("div")
    const postHeaderImg = document.createElement("img")
    const postHeaderText = document.createElement("div")
    const postHeaderUser = document.createElement("div")
    const postHeaderLocation = document.createElement("div")
    // post image elements
    const postImgContainer = document.createElement("div")
    const postImg = document.createElement("img")
    // post buttons
    const buttonsContainer = document.createElement("div")
    const buttonImgContainer1 = document.createElement("div")
    const buttonImgContainer2 = document.createElement("div")
    const buttonImgContainer3 = document.createElement("div")
    const buttonImg1 = document.createElement("img")
    const buttonImg2 = document.createElement("img")
    const buttonImg3 = document.createElement("img")
    // post likes
    const postLikes = document.createElement("div")
    // post comments
    const comments = document.createElement("div")
    const commentName = document.createElement("span")
    const commentText = document.createElement("span")
    // user comment
    const newCommentContainer = document.createElement("div")
    const newComment = document.createElement("input")
    newComment.type = "text"
    const newCommentButton = document.createElement("button")
    newCommentButton.type = "button"

    // add classes to elements
    post.classList.add("post")
    separator.classList.add("separator")
    // post header elements
    postHeader.classList.add("post-header")
    postHeaderImgContainer.classList.add("post-header-img-container")
    postHeaderImg.classList.add("post-header-img")
    postHeaderText.classList.add("post-header-text")
    postHeaderUser.classList.add("post-header-user")
    postHeaderLocation.classList.add("post-header-location")
    // post image elements
    postImgContainer.classList.add("post-img-container")
    postImg.classList.add("post-img")
    // post buttons
    buttonsContainer.classList.add("buttons-container")
    buttonImgContainer1.classList.add("button-img-container")
    buttonImgContainer2.classList.add("button-img-container")
    buttonImgContainer3.classList.add("button-img-container")
    buttonImg1.classList.add("icon")
    buttonImg2.classList.add("icon")
    buttonImg3.classList.add("icon")
    // post likes
    postLikes.classList.add("post-likes")
    // post comments
    comments.classList.add("comments")
    commentName.classList.add("comment-name")
    commentText.classList.add("comment-text")
    newComment.classList.add("new-comment")
    newCommentButton.classList.add("new-comment-button")

    // append elements onscreen
    main.append(post)
    post.append(postHeader)
        postHeader.append(postHeaderImgContainer)
            postHeaderImgContainer.append(postHeaderImg)
        postHeader.append(postHeaderText)
            postHeaderText.append(postHeaderUser)
            postHeaderText.append(postHeaderLocation)
    post.append(postImgContainer)
        postImgContainer.append(postImg)
    post.append(buttonsContainer)
        buttonsContainer.append(buttonImgContainer1)
            buttonImgContainer1.append(buttonImg1)
        buttonsContainer.append(buttonImgContainer2)
            buttonImgContainer2.append(buttonImg2)
        buttonsContainer.append(buttonImgContainer3)
            buttonImgContainer3.append(buttonImg3)
    post.append(postLikes)
    post.append(comments)
        comments.append(commentName)
        comments.append(commentText)
    post.append(newCommentContainer)
        newCommentContainer.append(newComment)
        newCommentContainer.append(newCommentButton)
    post.append(separator)

    // add content to elements
    postHeaderUser.textContent = newPost.name
    postHeaderLocation.textContent = newPost.location
    postHeaderImg.src = newPost.avatar
    postImg.src = newPost.post
    buttonImg1.src = "/img/icon-heart.png"
    buttonImg2.src = "/img/icon-comment.png"
    buttonImg3.src = "/img/icon-dm.png"
    postLikes.textContent = `${newPost.likes} likes`
    commentName.textContent = `${newPost.username} `
    commentText.textContent = newPost.comment
    newCommentButton.textContent = ">"

    // increment likes if like button is clicked
    let liked = false
    buttonImg1.addEventListener("click", function() {
        if (liked === false) {
            newPost.likes += 1
            postLikes.textContent = `${newPost.likes} likes`
            buttonImg1.src = "/img/icon-heart-red.png"
            liked = true
            return
        }

        if (liked === true) {
            newPost.likes -= 1
            postLikes.textContent = `${newPost.likes} likes`
            buttonImg1.src = "/img/icon-heart.png"
            liked = false
            return
        }
    })

    // let user add comments
    newCommentButton.addEventListener("click", function() {
        if (newComment.value) {
            console.log("clicked")
            const userComment = document.createElement("div")
            userComment.innerHTML = `<span class="comment-name">You</span> ${newComment.value}`
            comments.append(userComment)
        }
    })
}

// loop through posts array and render each post
for (i = 0; i < posts.length; i++) {
    createPost(posts[i])
}