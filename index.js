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

    const postHeader = document.createElement("div")
    const postHeaderImgContainer = document.createElement("div")
    const postHeaderImg = document.createElement("img")
    const postHeaderText = document.createElement("div")
    const postHeaderUser = document.createElement("div")
    const postHeaderLocation = document.createElement("div")

    // add classes to elements
    post.classList.add("post")
    postHeader.classList.add("post-header")
    postHeaderImgContainer.classList.add("post-header-img-container")
    postHeaderImg.classList.add("post-header-img")
    postHeaderText.classList.add("post-header-text")
    postHeaderUser.classList.add("post-header-user")
    postHeaderLocation.classList.add("post-header-location")

    // append elements onscreen
    main.append(post)
    post.append(postHeader)
        postHeader.append(postHeaderImgContainer)
            postHeaderImgContainer.append(postHeaderImg)
        postHeader.append(postHeaderText)
            postHeaderText.append(postHeaderUser)
            postHeaderText.append(postHeaderLocation)

    // add content to elements
    postHeaderUser.textContent = newPost.name
    postHeaderLocation.textContent = newPost.location
    postHeaderImg.src = newPost.avatar
}

// loop through posts array and render each post
for (i = 0; i < posts.length; i++) {
    createPost(posts[i])
}