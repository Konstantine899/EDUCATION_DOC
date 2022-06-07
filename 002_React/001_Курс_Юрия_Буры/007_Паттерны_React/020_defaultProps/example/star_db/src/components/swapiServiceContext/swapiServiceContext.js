//src/components/swapiServiceContext/swapiServiceContext.js
import React from "react";

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } =
  React.createContext();

export { SwapiServiceProvider, SwapiServiceConsumer };
