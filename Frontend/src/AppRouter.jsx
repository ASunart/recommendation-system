// Context
import { FormContextProvider } from "../context/FormContextProvider";

// React
import { Routes, Route } from 'react-router-dom'

// Pages
import { GenresPage, HomePage, PlatformsPage, TagsPage } from './pages';

export function AppRouter() {
    return (
        <main>
            <FormContextProvider>
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage />}
                    />
                    <Route
                        path='/genres'
                        element={<GenresPage />}
                    />
                    <Route
                        path='/platforms'
                        element={<PlatformsPage />}
                    />
                    <Route
                        path='/tags'
                        element={<TagsPage />}
                    />
                </Routes>
            </FormContextProvider>
        </main>
    )
}