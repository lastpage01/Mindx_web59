function HelloWord(){
    function timeout(){
        setTimeout(() => {
            console.log("time out");
        }, 10);
    }

    function timeout222(){
        setTimeout(() => {
            console.log("time out 222");
        }, 11);
    }
    console.log("1");
    timeout222();
    timeout();
    console.log("2");
    console.log("3");
    console.log("4");
}

HelloWord();