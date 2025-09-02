let task1LowCase = "";

do { // using do-while to at least run the code once //
    let task1 = prompt("Enter task 1 title: ");      // prompt allow the user to input data //
    task1LowCase = task1.toLowerCase();               // converting the input data to lower cases //

    if (task1LowCase === "todo") {
        console.log("No task completed, let's get to work!");
    } else if (task1LowCase === "doing") {
        console.log("No task completed, let's get to work!");
    } else if (task1LowCase === "done") {
        console.log("Title: Make corrections to JSL01, status: done");
    } else {
        alert("Invalid status: Please enter 'todo', 'doing', or 'done'.");  // if user input incorrect data this alert message //
    }

} while (task1LowCase !== "todo" && task1LowCase !== "doing" && task1LowCase !== "done");   
// if input data is incorrect(which makes the condition true) the loop will run again, otherwise if it is correct(which makes the condition false) the loop will stop. //