// Context
import { AppContextProvider } from "../context/AppContextProvider";

// React
import { Routes, Route } from 'react-router-dom'

// Pages
import { GameDetailPage, GamesPage, GenresPage, HomePage, PlatformsPage, TagsPage } from './pages';

export function AppRouter() {
    return (
        <main>
            <AppContextProvider>
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
                    <Route
                        path='/games'
                        element={<GamesPage />}
                    />
                    <Route
                        path='/games/*'
                        element={<GameDetailPage />}
                    />
                </Routes>
            </AppContextProvider>
        </main>
    )
}