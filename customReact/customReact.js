function customRender(reactElement, container) {

    // v1


    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement);


    // v2


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

var mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)