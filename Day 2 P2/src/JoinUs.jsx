let Join = (props) => {
    console.log(props);
    return (
        <button type={props.type} class={props.className}>
            JOIN US
        </button>
    );
}

export default Join