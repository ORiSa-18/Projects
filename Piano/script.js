$("body").keydown(onKey);

function onKey(event){
    var c = new Audio("assests/c.mp3");
    var c_ = new Audio("assests/c#.mp3");
    var d = new Audio("assests/d.mp3");
    var d_ = new Audio("assests/d#.mp3");
    var e = new Audio("assests/e.mp3");
    var f = new Audio("assests/f.mp3");
    var f_ = new Audio("assests/f#.mp3");
    var g = new Audio("assests/g.mp3");
    var g_ = new Audio("assests/g#.mp3");
    var a = new Audio("assests/a.mp3");
    var a_ = new Audio("assests/a#.mp3");
    var b = new Audio("assests/b.mp3");
    var press = event.key;
    console.log(press);
    switch (press) {
        case 'a':
            c.play();
            break;
        case 's':
            c_.play();
            break;
        case 'd':
            d.play();
            break;
        case 'd#':
            d_.play();
            break;
        case 'e':
            e.play();
            break;
        case 'f':
            f.play();
            break;
        case 'f#':
            f_.play();
            break;
        case 'g':
            g.play();
            break;
        case 'g#':
            c.play();
            break;
    
        default:
            break;
    }
}