const heading = React.createElement(
  "h1",
  {
    id: "header",
  },
  "Hello world from react"
); //returns a object that becomes some HTML that browser understands

{
  /* Create this structure
	<div id="parent">
		<div id="child">
			<span>Hey, this is a span</span>
			<span>Hey, this is a span2</span>
		</div>
		<div id="child">
			<span>Hey, this is a span</span>
			<span>Hey, this is a span2</span>
		</div>
	</div>; */
}

//To avoid this type of structure we use JSX
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("span", {}, "Hey, this is a span"),
    React.createElement("span", {}, "Hey, this is a span2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("span", {}, "Hey, this is a span"),
    React.createElement("span", {}, "Hey, this is a span2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
