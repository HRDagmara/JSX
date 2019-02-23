var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'contactItem' },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                }),
                React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
                    this.props.item.email
                )
            )
        )
    },
});

React.createElement('div', {className: 'contactItem'},
    React.createElement('img', {
      className: 'contactImage',
      src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
    }),
    React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
      this.props.item.email
    )
  )

  <div className={'contactItem'}>
    <img className={'contactImage'} src={'link-do-obrazka.png'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
    </a>
</div>