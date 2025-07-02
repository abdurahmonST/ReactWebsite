const rootEl = document.getElementById("root")

const first = React.createElement('p', {
    style: {
        display: "flex",
        justifyContent: "center",
        margin: "3px",
        fontSize: "20px",
        fontWeight: "500",
        color: "#646464",
    }
}, "TESTIMONIALS")

const second = React.createElement('h2', {
    style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        fontWeight: "600",
        marginBottom: "50px",
        color: "#000",
    }
}, "Clients says about us")

const clientStyle = {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.1)",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    width: "500px",
    maxWidth: "100%",
}

const imageStyle = {
    width: "130px",
    height: "164px",
    objectFit: "cover",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px"
}

const textContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const titleStyle = {
    marginBottom: "8px"
}

const descStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5"
}

const client1 = React.createElement('div', { style: clientStyle }, [
    React.createElement('img', { src: "./assets/client1.jpg", style: imageStyle }),
    React.createElement('div', { style: textContentStyle }, [
        React.createElement('div', { style: titleStyle }, [
            React.createElement('h3', { style: { margin: 0 } }, "Louis Saville"),
            React.createElement('p', { style: { margin: 0, fontSize: "14px", color: "#999" } }, "/CEO at Google inc")
        ]),
        React.createElement('p', { style: descStyle }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ])
])

const client2 = React.createElement('div', { style: clientStyle }, [
    React.createElement('img', { src: "./assets/client2.jpg", style: imageStyle }),
    React.createElement('div', { style: textContentStyle }, [
        React.createElement('div', { style: titleStyle }, [
            React.createElement('h3', { style: { margin: 0 } }, "Rekha Varadvaz"),
            React.createElement('p', { style: { margin: 0, fontSize: "14px", color: "#999" } }, "/Manager at Nike inc")
        ]),
        React.createElement('p', { style: descStyle }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ])
])

const clientWrapper = React.createElement('div', {
    style: {
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "0 20px"
    }
}, [client1, client2])

const card = React.createElement('div', {
    style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
        backgroundColor: "#f8f8f8",
        textAlign: "center"
    }
}, [first, second, clientWrapper])

const root = ReactDOM.createRoot(rootEl)
root.render(card)
