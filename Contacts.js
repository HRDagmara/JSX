var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function () {
        var contacts = this.props.items.map(function (contact) {
            return (
                <Contact
                    item={this.contact}
                    key={this.contact.id}
                />
            );
        }),

        return (
            <ul className={'contactsList'}>
                {this.props.contacts}
            </ul>
        );
    }
})



