const feedbacks = document.querySelectorAll(".feed");
const container = document.querySelector(".container");
const btn = document.querySelector(".button");

let text = "";

feedbacks.forEach((feed) => {
  feed.addEventListener("click", function () {
    feedbacks.forEach((feed) => {
      feed.classList.remove("active");
    });
    feed.classList.add("active");
    text = feed.querySelector("p").textContent;
    console.log(text);
  });
});

btn.addEventListener("click", () => {
  container.innerHTML = `<i class="fas fa-heart" style="color: red; font-size: 1.5em"></i>
  <p>Thank you</p>
  <h4>Feedback: ${text}</h4>
  <p>We'll use your feedback to improve our customer support</p>`;
});
