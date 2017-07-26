const chalk = require("chalk")
console.log(chalk.blue("Hello World!"))

const moment = require("moment")

let now = moment().format("LLLL")
let day = moment().format("DDD")
let startDay = moment().startOf("day")
let dls = moment().isDST()
let leapYear = moment().isLeapYear()

console.log(`It is ${chalk.blue(now)}.`)

console.log(`It is the ${chalk.magenta(day + "th")} day of the year.`)

console.log(`It is ${chalk.cyan(moment().diff(startDay, "seconds"))} seconds into the day.`)

console.log(`It ${dls ? chalk.yellow("is") : chalk.red("is not")} during Daylight Savings Time.`)

console.log(`it ${leapYear ? chalk.yellow("is") : chalk.red("is not")} a leapYear.`)

//https://www.npmjs.com/package/chalk
//https://momentjs.com/
