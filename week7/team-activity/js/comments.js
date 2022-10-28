export default class Comments {
  constructor(parent, commentType) {
    this.parent = parent;
    this.type = commentType;
    this.commentList = this.getAllComments();
    console.log(this.commentList);
  }

  getAllComments() {
    let commentList = JSON.parse(localStorage.getItem(this.type));
    if (!commentList) {
      commentList = [];
    }
    return commentList;
  }
  createNewComment(commentName, content) {
    const newComment = {
      name: commentName,
      date: new Date(),
      content: content,
    };
    let comments = this.getAllComments();
    comments.push(newComment);
    this.commentList = comments;
    localStorage.setItem(this.type, JSON.stringify(this.commentList));
    this.filterCommentsByName(commentName);
  }
  addNewCommentListener() {
    const content = document.getElementById("commentText");
    document.getElementById("newComments").addEventListener("click", () => {
      this.createNewComment(this.type, content.value);
    });
  }
  filterCommentsByName(commentName) {
    let filteredComments = [];
    if (this.commentList) {
      for (let comment of this.commentList) {
        if (comment.name == commentName) {
          filteredComments.push(comment);
        }
      }
    }
    renderCommentList(this.parent, filteredComments);
  }
  showCommentsList(sublistName) {
    this.filterCommentsByName(this.type);
    this.addNewCommentListener();
  }
}
function renderCommentList(parent, comments) {
  parent = document.getElementById(parent);
  comments.forEach((comment) => {
    parent.appendChild(renderOneComment(comment));
  });
}
function renderOneComment(comment) {
  const item = document.createElement("li");
  item.classList.add("light");
  // setting this to make getting the details for a specific hike easier later.
  item.setAttribute("data-name", comment.name);
  item.innerHTML = `<h3>${comment.date}</h3><br>
            <p>${comment.content}</p>`;

  return item;
}
