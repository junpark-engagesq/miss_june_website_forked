import './Button.css';

const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
};

function Button(props) {
    return (
        <button className={ "Button " + props.className }  onClick={ () => openInNewTab(props.URL)} disabled={props.disabled}>
            {props.buttonText}
        </button>
    );
}

export default Button;
