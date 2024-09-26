function myRender(myRoot, myElement){
    // let element=document.createElement(myElement.type);
    // element.setAttribute('href', myElement.props.href);
    // element.setAttribute('target', myElement.props.target);
    // element.innerHTML=myElement.value;
    // myRoot.appendChild(element);
    
    // optimizing above code
    
    let element=document.createElement(myElement.type);
    for(prop in myElement.props){
        element.setAttribute(prop, myElement.props[prop]);
    }
    element.innerHTML=myElement.value;
    myRoot.appendChild(element);

}

const myElement={
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    value: 'Click me to google!!'
}
const myRoot= document.getElementById('root');
myRender(myRoot, myElement);