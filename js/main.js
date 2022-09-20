const linksBlock1 = [
    {
        label: "Week1 notes",
        url: "./week1/index.html"
    }
]
// const linksBlock2 = [
//     {
//         label: "Week8 notes",
//         url: "./week8/index.html"
//     }
// ]

linksBlock1.forEach(
    item => {
        var label = item.label;
        var url = item.url;
        var ol = document.getElementById("dynamicNavBarBlock1");
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(label));
        a.href = url;
        li.appendChild(a);
        ol.appendChild(li);
    }
)

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

// add copywright info for footer
const currentDate = new Date();
const copyright = "&copy ";
const name = " | Nathan T. Hunt | Alabama";
document.querySelector('#year').innerHTML = copyright.concat(currentDate.getFullYear(), name);
const lastUpdate = "Last Updated: ";
document.querySelector('#last-update').textContent = lastUpdate.concat(document.lastModified);