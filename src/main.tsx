import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
import "@/i18next";
import App from "@/App.tsx";
import "@/styles/index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: 1,
            retryDelay: 1000
        },
    },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider client={queryClient}>
        <Router>
            <App />
        </Router>
    </Provider>
);
