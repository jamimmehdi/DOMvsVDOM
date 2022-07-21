function setTimer() {
    const js_contents = `
    <div>
        <h1>Javascript Render</h1>
        <input type="text" />
        <p>${new Date().toLocaleTimeString()}</p>
    </div>
`
    document.getElementById('container-js').innerHTML = js_contents;

    const react_contents = React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'React Render'),
        React.createElement('input', { type: 'text' }),
        React.createElement('p', null, new Date().toLocaleTimeString())
    )

    ReactDOM.render(react_contents, document.getElementById('container-react'));
}

setInterval(setTimer, 1000);