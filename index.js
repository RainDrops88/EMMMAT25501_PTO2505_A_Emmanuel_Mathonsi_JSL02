let taskLowCase = "";

for (let i = 1 ; i<=2 ; i++){ //setting the number off loops to 2, for task 1 and task 2 data//

do { // using do-while to at least run the code once //
    if (i === 1){
        task = prompt("Enter task 1 title: ");      // prompt to allow the user to input data for task 1 //
    }else {
        task = prompt("Enter task 2 title: ");      // prompt to allow the user to input data for task 2 //
    }
    taskLowCase = task.toLowerCase();               // converting the input data to lower cases //

    if (taskLowCase === "todo") {
        console.log("No task completed, let's get to work!");       // 1  if user input correct data, console will display this message // 
    } else if (taskLowCase === "doing") {
        console.log("No task completed, let's get to work!");       //2  if user input correct data, console will display this message //
    } else if (taskLowCase === "done") {
        console.log("Title: Make corrections to JSL01, status: done");  //3  if user input correct data, console will display this message //
    } else {
        alert("Invalid status: Please enter 'todo', 'doing', or 'done'.");  // if user input incorrect data this alert message will display //
    }

} while (taskLowCase !== "todo" && taskLowCase !== "doing" && taskLowCase !== "done");   
// if input data is incorrect(which makes the condition true) the loop will run again, otherwise if it is correct(which makes the condition false) the loop will stop. //
}

