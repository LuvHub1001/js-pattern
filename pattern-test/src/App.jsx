import { Suspense } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { ErrorBoundary, Loader } from "./components";
import observable from "./Observable";

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

const logger = (data) => {
  console.log(`${Date.now()} ${data}`);
};

function toastify(data) {
  toast(data, {
    position: "bottom-right",
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Button variant="contained" onClick={handleClick}>
          Click me!
        </Button>
        <FormControlLabel
          control={<Switch name="" onChange={handleToggle} />}
          label="Toggle me!"
        />
        <ToastContainer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
