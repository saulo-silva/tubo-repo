import { Button } from "@sosa/core";
import { useIsomorphicLayoutEffect } from "@sosa/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>
      <Button>Click me Updated</Button>
    </div>
  );
}
