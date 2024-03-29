// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "London", "Paris", "Tokyo"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          You clicked the button
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>A Button</Button>
    </div>
  );
}

export default App;
