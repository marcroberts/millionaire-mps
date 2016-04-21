var names = [
    'Adam Afriyie',
    'Richard Benyon',
    'David Cameron',
    'Nick Clegg',
    '(:?Sir )Alan Duncan',
    'Zac Goldsmith',
    'Dominic Grieve',
    'Philip Hammond',
    '(:?Dame )Margaret Hodge',
    'Andrew Mitchell',
    'Ed(:?ward) Miliband',
    'Jeremy Hunt',
    'Theresa May',
    'George Osborn',
    'Geoffrey Robinson',
    'Caroline Spelman'
];

var names_regex = new RegExp(names.join('|'), 'gi');

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(names_regex, "millionaire $&");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}