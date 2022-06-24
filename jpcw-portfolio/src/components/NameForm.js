import React from 'react';

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// library.add(faPaperPlane);

class NameForm extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = { name: '', email: '', howWeCanHelp: '' };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleHowWeCanHelpChange = this.handleHowWeCanHelpChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleHowWeCanHelpChange(event) {
    this.setState({ howWeCanHelp: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetch('https://jpcw-backend.herokuapp.com/contact', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name, email: this.state.email, howWeCanHelp: this.state.howWeCanHelp})
    });

    this.setState({name: '', email: '', howWeCanHelp: ''});
  }

  render() {
    return (
      <form className="flex flex-col border-2 border-slate-400 mt-6 mx-12 p-12"
        onSubmit={this.handleSubmit}>
        <label className="text-emerald-500 font-bold my-2 rounded cursor-pointer w-1/2 text-xl block">
          Name
        </label>
        <input className="border-2 border-slate-300 py-2 px-1" placeholder="Name..." type="text" value={this.state.name} onChange={this.handleNameChange} />

        <label className="text-emerald-500 font-bold my-2 rounded cursor-pointer w-1/2 text-xl block">
          Email
        </label>
        <input className="border-2 border-slate-300 py-2 px-1" placeholder="Email..." type="email" value={this.state.email} onChange={this.handleEmailChange} />
        <label className="text-emerald-500 font-bold my-2 rounded cursor-pointer w-100 text-xl">
          How can we help you?
        </label>
        <input className="border-2 border-slate-300 py-2 px-1" placeholder="How we can help..." type="text" value={this.state.howWeCanHelp} onChange={this.handleHowWeCanHelpChange} />
        <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold my-8 h-12 rounded cursor-pointer w-40 text-xl" type="submit">
        SEND</button>
      </form>
    );
  }
}

NameForm.defaultProps = {
    action: 'https://jpcw-backend.herokuapp.com/contact',
    method: 'post'
};

export default NameForm;