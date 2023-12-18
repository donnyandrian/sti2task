function getTasks() {
    let url = 'https://raw.githubusercontent.com/donnyandrian/sti2task/main/tasks.json';
    fetch(url).then((response) => response.json()).then(function(json) {
        let parsed = JSON.parse(JSON.stringify(json));
        for (let i = 0; i < parsed.length; i++) {
            const element = parsed[i];
            
            console.log(element.title);
            console.log(element.subject);
            console.log(element.dueDate);
            console.log(element.isComplete);
        }
    });
}

getTasks();