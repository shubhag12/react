const heading1=React.createElement("h1",{id:"tile",},"heading 1");
const heading2=React.createElement("h2",{id:"title",},"heading 2");
const container=React.createElement("div",{id:"Container",},[heading1,heading2])
const root=ReactDOM.createRoot(document.getElementById("root"));
//passiing a react element in a root
root.render(container);  
//not if we have many h1 tages in div body and so question is wheter it will replace
//all theh1 tags or it will come below it ans it will replace the tags


