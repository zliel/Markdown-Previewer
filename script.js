const Prev = props => {
  return (
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};

marked.setOptions({
  breaks: true });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

let placeholder =
`# Hello!

## This is the placeholder text to show you what different elements will look like once translated, but you can type in whatever you'd like!

You can translate inline code like your name \`<p>Zac</p>\`,

or [links](https://codepen.io/Busterfreeze),

 or 
> "block quotes", 

functions, such as 

\`\`\`
function square(x) {
  return x * x;
} 
 \`\`\`
or images like **this one** (some bold text for good measure) 

![Image](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg)

You can also make lists such as 

1. this one
1. where you could only use 1s if you want
1. they aren't a big deal`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }
  render() {
    return (
      React.createElement("div", { id: "Wrapper" },
      React.createElement("div", { id: "editor-box" },
      React.createElement("h1", { class: "myText" }, "Welcome to my Markdown Previewer!"),
      React.createElement("textarea", { id: "editor", value: this.state.markdown, markdown: this.state.markdown, onChange: this.handleChange })),


      React.createElement("div", { id: "preview-box" },
      React.createElement("div", null,
      React.createElement("h1", { class: "myText" }, "Preview"),
      React.createElement(Prev, { markdown: this.state.markdown })))));




  }}




ReactDOM.render(React.createElement(App, null), document.getElementById('test'));