import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <>
      <Toaster />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
