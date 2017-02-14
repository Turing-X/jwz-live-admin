import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import App from '../components/App';

const AppContainer = createContainer(() => {
  const currentUserId = Meteor.userId();
  const isLoggedIn = !!currentUserId;
  return { isLoggedIn };
}, App);

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  doSomething: () => console.log('hey'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
