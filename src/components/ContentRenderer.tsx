import Home from '../pages/Home.md';
import Projects from '../pages/Projects.md';
import Writing from '../pages/Writing.md';
import Music from '../pages/Music.md';
import Gallery from '../pages/Gallery.md';
// import Arranging from '../pages/Arranging.md';
import Page from '../routes/Page';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BlogIndex, ProjectIndex, MusicIndex } from '../pages/BlogIndex';
import Contact from '../routes/ContactForm';

const ContentRenderer = () => {
    const BlogRoutes = []
    const BlogTitles = []
    const ProjTitles = []
    const MusicTitles = []
    for (var index of BlogIndex) {
        BlogRoutes.push(<Route path={encodeURI(index.titleElem.url.replaceAll(" ", "-").replaceAll(/,|:/g, '').toLowerCase())} element={<Page pagetitles={[index.titleElem]} markdown={index.markdown}/>}></Route>);
        BlogTitles.push(index.titleElem);
    }
    for (var proj of ProjectIndex) {
        BlogRoutes.push(<Route path={encodeURI(proj.titleElem.url.replaceAll(" ", "-").replaceAll(/,|:/g, '').toLowerCase())} element={<Page pagetitles={[proj.titleElem]} markdown={proj.markdown}/>}></Route>);
        ProjTitles.push(proj.titleElem);
    }
    for (var work of MusicIndex) {
        BlogRoutes.push(<Route path={encodeURI(work.titleElem.url.replaceAll(" ", "-").toLowerCase())} element={<Page pagetitles={[work.titleElem]} markdown={work.markdown}/>}></Route>);
        MusicTitles.push(work.titleElem);
    }

    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Page markdown={Home}/>} />
                <Route path="/about" element={<Navigate to="/"/>} />
                <Route path="/projects" element={<Page pagetitles={ProjTitles} markdown={Projects}/>}/>
                <Route path="/writing" element={<Page pagetitles={BlogTitles} markdown={Writing}/>}/>
                {BlogRoutes}
                <Route path="/music" element={<Page markdown={Music}/>}/>
                <Route path="/gallery" element={<Page markdown={Gallery}/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default ContentRenderer;