import store from '../../src/store/store.js';
import { mockStore, mockThunk } from './reduxMocks.jsx';


describe('store', function() {
  it('should be an instance of a redux store', function() {
    var expected = Object.keys(mockStore);
    var actual = Object.keys(store);
    expect(actual).to.deep.equal(expected);
  });
  it('should have a state with a .currentVideo field', function() {
    expect(store.getState().currentVideo).to.be.null;
  });
  it('should have a state with a .videoList field', function() {
    expect(store.getState().videoList).to.be.an('array');
  });
  it('should have Redux Thunk applied as middleware', function() {
    expect(store.dispatch.bind(store, mockThunk())).to.not.throw();
  });
});
