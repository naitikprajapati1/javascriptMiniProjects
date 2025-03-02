
        let colors = document.querySelector('#colors');
        let buttons = document.querySelector("#buttons");

        function createAddButton() {
            let addedColors = {}; 

            return function() {
                let color = colors.value;
                if (color === "" || addedColors[color]) {
                    return;
                }
                let button = document.createElement("button");
                button.textContent = color;
                button.style.backgroundColor = color;
                buttons.appendChild(button);
                button.addEventListener("click", function() {
                    document.body.style.backgroundColor = color;
                });
                addedColors[color] = true;
                colors.value = "";
            };
        }
        
        document.querySelector("#Addkero").addEventListener("click", createAddButton());