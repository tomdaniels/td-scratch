import Header from '../../src/js/components/header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('header.js', () => {
  describe('<Landing />', () => {
    it('should render itself', () => {
      expect(wrapper.find('.scratchpad__header-wrap'))
        .to.be.present();
    });

    it('should render a heading', () => {
      expect(wrapper.find('.scratchpad__header-item'))
        .to.be.present();

      expect(wrapper.find('.scratchpad__header-item'))
        .to.have.text('scratch.tomd.io | online javascript scratchpad');
    });
  });
});
