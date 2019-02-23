var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <form className={'contactForm'}>
        <input type={'text'}>
          Imię: {this.props.contact.firstName}
        </input>
        <input type={'text'}>
          Nazwisko: {this.props.contact.lastName}
        </input>
        <input type={'email'}>
          Email: {this.props.contact.email}
        </input>
        <button type={'submit'}>Dodaj kontakt</button>
      </form>
    )
  },
})

