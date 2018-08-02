var client = new XMLHttpRequest();
client.open('GET', 'content.md');
client.onreadystatechange = function() {
    var converter = new showdown.Converter(),
    text      = client.responseText,
    html      = converter.makeHtml(text);
    document.getElementById("root").innerHTML = html;
}
client.send();