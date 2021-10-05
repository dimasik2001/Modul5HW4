// class PowComponent extends React.Component {
//     render() {
//         return <div><h2><b>Выражение: {this.props.m}<sup>{this.props.n}</sup> = {Math.pow(this.props.m, this.props.n)}</b></h2></div>;
//     }
// }

// class RectComponent extends React.Component {
//     render() {
//         return <div style={{ width: this.props.m, height: this.props.m, backgroundColor: this.props.n }}></div>
//     }

// }

const usersArray = [{ id: 1, name: "Dima", lastname: "Kaliaba", address: "Kharkiv" },
{ id: 2, name: "Alex", lastname: "Petrenko", address: "Kharkiv" },
{ id: 3, name: "Ihor", lastname: "Serdiuk", address: "Dnipropetrovsk" },
{ id: 4, name: "Ihor", lastname: "Serdiuk", address: "Dnipropetrovsk" },
{ id: 5, name: "Dima", lastname: "Kaliaba", address: "Kharkiv" },
{ id: 6, name: "Alex", lastname: "Petrenko", address: "Kharkiv" }];

class WrapperComponent extends React.Component {
    render() {
        return this.props.users.map(element =>
            <div class="card-content">
                <div class="header">
                    <h1>{element.name}</h1>
                    <h2>{element.lastname}</h2>
                    <h3>{element.address}</h3>
                </div>
                <div class="footer">
                    <h1>{element.id}</h1>
                </div>
            </div>);
    }
}

class Container extends React.Component {
    render() {
        return <div class="cards">
            <WrapperComponent users={usersArray} />
        </div>
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById("app")
)