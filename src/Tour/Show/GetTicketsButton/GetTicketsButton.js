import './GetTicketsButton.css';

const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
};


function GetTicketsButton(props) {
    const soldOut = props.soldOut;
    return (
        <button className={ "getTicketsButton " + (soldOut ? "soldOut": "notSoldOut")}  onClick={ () => openInNewTab(props.ticketURL)} disabled={soldOut}>
            {soldOut? "SOLD OUT":"TICKETS" }
        </button>
    );
}

export default GetTicketsButton;
