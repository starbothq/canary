import "./index.css";
import { Presentation } from "./Presentation";
import { CoverSlide } from "./CoverSlide";
import { MissionSlide } from "./MissionSlide";
import { ProductSlide } from "./ProductSlide";
import { QuoteSlide } from "./QuoteSlide";
import { CanaryWharfSlide } from "./CanaryWharfSlide";
import { MapSlide } from "./MapSlide";
import { LocationRendersSlide1 } from "./LocationRendersSlide1";
import { LocationRendersSlide2 } from "./LocationRendersSlide2";
import { AudienceSlide } from "./AudienceSlide";
import { DeploymentSlide } from "./DeploymentSlide";
import { EfficiencySlide } from "./EfficiencySlide";
import { VisionSlide } from "./VisionSlide";
import { ContactSlide } from "./ContactSlide";

export function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide />,
        <MissionSlide />,
        <ProductSlide />,
        <QuoteSlide />,
        <CanaryWharfSlide />,
        <MapSlide />,
        <LocationRendersSlide1 />,
        <LocationRendersSlide2 />,
        <AudienceSlide />,
        <DeploymentSlide />,
        <EfficiencySlide />,
        <VisionSlide />,
        <ContactSlide />,
      ]}
    />
  );
}

export default App;
