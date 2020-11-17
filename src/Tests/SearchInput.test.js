import SearchInput from '../SearchInputs/SearchInput';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders as expected', () => {
    const wrapper = shallow(<SearchInput />);
    expect(toJson(wrapper)).toMatchSnapshot();
})