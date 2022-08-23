let counter = 0;
const unfollow = () => {
  const scrollTarget = document.querySelector("div._aano");
  if (scrollTarget) {
    console.log(scrollTarget);
    scrollTarget.scroll(900 * counter, 900 * counter);

    // get all buttons
    let buttons;
    let fliteredButtons = [];
    // This code worked for me if doesn't work for you just fire an issues, we can work on it
    buttons = document.querySelectorAll("button");
    document.querySelectorAll("button").forEach((element) => {
      let childNodes = element.children[0].children;
      if (childNodes && childNodes[0] && childNodes[0].innerHTML && childNodes[0].innerHTML == "Following")
        fliteredButtons.push(element);
    });
    if (fliteredButtons && fliteredButtons.length > 0) {
      // fliteredButtons.forEach(element);
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
            setTimeout(reject, maxDelay);
          });
          setTimeout(() => {
            unfollowButton.click();
            resolve();
          }, 3000);
        });
      };
      counter++;
      handleClick(fliteredButtons);
    }
  }
};
//For the first time
unfollow();
setInterval(unfollow, 960000);
