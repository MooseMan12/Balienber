console.log("hello");

const puncDict = {
 ",":"punc-comma",
 ".":"punc-period",
 "*":"punc-asterisk",
 "-":"punc-dash",
 "!":"punc-exclamation",
 "?":"punc-question-mark",
 ";":"punc-semi-colon",
 "#":"punc-hashtag",
 " ":"space",
 "(":"paren-open",
 ")":"paren-close",
 "'":"punc-apostrophe",
 ":":"punc-colon"
};

function engTextChanged(){
    const balEl=document.getElementById("balText");
    clearEl(balEl);
    const engText=document.getElementById("engText").value;
    const ucEngText=engText.toUpperCase();
    let quoteCnt=0;

    for (let index = 0; index <ucEngText.length; index++) {
        const character=ucEngText[index];
        let glyphName; 

        if (character === "\"" ) {
            quoteCnt++;
            glyphName=(quoteCnt%2 === 0)? "quote-close":"quote-open";
        } else {
            if (puncDict[character]) {
                glyphName=puncDict[character];
            } else {
                glyphName=character;
            }
        }
        // invariant: glyphName holds the name of the glyph to be used

        const imgEl=document.createElement("img");
        imgEl.src="glyphs/"+glyphName+".png";
        balEl.appendChild(imgEl);
        
        if (index<ucEngText.length-1) {
            const isNearSpace = (character===" ") || (ucEngText[index+1]===" ");
            if (!isNearSpace){
                const imgElBl=document.createElement("img");
                imgElBl.src="glyphs/between-letters.png";
                balEl.appendChild(imgElBl);
            }
        }
        

    }

}


function clearEl(el){
    while (el.lastElementChild){
        el.lastElementChild.remove();

    }
}