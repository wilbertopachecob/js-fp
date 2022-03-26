const pipeline = require("../pipeline");
const getField = require("../../Chapter_6/getField.js");
const { flip2 } = require("../../Chapter_7/flip");
const demethodize1 = require("../../Chapter_6/demethodize");
const curry = require("../../Chapter_7/curryBind");

const allTasks = {
  date: "2017-09-22",
  byPerson: [
    {
      responsible: "EG",
      tasks: [
        { id: 111, desc: "task 111", done: false },
        { id: 222, desc: "task 222", done: false },
      ],
    },
    {
      responsible: "FK",
      tasks: [
        { id: 555, desc: "task 555", done: false },
        { id: 777, desc: "task 777", done: true },
        { id: 999, desc: "task 999", done: false },
      ],
    },
    {
      responsible: "ST",
      tasks: [{ id: 444, desc: "task 444", done: true }],
    },
  ],
};

let map = pipeline(demethodize1, flip2, curry)(Array.prototype.map);
// map = flip2(map);
// map = curry(map);
const getIds = map(getField("id"));
const filterPendingTasks = (arr = []) => arr.filter((elem) => !elem.done);
const searchPerson = (arr = [], name) =>
  arr.find((elem) => elem.responsible === name) || {};

const pendingTasks = ({ byPerson: arr = [] }, name) =>
  pipeline(
    searchPerson,
    getField("tasks"),
    filterPendingTasks,
    getIds
  )(arr, name);

const result = pendingTasks(allTasks, "FK");
console.log(result);
// console.log(getField("byPerson")(allTasks));
