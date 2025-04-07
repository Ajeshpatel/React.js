function customRender(reactElement, containetr){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.props)
    domElement.setAttribute("target", reactElement.props.target)

    containetr.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "-blank"
    },
    children: "Click me to visit google"
}



const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)