function makeDiv(classN) {
    const group = document.createElement("div");
    group.className = classN;

    return group;
}

function makeText(classN, text) {
    const item = makeDiv(classN);
    item.innerText = text;

    return item;
}

function getTasks() {
    /*
    <div class="container">
        <div class="bullet"></div>
        <div class="container_fill_1">
            <div class="title">Title</div>
            <div class="container_fill_2">
                <div class="text">text</div>
                <div class="duedate">due date</div>
            </div>
        </div>
    </div>
    */

    let url = 'https://raw.githubusercontent.com/donnyandrian/sti2task/main/tasks.json';
    fetch(url).then((response) => response.json()).then(function(json) {
        let parsed = JSON.parse(JSON.stringify(json));
        for (let i = 0; i < parsed.length; i++) {
            const element = parsed[i];

            let contentText = "";
            for (let j = 0; j < element.contents.length; j++) {
                const content = element.contents[i];

                contentText = content[0] + ": " + content[1];
            }

            const title = makeText("title", element.title);
            const text = makeText("text", contentText);
            const duedate = makeText("duedate", element.dueDate);

            const container_fill_1 = makeDiv("container_fill_1");
            const container_fill_2 = makeDiv("container_fill_2");
            
            container_fill_2.appendChild(text);
            container_fill_2.appendChild(duedate);
            
            container_fill_1.appendChild(title);
            container_fill_1.appendChild(container_fill_2);

            const container = makeDiv("container");
            const bullet = makeDiv("bullet");

            container.appendChild(bullet);
            container.appendChild(container_fill_1);

            document.getElementById("tugassec").appendChild(container);
            
            console.log(element.title);
            console.log(element.subject);
            console.log(element.dueDate);
            console.log(element.isComplete);
        }
    });
}

getTasks();