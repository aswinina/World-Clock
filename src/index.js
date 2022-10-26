function updateTime() {
  //Delhi
  let delhiElement = document.querySelector("#delhi");
  if (delhiElement) {
    let delhiDateElement = delhiElement.querySelector(".date");
    let delhiTimeElement = delhiElement.querySelector(".time");
    let delhiTime = moment().tz("Asia/Kolkata");

    delhiDateElement.innerHTML = delhiTime.format("MMMM Do YYYY");
    delhiTimeElement.innerHTML = delhiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
