const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector("main")

// render posts
function createPost() {
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

    // post.textContent = posts[01].name
}

createPost()