import { createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { Route, RouterProvider } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from 'pages/Home';
import { ChannelPage } from 'pages/Channel';
import { VideoPage } from 'pages/Video';

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='channel/:id' element={<ChannelPage />} />
    <Route path='video/:id' element={<VideoPage />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export { App };