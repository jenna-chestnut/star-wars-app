import Results from '../Results';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Results />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders as expected', () => {
    const wrapper = shallow(<Results />);
    expect(toJson(wrapper)).toMatchSnapshot();
})