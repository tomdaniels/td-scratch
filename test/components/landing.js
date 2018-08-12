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
    });

    it('should have a default state', () => {
      expect(wrapper.state().code).to.equal('console.log(\'hello world\')');
    });

    it('should render changes to state', () => {
      wrapper.setState(() => ({
        code: 'index == self.indexOf(item);'
      }));

      expect(wrapper.state().code).to.equal('index == self.indexOf(item);');
    });

    it('should set initial state in the constructor', () => {
      expect(wrapper.instance().constructor.calledOnce);
    });
  });
});
