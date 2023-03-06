function increaseSize() {
    var textArea = document.getElementById("text");
    var curSize = textArea.style.fontSize;
    setInterval(() => {
        if (curSize == "") {
            textArea.style.fontSize = curSize = "12pt";
        }
        var newSize = parseInt(textArea.style.fontSize) + 2;
        console.log(newSize + "pt");
        textArea.style.fontSize = newSize + "pt";
    }, 500);
}

function bling() {
    var chk = document.getElementById("bling").checked;
    if (chk) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "green";
        document.getElementById("text").style.textDecoration = "underline";
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)"

    } else {
        document.getElementById("text").style.fontWeight = "";
        document.getElementById("text").style.color = "";
        document.getElementById("text").style.textDecoration = "";
        document.getElementsByTagName("body")[0].style.backgroundImage = "";
    }
}

function replaceWithMalkovich() {
    const inputText = document.getElementById("text").value.trim();
    const inputTextArray = inputText.split(" ");
    const outputTextArray = [];

    inputTextArray.forEach(word => {
        if (word.length >= 5) {
            outputTextArray.push("Malkovich");
        } else {
            outputTextArray.push(word);
        }
    });

    const outputText = outputTextArray.join(" ");
    document.getElementById("text").value = outputText;
}


function convertToPigLatin() {
    const inputText = document.getElementById("text").value.trim();
    const inputTextArray = inputText.split(" ");
    const pigLatinTextArray = [];

    const vowels = ["a", "e", "i", "o", "u"];

    inputTextArray.forEach(word => {
        const firstLetter = word.charAt(0).toLowerCase();
        let pigLatinWord = "";

        if (vowels.includes(firstLetter)) {
            pigLatinWord = word + "ay";
        } else {
            let clusterEnd = 1;
            while (!vowels.includes(word.charAt(clusterEnd).toLowerCase())) {
                clusterEnd++;
            }
            pigLatinWord = word.slice(clusterEnd) + word.slice(0, clusterEnd) + "ay";
        }
        pigLatinTextArray.push(pigLatinWord);
    });

    const pigLatinText = pigLatinTextArray.join(" ");
    document.getElementById("text").value = pigLatinText;
}
