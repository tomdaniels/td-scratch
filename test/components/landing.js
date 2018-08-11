import Landing from '../../src/js/components/landing';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Landing />);
});

describe('landing.js', () => {
  describe('<Landing />', () => {
    it('renders the page', () => {
      expect(wrapper).to.be.present();
    });

    it('renders the header', () => {
      expect(wrapper.find('Header')).to.be.present();
    })
  });
});
