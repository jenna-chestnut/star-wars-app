import App from '../App';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <App />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders as expected', () => {
    const wrapper =
        shallow(<BrowserRouter>
            <App />
        </BrowserRouter>
        );
    expect(toJson(wrapper)).toMatchSnapshot();
})