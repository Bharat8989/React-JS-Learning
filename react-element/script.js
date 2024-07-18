// const { symbol } = require("prop-types");

// const h2 = {

//     $$typeof:Symbol.for('react.element'),
//   type: "h2",
//   key: null,
//   ref: null,
//   props: {
//     className: "subheading",
//     id: "subtitle",
//     children: "Hello React",
//   },
//   _owner: null,
//   _store: {},
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h2= React.createElement('h2',{className:'subheading', id:'subtitle'},'Hello React')

// root.render(h2);

const container = React.createElement(
    "div",
    { className: "container", id: "idContainer" },
    React.createElement(
      "section",
      { id: "sectionId" },
      React.createElement(
        "p",
        { id: "paraId" },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        id: "img",
        style: { width: 300 },
        src: "https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain",
        alt: "img container"
      }),
      React.createElement("section", { key: 1 }, [
        React.createElement("form", { key: 2 }, [
          React.createElement(
            "label",
            { key: 3, htmlFor: "username" },
            "UserName: "
          ),
          React.createElement("input", { key: 4, id: "username" })
        ]),
        React.createElement("div", { className: "input-group", key: 5 }, [
          React.createElement(
            "label",
            { key: 6, htmlFor: "password" },
            "Password: "
          ),
          React.createElement("input", { key: 7, id: "password", type: "password" })
        ])
      ])
    )
  );
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(container);
  
