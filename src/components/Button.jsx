function Button() {
    const listSections = ['Home', 'Description', 'Comments'];

    const listItems = listSections.map(element => (
        <li key={element} style={{ marginRight: '20px' }}>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: 'red', fontSize: '1rem' }}>{element}</button>
        </li>
    ));

    return <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>{listItems}</ul>;
}

export default Button;
