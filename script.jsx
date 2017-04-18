class ShowText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <br/>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <ShowText/>,
    document.getElementById('text')
);


class ShowNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tal1: 0,
            tal2: 0,
            value: ''
        };
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleNum2Change = this.handleNum2Change.bind(this);
    }

    handleNumChange(e) {
        this.setState({tal1: Number(e.target.value)});
        setTimeout(() => {
            this.setState({value: this.state.tal1 + this.state.tal2});
            console.log(this.state.tal1);
        }, 1);
    }

    handleNum2Change(e) {
        this.setState({tal2: Number(e.target.value)});
        setTimeout(() => {
            this.setState({value: this.state.tal1 + this.state.tal2});
            console.log(this.state.tal1);
        }, 1)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleNumChange}/>
                <input type="text" onChange={this.handleNum2Change}/>
                <p>{this.state.value}</p>
            </div>
        )
    }

}
ReactDOM.render(
    <ShowNumber/>,
    document.getElementById('num')
);


class ShowButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            target: ''
        };
        this.firstClick = this.firstClick.bind(this);
    }

    firstClick(e) {
        let allBtn = document.getElementsByTagName('button');
        for (let i = 0; i < allBtn.length; i++) {
            if(allBtn[i].innerText !== e.target.innerText){
                allBtn[i].removeAttribute('class');
            }
        }
        this.setState({target: e.target.innerText});
        e.target.className = 'active';
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.firstClick}>Första Knappen</button>
                <button type="button" onClick={this.firstClick}>Andra Knappen</button>
                <p>{this.state.target}</p>
            </div>
        )
    }
}
ReactDOM.render(
    <ShowButton/>,
    document.getElementById('btn')
);