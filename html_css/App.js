import Layout from "./components/Layout";
import { BrowserRouter } from 'react-router-dom'

export default function MyApp() {
    return (
        <>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </>
    );
}
