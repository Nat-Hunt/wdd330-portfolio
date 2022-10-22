const linksBlock1 = [
  {
    label: "Week1 notes",
    url: "./week1/",
  },
  {
    label: "Week2 notes",
    url: "./week2/codingExercises.html",
  },
  {
    label: "Week3 notes",
    url: "./week3/",
  },
  {
    label: "Week4 notes",
    url: "./week4/",
  },
  {
    label: "Week5 notes",
    url: "./week5/",
  },
  {
    label: "Challenge One: To Do",
    url: "./challenge_one_to_do/",
  },
];
// const linksBlock2 = [
//     {
//         label: "Week8 notes",
//         url: "./week8/index.html"
//     }
// ]

linksBlock1.forEach((item) => {
  var label = item.label;
  var url = item.url;
  var ol = document.getElementById("dynamicNavBarBlock1");
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.appendChild(document.createTextNode(label));
  a.href = url;
  li.appendChild(a);
  ol.appendChild(li);
});

// linksBlock2.forEach(
//     item => {
//         var label = item.label;
//         var url = item.url;
//         var ol = document.getElementById("dynamicNavBarBlock1");
//         var li = document.createElement('li');
//         var a = document.createElement('a');
//         a.appendChild(document.createTextNode(label));
//         a.href = url;
//         li.appendChild(a);
//         ol.appendChild(li);
//     }
// )
