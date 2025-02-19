import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorFallback from "./components/ErrorFallback";
import UserContextProvider from "./contexts/UserContextProvider.jsx";

function App() {
  return (
    <>
      <Toaster />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <UserContextProvider>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="app-container">
              <Header />
              <Main />
              <Footer />
            </div>
          </Suspense>
        </UserContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
