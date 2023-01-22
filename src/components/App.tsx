import { createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { Route, RouterProvider } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from 'pages/Home';
import { ChannelPage } from 'pages/Channel';
import { VideoPage } from 'pages/Video';
import { SearchPage } from 'pages/Search';

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='channel/:channelId' element={<ChannelPage />} />
    <Route path='video/:videId' element={<VideoPage />} />
    <Route path='search' element={<SearchPage />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export { App };