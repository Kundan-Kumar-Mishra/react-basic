//const heading = React.createElement("h1",{},"hello from React");
//const root = ReactDOM.createRoot(document.getElementById("kk"));
//root.render(heading);

//const heading = React.createElement("h1", null, "hello from React");
//const root = ReactDOM.createRoot(document.getElementById("kk"));
//root.render(heading);

//console.log(heading); //it gives object or react element
//.createElement create object not html tag.

//while rendring mean .render it convert object into html tag

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement("h1", {}, "i am h1 tag") //if you want to create two element as children,you have to create array of element       
//     )
// );

// console.log(parent);


// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(parent);

 // React came in idea of they wanted to write whole HTML,CSS inside the javascript,you dont have go to html file
        // React.createElement API are not user Friendly, tha is why JSX came in to field.
        // 
        //asyn and defer you should know
        const heading = React.createElement("h1", { id: "title", style: { backgroundColor: "red" } }, "hello React");
        // heading.style.color = "red";

        const root = ReactDOM.createRoot(document.getElementById("kk"));
        root.render(heading);

        const heading1 = React.createElement("h1", { id: "title1" }, "headingone");
        const heading2 = React.createElement("h2", { id: "title2" }, "headingTwo");

        const container = React.createElement("div", { id: "container" }, [heading1, heading2]);

        root.render(container);
        ReactDOM.render(container, document.getElementById("root"));
