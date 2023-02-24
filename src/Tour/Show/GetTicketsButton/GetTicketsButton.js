import './GetTicketsButton.css';

const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
};

function GetTicketsButton(props) {
    return (
        <button className="getTicketsButton" onClick={ () => openInNewTab(props.ticketURL)}>
            TICKETS
        </button>
    );
}

export default GetTicketsButton;
