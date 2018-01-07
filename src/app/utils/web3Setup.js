import { DEVELOPMENT_BLOCKCHAIN_URI } from './constants';
import { setProvider, signInOrOut, setDefaultAccount } from '../actions/coreActions';

export default function initialiseWeb3(dispatch) {
  if (typeof window.web3 !== 'undefined') {
    const ethProvider = web3.currentProvider;

    if (web3.eth.defaultAccount) {
      // This needs to be added to state here as it doesn't persist otherwise and
      // we get some weird errors occasionally with the address being undefined
      dispatch(setDefaultAccount(web3.eth.defaultAccount));
      dispatch(setProvider(ethProvider));
      dispatch(signInOrOut(true));
    }
  }
}
