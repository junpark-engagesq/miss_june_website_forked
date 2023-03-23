import './GetTicketsButton.css';

const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
};


function GetTicketsButton(props) {
    console.log(props.soldOut)
    return (
        <button className="getTicketsButton" onClick={ () => openInNewTab(props.ticketURL)}>
            {props.soldOut?"SOLD OUT":"TICKETS"}
        </button>
    );
}

export default GetTicketsButton;
