import React from "react";

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props)
        this.state = {
            firs_name: "",
            last_name: "",
            email: "",
            avatar: "", 
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ firs_name: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <input placeholder="Ссылка на аватар" onChange={(e) => this.setState({ avatar: e.target.value })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        firs_name: this.state.firs_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                    }
                    if (this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }
                } >Добавить</button>
            </form>
        )
    }
}

export default AddUser 