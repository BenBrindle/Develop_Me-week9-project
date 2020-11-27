import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';
import People from './components/People';
import Counter from './components/Counter';
import Colour from './components/Colour';
import GodCounter from './components/GodCounter';
import Clicked from './components/Clicked';
import Progress from './components/Progress';
import CatchMeIfYouCan from './components/CatchMeIfYouCan';


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
        <Counter
            initial = {1} max = {100}/>
        <Colour
            colours = {['black', 'red', 'blue']}/>
        <Clicked/>
        <GodCounter/>
        <Progress/>
        <CatchMeIfYouCan/>
    </>
);

export default Stuff;