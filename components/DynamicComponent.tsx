import Feature from "./Feature";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import Teaser from "./Teaser";

const Components = {
  teaser: Teaser,
  feature: Feature,
  grid: Grid,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
