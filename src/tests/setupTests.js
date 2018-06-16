//The settings in this file are used to configure adapter to enzyme.
// Documentation for this lies in airbnb documentation
//This file is not going to be picked up jest automatically.
//So we need to configure jest to pick this file in separate jest settings file
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('dotenv').config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});