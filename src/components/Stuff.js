import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';


// Fragment will dissapear once applied, use a fragment rather than a div when adding multiple things at once
const Stuff = () => (
    <>
        <Header 
            children = 'Header'/>
        <Paragraph 
            children = 'Hello World'/>
        <Square
            color = 'blue'/>
        <People
            names = {["John", "Paul", "George", "Ringo"]}/>
    </>
);

export default Stuff;