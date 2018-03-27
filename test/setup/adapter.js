/**
 * Defines Enzyme's adapter for React 16.
 */
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
