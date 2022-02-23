// get all buttons
let buttons;
let fliteredButtons = [];
// This code worked for me if doesn't work for you just fire an issues, we can work on it
buttons = document.querySelectorAll("button");
document.querySelectorAll("button").forEach((element) => {
  let childNodes = element.children;
  if (
    childNodes &&
    childNodes[0] &&
    childNodes[0].innerHTML &&
    childNodes[0].innerHTML == "Following"
  )
    fliteredButtons.push(element);
});
// fliteredButtons.forEach(element);
var presentation, interval;
const handleClick = async (buttons) => {
  for (let button of buttons) {
    await handleFollowingClick(button);
  }
};
const handleFollowingClick = (followingBtn, maxDelay = 3000) => {
  return new Promise(async (resolve, reject) => {
    followingBtn.click();
    const unfollowButton = await new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        //Scan for the pop
        document.querySelectorAll("button[tabindex]").forEach((element) => {
          if (element.innerHTML == "Unfollow") {
            clearInterval(interval);
            return resolve(element);
          }
        });
      }, 100);
      setTimeout(reject, 3000);
    });
    unfollowButton.click();
    resolve();
  });
};

handleClick(fliteredButtons);
