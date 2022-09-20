const links = [
    {
        label: "Week1 notes",
        url: "./week1/index.html"
    }
]

links.forEach(
    item => {
        var label = item.label;
        var url = item.url;
        var ol = document.getElementById("dynamicNavBar");
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(label));
        a.href = url;
        li.appendChild(a);
        ol.appendChild(li);
    }
)