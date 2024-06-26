
import { Routes, Route } from 'react-router-dom';
import AnoutUs from './AboutUs';
import Contact from './Contact';
import Homepage from './Homepage';
import BookDetail from './BookDetail';
import SubpageLayput from './SubpageLayout';

function MainContent(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route  element={<SubpageLayput />}>
                   <Route path="/about-us" element={ <AnoutUs /> } />
                   <Route path="/contact" element={<Contact />} />
                   <Route path="/book/:id" element={<BookDetail />} />
                </Route>
             </Routes>   
        </>
)
}
export default MainContent;